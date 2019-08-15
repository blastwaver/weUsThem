const express = require('express');
const mainDb = require('../db/main');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let results = await mainDb.get();
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res, next) => {

    try {
        let results = await mainDb.getByid(req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


module.exports = router;


