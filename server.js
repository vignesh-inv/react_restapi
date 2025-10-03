require('dotenv').config();
const express=require('express');
const mogoose= require('mongoose');
const bodyPaser= require('body-parser');


const app =express();

app.use(bodyPaser.json());

mogoose.connect('mongodb://127.0.0.1:27017/db',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("Mongo db connected.."))
.catch((err)=>console.log(err));

const PORT =3000;

app.listen(PORT,()=>{
    console.log("Server running at ${PORT}")
});