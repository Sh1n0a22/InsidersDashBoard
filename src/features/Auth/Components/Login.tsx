import { Box, Button, Typography } from "@mui/material"
import CustomInput from "../../../UiReusablecomponents/AuthentificationInput"
import type { eventInputChangeType } from "../../../UiReusablecomponents/customComponentTypes";
import useAuth from "../../../hooks/useAuth";
import ForgotPasswordBox from "./ForgotPasswordBox";
import RegisterBox from "./RegisterBox";


const Login = () => {
    const { errorMessage, errorState, setEmail, setPassword, handleLogin } = useAuth()

    return (
        <Box component="form" display="flex" flexDirection="column" alignItems="stretch" justifyContent="center" >
            <Typography variant="h4">Welcome Back!</Typography>

            <CustomInput onChange={(e: eventInputChangeType) => setEmail(e.target.value)} error={errorState} label="Login" />

            <CustomInput onChange={(e: eventInputChangeType) => setPassword(e.target.value)} error={errorState} type="password" label="Password" />

            <Button variant="outlined" onClick={handleLogin}>Submit</Button>

            <Box>{errorMessage}</Box>

            <ForgotPasswordBox />
            <RegisterBox />
        </Box>
    )
}

export default Login