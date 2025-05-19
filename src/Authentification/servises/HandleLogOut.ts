import { supabase } from "../../supabase/supabase"

export const hanldeLogOut = async () =>{
 await supabase.auth.signOut()
}