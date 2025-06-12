import { Box, Button, Typography } from "@mui/material"
import CustomInput from "../../../sharedComponents/CustomInput"
import { useNavigate, useSearchParams } from "react-router"
import { useEffect, useState } from "react"

import type { eventInputChangeType } from "../../../sharedComponents/types/customComponentTypes"
import { supabase } from "../../../services/supabase"

const ResetPasword = () => {
    const [searchParams] = useSearchParams()
    const [newPassword,setNewPassword] = useState("")
    const navigate = useNavigate();
    const accessToken = searchParams.get("access_token")

    useEffect(()=>{
        if (!accessToken) {
            console.log("Invalid or missing reset token.")
        }
    },[accessToken])

    const handePasswordChange = async () =>{
        const { error } = await supabase.auth.updateUser(
            {password:newPassword},
        )
        if (error) {
            alert(error)
        } else {
            navigate("/Login",{replace:true})
        }
    }


    return(<Box display="flex" flexDirection="column" alignItems="stretch" justifyContent="space-between">
            <Typography  variant="h4">Change your password</Typography>
           
           <CustomInput onChange={(e: eventInputChangeType) => setNewPassword(e.target.value)} type="password" label="Enter new password"/>
           <Button variant="outlined" onClick={handePasswordChange}>Change password</Button>

    </Box>
        
    )
}
export default ResetPasword