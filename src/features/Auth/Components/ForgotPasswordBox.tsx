import { Box, Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";


const ForgotPasswordBox = () => {
    const { handlePasswordChange } = useAuth()
    return ( <Box>Forgot your password? 
            <Button variant="outlined" onClick={handlePasswordChange}>reset password</Button>
           </Box> );
}
 
export default ForgotPasswordBox;