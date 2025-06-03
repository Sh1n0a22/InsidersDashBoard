import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import {  type ReactNode } from "react";
import { NavLink } from "react-router";
import UploadModal from "./modalWindowUpload";
import { useCurrentUser } from "../hooks/useCurrentUser";
import LogoutButton from "../LogutButton";



const NavBar = ({ children }: { children: ReactNode }) => {
const user = useCurrentUser()

  return (
    <>
      <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h6" component="div">
              Dashboard App
            </Typography>

            <Button color="inherit">
              <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                Home
              </NavLink>
            </Button>

            <Button color="inherit">
              <NavLink to="/tasks" style={{ textDecoration: 'none', color: 'inherit' }}>
                Todo list
              </NavLink> 
            </Button>

          </Box>

         
          {user && (
              <Box> 
              <LogoutButton/> 
              <UploadModal/>
            </Box>
          )}

        </Toolbar>
      </AppBar>


      <Box display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh">
      {children}</Box>
    </>
  );
};

export default NavBar;
