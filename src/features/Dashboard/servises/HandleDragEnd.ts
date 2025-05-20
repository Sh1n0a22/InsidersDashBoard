import type { DragEndEvent } from "@dnd-kit/core";
import { handleStatusChange } from "./HandleStatusChange";
import { fetchTasks } from "./FetchTasks";

 export const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    console.log("Drag ended: from", active.id, "to", over.id, over.data?.current);

    console.log(typeof active.id);
    
    const taskId = String(active.id);
    const newStatus = over.data?.current?.columnId;
      handleStatusChange(taskId, newStatus);
      fetchTasks();
  };