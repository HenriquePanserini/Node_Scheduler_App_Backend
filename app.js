'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { config } = require('dotenv');

const app = express();
config();

//filtros external modules
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Database
const connect = require('./Database/Connect');
connect();

//rotas
const router = require('./Middleware/RouteMiddleware');
app.use('/api',router);

//servidor listening
const port = 5000;

app.listen(process.env.PORT || port, function() {
  try {
    console.log(`Conectador o servidor na porta: ${port}`);
  } catch (error) {
    console.error(error);
  }
})
