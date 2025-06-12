import { useDraggable } from "@dnd-kit/core";
import { Paper } from "@mui/material";
import type { Task } from "../types/TodolistTypes";
import { taskStyles } from "../../../styles/ComponentsStyles";
import draggableTaskStlyes from "../../../styles/fuctions";

const DraggableTask = ({ task }: { task: Task }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id: task.id.toString(), });
  return (
    <Paper 
      ref={setNodeRef} {...listeners} onClick ={() => {console.log("fuck yeah");
      }} {...attributes} elevation={2} sx={taskStyles} style={draggableTaskStlyes(transform, isDragging)}>
      {task.title}
    </Paper>
  );
}
export default DraggableTask