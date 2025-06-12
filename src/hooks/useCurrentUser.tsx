import { useEffect, useState } from "react";
import { supabase } from "../services/supabase";
import type { User } from "@supabase/supabase-js";

export const useCurrentUser = () => {
    const [user,setUser] = useState<User|null>(null)
    

    useEffect(()=>{
    const getSession = async () => {
        const { data } = await supabase.auth.getUser();
        setUser(data?.user)
    }

    const {data: listener} = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user || null);
      });
    getSession();
    return () =>{
        listener.subscription.unsubscribe();
    }
},[])
 return user
}