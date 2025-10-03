import { useState } from "react";

function App(){
// const[Todos,setTodos]=useState([{
//   title : "go to gym",
//   description : "go to gym from 7-9",
//   completed: false
// },
// {
//    title : "study DSA",
//   description : "Study DSAfrom 9-11",
//   completed: true
// }]);

return(
  <div>
    <Custombutton count={count} setCount={setCount}></Custombutton>
     <Custombutton count={count+1} setCount={setCount}></Custombutton>
      <Custombutton count={count-1} setCount={setCount}></Custombutton>
       <Custombutton count={count*10} setCount={setCount}></Custombutton>
  </div>
)
}

function Custombutton(props){
  function onClickHandler() {
    props.setCount(props.count+1);
  
}

return <button onClick={onClickHandler}>
  Counter {props.count}
</button>
}

export default App

