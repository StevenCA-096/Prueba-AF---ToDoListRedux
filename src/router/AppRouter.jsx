import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import TaskList from "../pages/TaskList";
import ToDoLayout from "../layout/ToDoLayout";
import CreateTask from "../pages/CreateTask";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<ToDoLayout />}>
                <Route path="/" element={<TaskList />}></Route>
                <Route path="/create-task" element={<CreateTask />}></Route>
            </Route>
        </>
    )
)