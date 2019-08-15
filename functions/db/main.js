

const pool = require('./index.js');

let mainDb = {};

mainDb.get = () => {
    return new Promise((resolve,reject) => {
        // pool.query(`SELECT * FROM  users`, (err, results) => {
        //     if(err) {
        //         return reject(err);
        //     }
        //     return resolve(results);
        // })
        return resolve({xxx: 1111});
    });
}


mainDb.getById = (id) => {
    return new Promise((resolve,reject) => {
        // pool.query(`SELECT * FROM  users where id = ?`, [id], (err, results) => {
        //     if(err) {
        //         return reject(err);
        //     }
        //     return resolve(results);
        // })
        return resolve({xxx: 1111});

    });
}


module.exports = mainDb;
