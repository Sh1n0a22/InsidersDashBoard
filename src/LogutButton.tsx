import {  Button } from "@mui/material"
import { logoutUser } from "./features/Auth/servises/logOut"
import { useNavigate } from "react-router"


const LogoutButton = () => {
    const navigate = useNavigate()

    const hanldeLogOut  = async () => {
        await logoutUser();
        navigate("/Login" , {replace:true})
    }

    return <Button onClick={hanldeLogOut} color="inherit">
            Logout
          </Button> 
}

export default LogoutButton