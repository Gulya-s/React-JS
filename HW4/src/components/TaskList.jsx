import React from "react";
import TaskItem from "./TaskItem";

const TaskList = React.memo(({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
});

export default TaskList;
