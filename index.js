const express = require('express')
const app = express();
const port = 4000;
const quizzes = require("./db/quizzes");
app.get('/',(req,res)=>{
    res.send("hello geeks");
})
app.get('/quiz',(res,req)=>{
    res.send(quizzes);
})
app.listen(port||process.env.port,()=>{
    console.log("Server is Ready... ");
})
