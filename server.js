/* eslint-disable semi */
// eslint-disable-next-line no-undef
require('app-module-path').addPath(__dirname);
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routers = require('./lib/routes');

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('short'))
app.use(express.static('build'))

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'destino desconhecido' })
}
  
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
    //console.error(err.message)

    if (err.code){
        /*if (err.code === 'ER_BAD_NULL_ERROR'){
            return res.status(400).json({ error: error.message })
        };*/
        if (err.code === 'ER_DUP_ENTRY'){
            res.status(409)
                .json({error: err.message})
        }
    } else {
        res.status(err.status || 500)
            .json({status: err.status, error: err.message});
    }

    return;
}

app.use('/api/pessoas', routers);
app.use(errorHandler);
app.use(unknownEndpoint);


const port = 3001;
app.listen(port);
console.log(`Servidor iniciado! Porta: ${port}`)
