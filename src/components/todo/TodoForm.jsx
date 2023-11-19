import React from "react";
import { TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { styled as styledMUI } from "@mui/material";
import { useFormik } from "formik";
import validationTodoSchemaForm from "../../utils/helpers/validateTodo";

const TodoForm = ({ onAddTask }) => {
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        newTask: "",
      },
      validationSchema: validationTodoSchemaForm,

      onSubmit: (values, { resetForm }) => {
        if (values.newTask.trim() !== "") {
          onAddTask({
            id: uuidv4(),
            text: values.newTask,
            completed: false,
          });
          resetForm();
        }
      },
    });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>Todo-App</h1>
      <StyledTextField
        label="New Task"
        variant="outlined"
        name="newTask"
        value={values.newTask}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.newTask && Boolean(errors.newTask)}
        helperText={touched.newTask && errors.newTask}
      />
      <StyledButton type="submit" variant="contained">
        Add Task
      </StyledButton>
    </StyledForm>
  );
};

export default TodoForm;

const StyledForm = styled.form`
  text-align: "center";
  margin-top: 20;
`;

const StyledButton = styledMUI(Button)(() => ({
  "&.MuiButton-root": {
    marginTop: 10,
  },
}));

const StyledTextField = styledMUI(TextField)(() => ({
  "&.MuiTextField-root": {
    width: "400px",
    backgroundColor: "white",
    borderRadius: "5px",
  },

  "& .MuiInputLabel-root ": {
    fontWeight: "bold",
  },
}));
