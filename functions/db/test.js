
const pool = require('./index.js');

testDb = {}
testDb.get = () => {
  return new Promise((resolve,reject) => {
      // pool.query(`SELECT * FROM  users`, (err, results) => {
      //     if(err) {
      //         return reject(err);
      //     }
      //     return resolve(results);
      // })
      return resolve({xxx: 22222});
  });
}

module.exports = testDb;
