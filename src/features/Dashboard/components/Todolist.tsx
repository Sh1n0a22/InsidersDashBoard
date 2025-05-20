import { useEffect, useState } from "react";
import { supabase } from "../../../config/supabase";
import AddTaskModal from "../../../layouts/AskModal";
import { Button, Box, Typography, Paper } from "@mui/material";
import {DndContext,closestCenter, type DragEndEvent,} from "@dnd-kit/core";
import type { Task, TaskColumnProps } from "../types/TodolistTypes";
import TaskColumn from "./TaskColumn";

import TaskDetailsModal from "./TaskDetailsModal";

export default function TasksBoard() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
const [detailsOpen, setDetailsOpen] = useState(false);



  useEffect(() => {
    fetchTasks();
  }, [open]);
  async function fetchTasks() {
    const { data, error } = await supabase.from("tasks").select("*");
    if (error) console.error(error);
    else setTasks(data || []);
  }

  async function handleStatusChange(taskId: string, newStatus: string) {
    const { error } = await supabase
      .from("tasks")
      .update({ status: newStatus })
      .eq("id", taskId);
    if (error) console.error("Update error:", error);
    else fetchTasks();
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;    
    const taskId = String(active.id);
    const newStatus = over.data?.current?.columnId;
      handleStatusChange(taskId, newStatus);
      fetchTasks();
  };

  return (
    <Box display="flex" flexDirection="column">
      <Button variant="contained" onClick={() => setOpen(true)} sx={{ mb: 2 }}>
        Add Task
      </Button>
      <AddTaskModal open={open} onClose={() => setOpen(false)} />
         <TaskDetailsModal
  open={detailsOpen}
  onClose={() => setDetailsOpen(false)}
  task={selectedTask}
/>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <Box display="flex" gap={2}>
          <TaskColumn id="todo" title="To Do" tasks={tasks.filter(t => t.status === "todo")} />
          <TaskColumn id="in_progress" title="In Progress" tasks={tasks.filter(t => t.status === "in_progress")} />
          <TaskColumn id="done" title="Done" tasks={tasks.filter(t => t.status === "done")} />
        </Box>
      </DndContext>
    </Box>
  );
}