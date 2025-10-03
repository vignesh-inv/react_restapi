const express = require('express')
const mysql = require('mysql2')

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud_db"
});

db.connect(err=>{
    if(err){
        console.log("My sql error: ",err);
    }else{
        console.log("Connected to mysql");
    }
})


app.get("/all",(req,res)=>{
    db.query("Select * from users",(err,results)=>{
        if (err) {
            return res.status(500).json({
                error:err.message
            })
            
        }
        res.json(results);
    })
})

app.post("/add",(req,res)=>{
    const{name,age} =  req.body;
    db.query("insert into users (name,age) values(?,?)",[name,age],(err,result)=>{
        if (err) {
            return res.status(500).json({
                error:err.message
            });
        }
        res.status(201).json({
                message: "user added sucessfully",
                userId: result.insertId
            })
    })
})


app.listen(3000,()=>{
    console.log("server starting at https://localhost:3000");
})