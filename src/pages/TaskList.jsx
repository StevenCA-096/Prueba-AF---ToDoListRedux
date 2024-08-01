import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Stack} from "@mui/material";
import { toggleComplete, deleteTodo } from "../redux/ToDoSlice";
import { NavLink } from 'react-router-dom';
const TaskList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();


  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <Box
        sx={{
          border: 2, p: 8, borderColor: "teal", borderRadius: 10
        }}
      >

        <ul style={{padding:"10px"}}>
          {
            todos.length > 0 ? (todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none", 
                  paddingTop:"10px",
                  paddingBottom:"10px"
                }}

              >
                <Stack direction={'row'} spacing={3}>
                  <div>
                    {todo.text}
                  </div>
                  <div>
                    <Button variant="outlined" onClick={() => handleToggleComplete(todo.id)}>
                      {" "}
                      {todo.completed ? "Marcar NO Completado" : "Marcar Completado"}{" "}
                    </Button>{" "}
                  </div>
                  <div>
                    <Button variant="outlined" onClick={() => handleDeleteTodo(todo.id)}> ELIMINAR </Button>{" "}

                  </div>
                </Stack>

              </li>
            ))) :
              (
                <Stack direction={"column"} sx={{ textAlign: "center" }}>
                  <div>
                    <span>Aun no se han agregado tareas</span>
                  </div>
                </Stack>
              )
          }
        </ul>
        <NavLink to={'/create-task'}>
          <Button variant='contained'>
            Agregar nuevas tareas
          </Button>
        </NavLink>
      </Box>
    </>
  )
}

export default TaskList