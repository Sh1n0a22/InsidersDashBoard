import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { hanldeLogOut } from "../Authentification/servises/HandleLogOut";
import { useEffect, useState, type ReactNode } from "react";
import { NavLink } from "react-router";
import { supabase } from "../supabase/supabase";


const Layout = ({ children }: { children: ReactNode }) => {
const [user,setUser] = useState<any>(null)

useEffect(()=>{
    const getSession = async () => {
        const { data } = await supabase.auth.getUser();
        setUser(data?.user)
    }

    supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user || null);
      });
    getSession();
},[])

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
          </Box>

         
          {user && 
          (<Button onClick={hanldeLogOut} color="inherit">
            Logout
          </Button>)}
        </Toolbar>
      </AppBar>

      <Toolbar /> 
      <Box display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh">
      {children}</Box>
    </>
  );
};

export default Layout;
