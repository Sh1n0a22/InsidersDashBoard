import { Box, Button, Typography } from "@mui/material"
import CustomInput from "../../../UiReusablecomponents/AuthentificationInput";
import type { eventInputChangeType } from "../../../UiReusablecomponents/customComponentTypes";
import useAuth from "../../../hooks/useAuth";
import LoginBox from "./LoginBox";




const Register = () => {

    const {setEmail, setPassword , errorMessage , handleRegister} = useAuth()
    return (
        <Box component="form" display="flex" flexDirection="column" alignItems="stretch" justifyContent="space-between">

           <Typography  variant="h4">Create your account</Typography>
           <CustomInput label="Login" onChange={(e: eventInputChangeType) => setEmail(e.target.value)} />
           <CustomInput onChange={(e: eventInputChangeType) => setPassword(e.target.value)} type="password" label="Password" />

          <Box>{errorMessage}</Box>
          <Button variant="outlined" onClick={handleRegister}>Submit</Button>

          <LoginBox/>
        </Box>
    )
}

export default Register