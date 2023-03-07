const pool = require('lib/db');

const createEntry = async (entryArr) => {
    return pool.query(
        `INSERT INTO Pessoas(nome, email, telefone)
        VALUES (?, ?, ?)`,
        entryArr
    )
}

const updateEntry = async (id, entryArr) => {
    return pool.query(
        `UPDATE Pessoas
        SET nome=?, email=?, telefone=?
        WHERE id=${id}`,
        entryArr
    )
}

const removeEntry = async (id) => {
    return pool.query(
        `DELETE FROM Pessoas
        WHERE id=${id}`
    )
}

const fetchAllEntries = async () => {
    return pool.query('SELECT * FROM Pessoas');
}

const fetchSingleEntry = async (id) => {
    return pool.query(
        `SELECT * 
        FROM Pessoas
        WHERE id=${id}`
    );
}

const fetchPage = async (page = 1, pageSize = 10) => {
    const first = (page-1)*pageSize;
    const last = first + pageSize;

    return pool.query(
       `SELECT *
        FROM Pessoas
        LIMIT ${first},${last}`
    )
}

module.exports = {
    createEntry,
    updateEntry,
    removeEntry,
    fetchAllEntries,
    fetchSingleEntry,
    fetchPage
}