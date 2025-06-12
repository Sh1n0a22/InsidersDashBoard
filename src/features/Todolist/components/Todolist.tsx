import AddTaskModal from "./addTaskModal";
import { Button, Box } from "@mui/material";
import { DndContext, closestCenter, } from "@dnd-kit/core";
import TaskColumn from "./TaskColumn";
import TaskDetailsModal from "./TaskDetailsModal";
import useTaskBoard from "../../../hooks/useTaskBoard";

export default function TasksBoard() {
  const { open, detailsOpen, closeDetails, todoTasks, inProgressTasks, doneTasks, handleDragEnd, openModal, closeModal } = useTaskBoard()
  return (
    <Box display="flex" flexDirection="column">
      <Button variant="contained" onClick={openModal} sx={{ mb: 2 }}>Add Task</Button>
      <AddTaskModal open={open} closeModal={closeModal} />
      <TaskDetailsModal open={detailsOpen} closeModal={closeDetails} />

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <Box display="flex" gap={2}>
          <TaskColumn id="todo" title="To Do" tasks={todoTasks} />
          <TaskColumn id="in_progress" title="In Progress" tasks={inProgressTasks} />
          <TaskColumn id="done" title="Done" tasks={doneTasks} />
        </Box>
      </DndContext>
    </Box>
  );
}