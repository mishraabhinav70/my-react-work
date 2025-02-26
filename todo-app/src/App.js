import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Fetch Todos
  useEffect(() => {
    axios.get('http://localhost:5000/todos')
      .then((response) => setTodos(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Add Todo
  const addTodo = () => {
    axios.post('http://localhost:5000/todos', { text: newTodo })
      .then((response) => setTodos([...todos, response.data]))
      .catch((error) => console.error(error));
    setNewTodo('');
  };

  // Delete Todo
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5000/todos/${id}`)
      .then(() => setTodos(todos.filter((todo) => todo._id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
