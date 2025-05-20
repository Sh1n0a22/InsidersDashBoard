import { supabase } from "../../../config/supabase";
import type { Task } from "../types/TodolistTypes";

export const fetchTasks = async (): Promise<Task[]>  =>{
  const { data, error } = await supabase.from("tasks").select("*");
  if (error) {
    console.error("Fetch error:", error);
    return [];
  }
  return data || [];
}

