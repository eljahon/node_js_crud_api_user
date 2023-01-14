const express = require('express');
const dotenv = require('dotenv');
const RootApp = require('./app');
var cors = require('cors')
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
