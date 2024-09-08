const express = require('express');
const app = express();
var cors = require('cors')
const restList = require('./data.json')
const resItems = require('./resItems.json');
const resItemsUpdated = require('./resItemUpdated.json');

app.use(cors());

app.get('/',(req,res)=>{
    res.json({status:200,message:'connected to server'})
})
app.get('/data',(req,res)=>{

     res.json({status:200,message:'success',data:restList});
})

app.get('/resItems/:id',(req,res)=>{
    console.log(req.params.id);
    let resData = resItemsUpdated.restaurants.filter((res)=>{
         return res.resId == req.params.id;
    })
    console.log("resData!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",resData[0].category);
    res.json({status:200,message:'success',data:resData});
})

app.get('/resItems',(req,res)=>{
    res.json({status:200,message:'success',data:resItems})
})

app.listen(4000,()=>{
    console.log("server is listening port 4000")
})