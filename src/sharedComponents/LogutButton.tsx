import { Button } from "@mui/material"
import useAuth from "../hooks/useAuth"

const LogoutButton = () => {
    const {hanldeLogOut} = useAuth()
    return <Button onClick={hanldeLogOut} color="inherit">
        Logout
    </Button>
}

export default LogoutButton