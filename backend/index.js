import express  from "express";
import mysql  from "mysql";
import cors from "cors";
const app = express();

const db =  mysql.createConnection({
    host: "localhost",
    user:  "root",
    password: "element1992",
    database: "myTasks"
})

app.get("/", (req,res)=>{
    res.json('hello this is backend!');
})
app.use(express.json());
app.use(cors());

app.get("/tasks",(req,res)=>{
    const q = "SELECT * FROM myTasks.tasks";
    db.query(q,(err,data)=>{
        if(err) return  res.json(err)
        return res.json(data);
    });
});

app.post("/tasks",(req,res)=>{
    const q  =  "INSERT INTO tasks (`name`, `title`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.title,
    ];

    db.query(q, [values], (err,data)=>{
        if (err) return res.json(err)
        return res.json('task has been created!');
    });
});

app.delete("/tasks/:id",(req, res)=>{
    const taskId = req.params.id;
    const q = "DELETE FROM  tasks WHERE id = ?"

    db.query(q,[taskId], (err,data)=>{
        if (err)  return res.json(err);
        return res.json("Task was deleted");
    })
})

app.put("/tasks/:id",(req, res)=>{
    const taskId = req.params.id;
    const q = "UPDATE tasks SET `done` = ? WHERE id = ?"

    db.query(q,['done', taskId], (err,data)=>{
        if (err)  return res.json(err);
        return res.json("Task was updated");
    })
})

app.listen(8800, ()=>{
    console.log('connected to backend!')
});

