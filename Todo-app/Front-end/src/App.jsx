import { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './components/CreaterTodo';
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  // ✅ Fetch once when component mounts
  useEffect(() => {
    fetch("http://localhost:4000/todos")
      .then(async res => {
        const json = await res.json();
        setTodos(json.todos); // must match backend key
      })
      .catch(err => console.error("Error fetching todos:", err));
  }, []); // empty dependency array = run once

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} /> {/* pass actual state */}
    </div>
  );
}

export default App;
