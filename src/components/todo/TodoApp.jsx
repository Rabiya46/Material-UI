import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { ThemeProvider } from "styled-components";
import theme from "../../utils/helpers/theme";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startEditingTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isEditing: true } : task
      )
    );
  };

  const updateTask = (taskId, updatedText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, text: updatedText, isEditing: false }
          : task
      )
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <TodoForm onAddTask={addTask} />
        <TodoList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleCompletion={toggleTaskCompletion}
          onStartEditing={startEditingTask}
          onUpdateTask={updateTask}
        />
      </ThemeProvider>
    </>
  );
};

export default TodoApp;
