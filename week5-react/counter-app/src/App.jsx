import { useState } from "react";

function App(){
const[todos,setTodos]=useState([]);


function addTodo(){
  let newTodo=[];
  for(let i=0;i<todos.length;i++){
    newTodo.push(todos[i])
  }
  newTodo.push({
    title: "asda",
    description:"asaasaa"
  })
  setTodos(newTodo);

}
function Todo(props){
  

return
( <div>
  <button onClick={addTodo}>Add a random todo</button>
  {todos.map(function(todo){
return<todo title={todo.title} description={todo.description}></todo> 
  })}

  </div> 
)
}

export default App  
