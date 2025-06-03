import { supabase } from "../../../config/supabase"


export const logoutUser = async () =>{
 await supabase.auth.signOut();
}   