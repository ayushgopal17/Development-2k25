import { useState } from "react";

export function CreateTodo(){

    const[title,setTitle]=useState("");
    const[description,setdescription]=useState("");
    return <div>

        <input style={{
            padding: 10,
            margin: 10,
        }} type="text" placeholder="title"  onChange={(e) => setTitle(e.target.value)}
       ></input><br></br>
        <input style={{
            padding: 10,
            margin: 10,
        }}type="text" placeholder="description"  onChange={(e) => setTitle(e.target.value)}></input><br></br>
        <button style={{
            padding: 10,
            margin: 10,
        }} onClick={() => {
            fetch("http://localhost:4000/todos",{
                method: "POST",
                body: JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                 
                    "Content-type": "application/json",
                }
            }
            )
            .then(async function(res) {
                const json =await res.json();
                alert("Todo Added");
                
            })
        }}> Add a todo</button>
    </div>
}