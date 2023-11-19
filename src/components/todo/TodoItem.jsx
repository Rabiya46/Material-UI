import React, { useState } from "react";
import {
  ListItem,
  Checkbox,
  IconButton,
  TextField,
  styled as styledMUI,
  ListItemText,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { styled } from "styled-components";

const TodoItem = ({
  task,
  onDeleteTask,
  onToggleCompletion,
  onStartEditing,
  onUpdateTask,
}) => {
  const [editedTaskText, setEditedTaskText] = useState(task.text);

  const handleUpdateTask = () => {
    if (editedTaskText.trim() !== "") {
      onUpdateTask(task.id, editedTaskText);
    }
  };

  const handleChangeToggleCompletion = () => {
    onToggleCompletion(task.id);
  };

  const handleChangeEditedTaskText = (e) => {
    setEditedTaskText(e.target.value);
  };

  const handleStartEditing = () => {
    onStartEditing(task.id, task.text);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <Container>
      <StyledListItem key={task.id}>
        <Checkbox
          checked={task.completed}
          onChange={handleChangeToggleCompletion}
        />
        {task.isEditing ? (
          <StyledTextField
            value={editedTaskText}
            onChange={handleChangeEditedTaskText}
            onBlur={handleUpdateTask}
          />
        ) : (
          <StyledListItemText
            primary={task.text}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            s
          />
        )}
        {task.isEditing ? (
          <IconButton edge="end" onClick={handleUpdateTask}>
            <Edit />
          </IconButton>
        ) : (
          <IconButton edge="end" onClick={handleStartEditing}>
            <Edit />
          </IconButton>
        )}
        <IconButton edge="end" onClick={handleDeleteTask}>
          <Delete />
        </IconButton>
      </StyledListItem>
    </Container>
  );
};

export default TodoItem;

const StyledListItem = styledMUI(ListItem)(() => ({
  "&.MuiListItem-root": {
    backgroundColor: "white",
    color: "black",
    width: "50%",
    borderRadius: "10px",
    marginBottom: "10px",
  },
}));

const StyledTextField = styledMUI(TextField)(() => ({
  "&.MuiTextField-root": {
    width: "100%",
    backgroundColor: "white",
    borderRadius: "5px",
  },
}));

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledListItemText = styledMUI(ListItemText)((props) => ({
  wordBreak: "break-word",
}));
