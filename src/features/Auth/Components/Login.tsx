import {  Box, Button, Typography} from "@mui/material"
import CustomInput from "../../../UiReusablecomponents/AuthentificationInput"

import { NavLink, useNavigate } from "react-router";
import {  useState } from "react";
import type { eventInputChangeType } from "../../../UiReusablecomponents/customComponentTypes";
import { supabase } from "../../../config/supabase";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorState,setErroState] = useState(false)
 const navigate = useNavigate();

 const hanldeLogin = async () =>  {

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if (error) {
        setErrorMessage(error.message)
    } else {
       navigate("/dashboard", { replace: true });
    }}
const handlePasswordChange = async () => {
    const {  error } = await supabase.auth.resetPasswordForEmail(email,
        {redirectTo:'http://localhost:5173/PasswordReset'});
    if (error) {
        setErrorMessage("Error sending password reset email.");
        setErroState(true);
    } else {
        setErrorMessage("Password reset email sent.");
        setErroState(false);
    }
}

    return (
        <Box component="form" display="flex" flexDirection="column" alignItems="stretch" justifyContent="center" >
           {/* <CustomInput customErrorState = {errorState} customInputType="" customLabel="Login"/>
           <CustomInput customErrorState = {errorState} customInputType="password" customLabel="Password"/> */}
            <Typography  variant="h4">Welcome Back!</Typography>

           <CustomInput onChange={(e: eventInputChangeType) => setEmail(e.target.value)}  error ={errorState} label="Login" />

           <CustomInput onChange={(e: eventInputChangeType) => setPassword(e.target.value)} error ={errorState} type="password" label="Password" />

           <Button variant="outlined" onClick={() => hanldeLogin()}>Submit</Button>



           <Box>{errorMessage}</Box>

           <Box >Forgot your password? 
            <Button variant="outlined" onClick={handlePasswordChange}>reset password</Button>
           </Box>
          
          
           <Box display="flex">Don't have an account? 
                <Button sx={{flexGrow:1}} variant="outlined">
                <NavLink to="/Register" replace>Register</NavLink>
                </Button>
            </Box>    
        </Box>
    )
}

export default Login