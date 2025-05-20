import { supabase } from "../../../config/supabase";
import { fetchTasks } from "./FetchTasks";

export const handleStatusChange = async (taskId: string, newStatus: string) => {
   console.log("changing");
   
    const { error } = await supabase
      .from("tasks")
      .update({ status: newStatus })
      .eq("id", taskId);
    if (error) console.error("Update error:", error);
    else fetchTasks();
  }