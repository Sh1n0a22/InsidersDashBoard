import { Box, Button } from "@mui/material";
import { NavLink } from "react-router";

const RegisterBox = () => {
    return ( <Box display="flex">Don't have an account? 
                <Button sx={{flexGrow:1}} variant="outlined">
                <NavLink to="/Register" replace>Register</NavLink>
                </Button>
            </Box>    );
}
 
export default RegisterBox;