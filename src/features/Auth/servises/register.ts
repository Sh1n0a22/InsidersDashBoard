import { supabase } from "../../../config/supabase"


export const registerUser = async (email:string,password:string) =>{
 const { error,data} = await supabase.auth.signUp({
      email,
      password,
    });
    return {error,data}
}   