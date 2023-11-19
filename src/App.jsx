import React from "react";
import "./App.css";
import TodoApp from "./components/todo/TodoApp";
import LoginForm from "./components/Login/LoginForm";

const App = () => {
  return (
    <>
      <LoginForm />
      <TodoApp />
    </>
  );
};

export default App;
