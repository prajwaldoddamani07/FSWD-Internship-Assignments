const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];

app.get("/tasks",(req,res)=>{
 res.json(tasks);
});

app.post("/tasks",(req,res)=>{
 tasks.push(req.body);
 res.json(tasks);
});

app.put("/tasks/:id",(req,res)=>{
 res.send("Task Updated");
});

app.delete("/tasks/:id",(req,res)=>{
 res.send("Task Deleted");
});

app.listen(5000);