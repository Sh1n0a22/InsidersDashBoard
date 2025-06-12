import { supabase } from "../../../services/supabase"


export const logoutUser = async () =>{
 await supabase.auth.signOut();
}   