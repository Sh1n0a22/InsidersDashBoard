import { Box, Button } from "@mui/material";
import { NavLink } from "react-router";

const LoginBox = () => {
    return (
        <Box >already have an account?
            <Button variant="outlined" >
                <NavLink to="/Login" replace>Log in</NavLink>
            </Button>
        </Box>)
}

export default LoginBox;