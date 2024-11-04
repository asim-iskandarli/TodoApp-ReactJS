import { Box, Typography, Button, TextField } from "@mui/material";
import { createButton, createTodo, text, textInput } from "../styles/style";
import React, { useState } from "react";
import { TodoListI } from "./TodoList";

const CreateTodo: React.FC<TodoListI> = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setNewTodo(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    const todo = {
      id: Math.floor(Math.random() * 99999) + 1,
      todo: newTodo,
      completed: false,
    };

    const newTodoList = [...todos, todo]
    setTodos(newTodoList);
    console.log(newTodoList)
    localStorage.setItem('todos', JSON.stringify(newTodoList));
    setNewTodo("");
  };

  return (
    <Box sx={createTodo}>
      <Typography sx={text}>Todo App</Typography>
      <form style={{ width: "100%", display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
        <TextField
          sx={textInput}
          placeholder="Enter todo"
          onChange={handleChangeInput}
          value={newTodo}
          name="todo"
        />
        <Button sx={createButton} variant="contained" type="submit">
          Create
        </Button>
      </form>
    </Box>
  );
};

export default CreateTodo;
