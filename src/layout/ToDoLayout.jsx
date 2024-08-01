import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, CssBaseline, Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Outlet } from 'react-router-dom';

const ToDoLayout = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
    };
  
    const menuItems = [
      {
        url: "/",
        title: "Lista de tareas"
      },
      {
        url: "/create-task",
        title: "Agregar tarea"
      }
    ]
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer}
              sx={{ mr: 2, ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Steven Cordero Alvarez - Prueba AF - ToDoList Redux
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant='persistent'
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List sx={{ width: "100%", borderRadius: 2, padding: 1 }}>
              <ListItem>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={toggleDrawer}
                  sx={{ mr: 2, ml: 1, p:2 }}
                >
                  <MenuIcon />
                </IconButton>
              </ListItem>
              {
                menuItems.map(item =>
                  <ListItem key={item.url}>
                    <Box >
                      <NavLink style={{color:"black", textDecoration:"underline", padding:"2px"}} to={item.url}>{item.title}</NavLink>
                    </Box>
                  </ListItem>
                )
              }
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    );
}

export default ToDoLayout