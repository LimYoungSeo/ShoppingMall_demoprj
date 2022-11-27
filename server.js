
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/h1',(req,res)=>{
    res.send({message : 'hello server'});

});

app.listen(port,() => console.log('server port ${port}'));
