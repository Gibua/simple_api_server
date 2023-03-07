/* eslint-disable semi */
/* eslint-disable indent */
require('app-module-path').addPath(__dirname);
const mysql = require('mysql2/promise');
const db = require('lib/dbServices');
const pool = require('lib/db');


/*async function test() {
    try {
        /*await pool.connPool.execute(
            `INSERT INTO Pessoas(nome, email, telefone)
            VALUES (?, ?, ?)`,
            ['asa', 'baaa', null]
        )
        console.log('Sucesso!');
        console.log( await pool.query('SELECT * FROM Pessoas WHERE id=1'))
       // console.log(res);
    } catch (err) {
        console.log(err);
        console.log(err.errno);
    }
}*/

async function test(){
    //console.log(await db.createEntry(['aas', 'b', 'c']))
    //console.log(db.fetchAllEntries())
    console.log(await db.updateEntry(16, ['ldkhaaa', 'bklkld', 'c'])); 
    console.log("asasasasasas");
    /*const results = await pool.connPool.execute(
        `INSERT INTO Pessoas(nome, email, telefone)
        VALUES (?, ?, ?)`,
        ['czcassa', 'baaa', null]);*/
}

console.log('1');
test();
console.log('2');
