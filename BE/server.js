const express = require('express');
const app = express();
var cors = require('cors')
const restList = require('./data.json')
const resItems = require('./resItems.json');

app.use(cors());

app.get('/',(req,res)=>{
    res.json({status:200,message:'connected to server'})
})
app.get('/data',(req,res)=>{

     res.json({status:200,message:'success',data:restList});
})

app.get('/resItems',(req,res)=>{
    res.json({status:200,message:'success',data:resItems});
})

app.listen(4000,()=>{
    console.log("server is listening port 4000")
})