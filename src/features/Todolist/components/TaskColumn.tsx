import { useDroppable } from "@dnd-kit/core";
import type { TaskColumnProps } from "../types/TodolistTypes";
import { Box, Typography } from "@mui/material";
import DraggableTask from "./DragabbleTask";
import { taskColumnStyles } from "../../../styles/ComponentsStyles";

const TaskColumn = ({ id, title, tasks }: TaskColumnProps) => {
  const { setNodeRef } = useDroppable({ id, data: { columnId: id }, });
  
  return (
    <Box ref={setNodeRef} sx={taskColumnStyles}>
      <Typography variant="h6" mb={2}> {title} </Typography>
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