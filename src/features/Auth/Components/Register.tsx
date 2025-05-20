import { Box, Button, Typography } from "@mui/material"
import { useState } from "react";
import CustomInput from "../../../UiReusablecomponents/AuthentificationInput";


import { NavLink, useNavigate } from "react-router";
import type { eventInputChangeType } from "../../../UiReusablecomponents/customComponentTypes";
import { supabase } from "../../../config/supabase";




const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage,setErrorMessage] = useState("")

 const navigate = useNavigate();
 
  const handleRegister = async () =>{
 const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message)
    } else {
       navigate("/dashboard", { replace: true });
    }
  }
    return (
        <Box component="form" display="flex" flexDirection="column" alignItems="stretch" justifyContent="space-between">
           <Typography  variant="h4">Create your account</Typography>
           <CustomInput label="Login" onChange={(e: eventInputChangeType) => setEmail(e.target.value)} />
           <CustomInput onChange={(e: eventInputChangeType) => setPassword(e.target.value)} type="password" label="Password" />
          <Box>{errorMessage}</Box>
           <Button variant="outlined" onClick={handleRegister}>Submit</Button>

           <Box >already have an account? 
            <Button variant="outlined" >
                <NavLink to="/Login" replace>Log in</NavLink>
                </Button>
            </Box>  
        </Box>
    )
}

export default Register