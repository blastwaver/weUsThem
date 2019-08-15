const functions = require('firebase-functions');
const express = require('express');
const mainRoute =  require('./routes/main_route');
const testRoute =  require('./routes/test_route');
const cors = require('cors');

const app =  express();

app.use(cors());

app.use(express.json());

app.use('/api/main', mainRoute);
app.use('/api/test', testRoute);

exports.app = functions.https.onRequest(app);
