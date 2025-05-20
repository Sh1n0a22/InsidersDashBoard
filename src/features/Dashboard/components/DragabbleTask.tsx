import { useDraggable } from "@dnd-kit/core";
import type { Task } from "../types/TodolistTypes";
import { CSS } from "@dnd-kit/utilities";
import { Paper } from "@mui/material";

const DraggableTask = ({ task }: { task: Task }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id.toString(),
  });

  const styleForDraggableTask: React.CSSProperties = {
    transform: CSS.Translate.toString(transform),
    transition: "transform 0.2s ease",
    pointerEvents: isDragging ? "none" as React.CSSProperties['pointerEvents'] : "auto" as React.CSSProperties['pointerEvents'],
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Paper
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      elevation={2}
      sx={{
        mb: 1,
        p: 1.5,
        bgcolor: "#fff",
        cursor: "grab",
      }}
      style={styleForDraggableTask}
    >
      {task.title}
    </Paper>
  );
}
export default DraggableTask