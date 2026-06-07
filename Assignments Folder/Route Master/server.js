const express = require("express");

const app = express();

app.get("/books",(req,res)=>{
 res.send("Books List");
});

app.get("/authors",(req,res)=>{
 res.send("Authors List");
});

app.listen(5000);