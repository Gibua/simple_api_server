/* eslint-disable semi */
/* eslint-disable indent */
const mysql = require('mysql2/promise');

class Pool {
    constructor() {
        this.connPool = mysql.createPool({
            host: 'localhost',
            user: 'admin',
            password: 'carsound2012',
            database: 'api_server'
        });
    }

    async query(sqlString, parameters) {
        /*try {
            const [res, ] = await this.connPool.execute(sqlString, parameters);
            return [res, null];
        } catch (err) {
            console.log(err);
            if (err.errno){ 
                return [null, err.errno];
            }
        }*/
        
        const [res, ] = await this.connPool.execute(sqlString, parameters);
        
        return res
    }
}

module.exports = new Pool();
