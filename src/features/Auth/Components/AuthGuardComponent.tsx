import { CircularProgress } from "@mui/material";

import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { supabase } from "../../../config/supabase";
import type { User } from "@supabase/supabase-js";


const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setLoading(false)
    })

    const fetchUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)
      } catch (error) {
        console.error('Failed to fetch user:', error);
        setUser(null);
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => listener.subscription.unsubscribe()
  }, [])
  if (loading) {
    return <CircularProgress />
  }
  if(!user){

  }
  return user ? <>{children}</> : <Navigate to="/Login" replace />
}

export default AuthGuard