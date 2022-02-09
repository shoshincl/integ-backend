import cors from 'cors';
const express = require('express');
const { router } = require('./routes');

export const app = express();

app.use(cors());
app.use(router);
app.use(express.json());

module.exports.app = app;
