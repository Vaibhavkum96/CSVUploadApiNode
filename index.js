const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const csvRoute = require('./routes/uploadCSVRoute')

const connect = async()=> {
  try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDb")
  }

  catch(err){
    throw err
  }
}

mongoose.connection.on("disconnected" , ()=> {
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected", ()=> {
    console.log("mongoDB Connected")
})






app.use('/api',csvRoute);


app.listen(8800, ()=> {
    connect()
    console.log("BackEnd Connected!");
})

