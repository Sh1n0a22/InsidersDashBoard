import { supabase } from "../../../config/supabase"


export const hanldeLogOut = async () =>{
 await supabase.auth.signOut()
}