import { useState, useRef, useCallback, useEffect } from "react";
import TaskList from "./components/TaskList";
import "./App.css";


function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("all");
  const inputRef = useRef();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback(() => {
    const text = inputRef.current.value.trim();
    if (text) {
      setTasks(prev => [...prev, { id: Date.now(), text, completed: false }]);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  }, []);

  const filteredTasks = tasks.filter(task =>
    filter === "active" ? !task.completed :
    filter === "completed" ? task.completed : true
  );

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="app">
      <h1>Todo List</h1>
      <input ref={inputRef} placeholder="Введите задачу..." />
      <button onClick={addTask}>Добавить задачу</button>

      <div className="filters">
        <button onClick={() => setFilter("all")}>Все</button>
        <button onClick={() => setFilter("active")}>Активные</button>
        <button onClick={() => setFilter("completed")}>Выполненные</button>
      </div>

      <TaskList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />

      <p>Всего: {tasks.length} | Выполнено: {completedCount}</p>
    </div>
  );
}

export default App;
