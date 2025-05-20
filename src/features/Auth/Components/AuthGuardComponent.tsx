import { CircularProgress } from "@mui/material";

import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { supabase } from "../../../config/supabase";


const AuthGuard = ({children}:{children:React.ReactNode}) =>{
  const [user, setUser] = useState<import('@supabase/supabase-js').User | null>(null)
  const [loading, setLoading] = useState(true)

    useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => listener.subscription.unsubscribe()
  }, [])
    if(loading) {
        return <CircularProgress/>
    }
    return user ? <>{children}</> : <Navigate to="/Login" replace/>
}

export default AuthGuard