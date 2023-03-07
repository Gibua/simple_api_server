/* eslint-disable semi */
/* eslint-disable indent */
const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'carsound2012'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado com sucesso.');
});

connection.query('CREATE DATABASE IF NOT EXISTS api_server',
(err, res) => {
    if (err) throw err;
});

connection.changeUser({ database: 'api_server' }, (err) => {
    if (err) throw err;
});

const createTableSQL = `
CREATE TABLE IF NOT EXISTS Pessoas(
    id int UNIQUE NOT NULL auto_increment,
    nome varchar(100) UNIQUE NOT NULL,
    email varchar(320) NOT NULL,
    telefone varchar(16),
    PRIMARY KEY(id)
);
`;

connection.query(createTableSQL, (err, res, fields) => {
    if (err) throw err;
    console.log('Tabela criada com sucesso.');
    connection.end()
    process.exit()
});
