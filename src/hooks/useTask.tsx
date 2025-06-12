import { useState } from "react";
import { supabase } from "../services/supabase";
import useTaskBoard from "./useTaskBoard";

const useTask = () => {
      const [title, setTitle] = useState('');
      const [description, setDescription] = useState('');
      const [status, setStatus] = useState('todo');
      const {closeModal} = useTaskBoard()

        const handleAdd = async () => {
          const user = (await supabase.auth.getUser()).data.user;
          const { error } = await supabase.from('tasks').insert([{
            title,
            description,
            status,
            user_id: user?.id || null,
            created_at: new Date().toISOString(),
          }]);
      
          if (error) {
            console.error('Failed to add task:', error.message);
            return;
          }
          closeModal();
        };
   return {title,description,status,setTitle,setDescription,setStatus,handleAdd}
}
 
export default useTask;