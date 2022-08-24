import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()

  const newTodo = {
    id: new Date().getTime(),
    text: todo,
    completed: false,
  }

  setTodos([...todos].concat(newTodo));
  setTodo("")
  }
  const deleteTodo = (id) => {
    const updateTodo = [...todos].filter((todo) => console.log(todo)  )
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="ToDoList">
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add todo</button>
      </form>
      {todos.map((todo) => (
        <div className="list" key={todo.id}>
          <div>{todo.text}</div>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
      ))}
    </div>
  );
};

export default ToDoList;
