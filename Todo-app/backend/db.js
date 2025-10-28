const mongoose =require ("mongoose")
const { boolean } = require("zod")


//mongo url
// dont post your url in git hub

mongoose.connect("Your mongo db url");



const todoSchema=mongoose.Schema({
    title: String,
    description:String,
    completed: Boolean,
})

const todo=mongoose.model('todo',todoSchema);
module.exports={
    todo
}