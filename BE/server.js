const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.json({status:200,message:'connected to server'})
})
app.get('/data',(req,res)=>{

     res.json({status:200,message:'success'});
})

app.listen(4000,()=>{
    console.log("server is listening port 4000")
})