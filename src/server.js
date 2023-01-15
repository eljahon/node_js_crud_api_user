const express = require('express'),
dotenv = require('dotenv'),
RootApp = require('./app'),
cors = require('cors'),
bodyParser = require("body-parser");
dotenv.config()

const app= express()
const PORT= process.env.PORT || 7000;
const url =  process.env.DATABASE_URL;
app.use(cors())
app.use(express.json())
async function Start() {
  await RootApp({app, PORT, url})   
};
Start()
