const mongoose =require ("mongoose")
const { boolean } = require("zod")


//mongo url
// dont post your url in git hub

// mongoose.connect("mongodb+srv://Ayush12345:Mongodb%40998877@cluster0.epz0jiw.mongodb.net/")
mongoose.connect("mongodb+srv://Ayush12345:Mongodb%40998877@cluster0.epz0jiw.mongodb.net/todosDB");



const todoSchema=mongoose.Schema({
    title: String,
    description:String,
    completed: Boolean,
})

const todo=mongoose.model('todo',todoSchema);
module.exports={
    todo
}