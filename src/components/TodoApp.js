// TodoApp.js

import React, { useState } from "react";
import styles from "./TodoApp.module.css"; // Import the new styles
import { Link } from "react-router-dom";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
 
  const removeTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className={styles.todocontainer}>
    
      <div className={styles.todocontent}>
        <h1>Todo App</h1>
        <div className={styles.todoinput}>
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className={styles.addbutton} onClick={addTask}>Add</button>
        </div>
        <ul className="remove_add_container">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? styles.completed : ""}>
              <span className={styles.textcontainer}>{task.text}</span>
              <button 
              
              className={styles.addbutton} onClick={() => toggleTask(task.id)}>Completed</button>
              <button  className={styles.removebutton} onClick={() => removeTask(task.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <div className={styles.footer}>
        <p>Total tasks: {tasks.length}</p>
        <p>Completed tasks: {completedTasks}</p>
        <Link to="/"><button className={styles.logoutbutton} >
            Logout
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
