import { supabase } from "../../../services/supabase"

export const logInUser = async (email:string,password:string) => {
     const { data,error } = await supabase.auth.signInWithPassword({email, password})
     return {data,error}
}