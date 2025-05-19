import { Box } from "@mui/material"
import { supabase } from "../supabase/supabase"

const {data:{user}} = await supabase.auth.getUser()
const Dashboard = () =>{
 return(<>
    <Box>{user?.id}</Box>
    <Box>{user?.email}</Box>
    <Box>{user?.created_at}</Box>
 </>)
} 

export default Dashboard