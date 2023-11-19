import React from "react";
import { List } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({
  tasks,
  onDeleteTask,
  onToggleCompletion,
  onStartEditing,
  onUpdateTask,
}) => {
  return (
    <List style={{ marginTop: 20 }}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleCompletion={onToggleCompletion}
          onStartEditing={onStartEditing}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </List>
  );
};

export default TodoList;
