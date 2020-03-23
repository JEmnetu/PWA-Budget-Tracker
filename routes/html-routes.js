const express = require('express');
const app = express;


module.exports = (app) =>{

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + 'index.html'), (err)=>{
        if(err) throw err;
    });
})







}