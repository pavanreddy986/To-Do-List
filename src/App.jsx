import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function addTask() {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        id: Date.now(),
        title: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask('');
    }
  }

  function toggleTask(id) {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function editTask(id) {
    const newTitle = prompt('Edit the task title:');
    if (newTitle) {
      setTasks(
        tasks.map(task =>
          task.id === id ? { ...task, title: newTitle } : task
        )
      );
    }
  }

  return (
    <div className="app">
      <Header />
      <br />
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ToDoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
}

export default App;

