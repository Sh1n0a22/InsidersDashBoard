import { useDroppable } from "@dnd-kit/core";
import type { TaskColumnProps } from "../types/TodolistTypes";
import { Box, Typography } from "@mui/material";
import DraggableTask from "./DragabbleTask";

const TaskColumn = ({ id, title, tasks }: TaskColumnProps) => {
  const { setNodeRef } = useDroppable({
    id,
    data: { columnId: id },
  });

  return (
    <Box
      ref={setNodeRef}
      sx={{
        flex: 1,
        p: 2,
        border: "1px solid #ddd",
        color:'#242424',
        borderRadius: 2,
        minHeight: 300,
        bgcolor: "#f9f9f9",
      }}
    >
      <Typography variant="h6" mb={2}>
        {title}
      </Typography>
      {tasks.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No tasks
        </Typography>
      ) : (
        tasks.map((task) => <DraggableTask  key={task.id} task={task} />)
      )}
    </Box>
  );
}
export default TaskColumn