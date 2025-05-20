import { Box, Button, Typography } from "@mui/material"
import { supabase } from "../../../config/supabase"

import Gallery from "./Gallery"




const {data:{user}} = await supabase.auth.getUser()


const Dashboard = () =>{
 return(
   <Box>
    <Gallery/>
 </Box>)
} 

export default Dashboard