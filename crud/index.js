const express = require ('express')
const app=express()

app.use(express.json())

let todos=[]

app.post('/todos',(req,res)=>{
    const { task }= req.body

    const newTodo={
        id: Date.now(),
        task
    }

    todos.push(newTodo)
    res.json(newTodo)
})

app.get('/todos',(req,res) =>{
    res.json(todos)
})

app.listen(3000)