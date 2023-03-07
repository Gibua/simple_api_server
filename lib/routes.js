const router = require('express').Router();
const dbServices = require('lib/dbServices');

function arrHelper(person) {
    return [
        person.nome ?? null,
        person.email ?? null,
        person.telefone ?? null,
    ]
}

router.post('/', async (req, res, next) => {
    try {
        const results = await dbServices.createEntry(arrHelper(req.body))
        res.json(await dbServices.fetchSingleEntry(results.insertId));
    } catch (err) {
        next(err);
    }
})

router.get('/', async (req, res, next) => {
    try {
        const entries = await dbServices.fetchAllEntries()
        res.json(entries);
    } catch (err) {
        next(err);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const queryRes = await dbServices.fetchSingleEntry(req.params.id)
        if (queryRes.length) {
            res.json(queryRes[0]).end();
        } else {
            res.status(404).json({error: 'Resource not found'}).end();
        }
    } catch (err) {
        next(err);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        await dbServices.updateEntry(req.params.id, arrHelper(req.body));
        const updatedEntry = await dbServices.fetchSingleEntry(req.params.id);
        res.json(updatedEntry[0]);
    } catch (err) {
        next(err);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
      const results = await dbServices.removeEntry(req.params.id);
      if (results.affectedRows){
        res.status(204).json([]).end();
      } else {
        res.status(404).json({error: 'Resource not found'}).end();
      }
      
    } catch (err) {
      next(err);
    }
});

module.exports = router;