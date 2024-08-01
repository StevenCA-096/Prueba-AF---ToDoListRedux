import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/ToDoSlice";
import { Box, Button, Stack, TextField } from "@mui/material";
import { Navigate, NavLink, useNavigate } from 'react-router-dom';

const CreateTask = () => {
  const [text, setText] = useState("");
  const [error, SetError] = useState(false)
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleInputChange = (e) => {

    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
      SetError(false)
      navigate('/')
    } else {
      SetError(true)
    }
  };

  return (
    <>
      <Box
        sx={{
          border:2,p:10,borderColor:"teal",borderRadius:10
        }}
      >
        <TextField
          id="filled-error-helper-text"
          defaultValue="Hello World"
          variant="filled"
          value={text}
          onChange={handleInputChange}
          type="text"
          error={error}
          label="Nombre de la tarea"
          helperText={error ? (error) : ("")}
          
        />
        <Stack direction={"column"} sx={{p:3,gap:2}}>
          <div>
            <Button onClick={handleAddTodo} variant="contained"> Agregar </Button>{" "}

          </div>
          <div>
            <NavLink to={'/'}>
            <Button variant="outlined"> Lista de tareas </Button>{" "}
            </NavLink>
          </div>
        </Stack>

      </Box>
    </>
  )
}

export default CreateTask