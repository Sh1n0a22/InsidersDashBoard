import { Box, Typography } from "@mui/material"
import { supabase } from "../supabase/supabase"

const {data:{user}} = await supabase.auth.getUser()
const Dashboard = () =>{
 return(
 
 
 <Box>
    <Typography>{user?.id}</Typography>
    <Typography>{user?.email}</Typography>
    <Typography>{user?.created_at}</Typography>

 </Box>)
} 

export default Dashboard