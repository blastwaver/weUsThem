const express = require('express');
const testDb = require('../db/test')
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let results = await testDb.get();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

// router.get('/:id', async (req, res, next) => {

//     try {
//         let results = await db.one(req.params.id);
//         res.json(results);
//     } catch (e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// });

module.exports = router;
