import { useState } from "react";

function App(){
const[todos,setTodos]=useState([{
  title : "go to gym",
  description : "go to gym from 7-9",
  completed: false
},
{
   title : "study DSA",
  description : "Study DSAfrom 9-11",
  completed: true
}]);

function addTodo(){
  setTodos([...todos,{
    title: "new todo",
    description: "description of new todo"
  }])
}
return(
  <div>
    <button onClick={addTodo}>Add a random Todo</button>
  {
  todos.map(function(todo){
    return <Todo title={todo.title} description={todo.description} />
  })}

  </div>

)
}

function Todo(props){
  

return <div>
  <h1>{props.title}</h1>
  <h2>{props.description}</h2>
</div>
}

export default App

