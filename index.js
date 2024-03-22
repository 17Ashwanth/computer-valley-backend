require('dotenv').config()

const express = require('express')

const cors = require('cors')

 const routes = require('./Router/router')

 require('./DB/connection')

 
 const cvServer = express()

 cvServer.use(cors())
 
 cvServer.use(express.json())

 cvServer.use(routes)

 cvServer.use('/uploads',express.static('./uploads'))

 
 const PORT =4000 || process.env.PORT
 cvServer.listen(PORT,()=>{
    console.log(`CV SERVER LISTENS TO ${PORT}`);
 })

 cvServer.get('/',(req,res)=>{
    res.send("HELLO CV SERVER ARE YOU THERE!")
 })