import { supabase } from "../../../services/supabase"

export const resetUserPassword = async (email:string) => {
         const { error } = await supabase.auth.resetPasswordForEmail(email,
            {redirectTo:'http://localhost:5173/PasswordReset'});
     return error
}