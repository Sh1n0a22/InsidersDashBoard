import { useCallback, useEffect, useMemo, useState } from "react";
import type { Task } from "../features/Todolist/types/TodolistTypes";
import { supabase } from "../services/supabase";
import type { DragEndEvent } from "@dnd-kit/core";


const useTaskBoard = () => {
    const [open, setOpen] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [detailsOpen, setDetailsOpen] = useState(false);



    const todoTasks = useMemo(() => tasks.filter(t => t.status === "todo"), [tasks])
    const inProgressTasks = useMemo(() => tasks.filter(t => t.status === "in_progress"), [tasks])
    const doneTasks = useMemo(() => tasks.filter(t => t.status === "done"), [tasks])


    const fetchTasks = useCallback(
        async () => {
            const { data, error } = await supabase.from("tasks").select("*");
            if (error) console.error(error);
            else setTasks(data || []);
        }, []);

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks, open]);

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
    };



    return {
        open, tasks, selectedTask, detailsOpen,
        openModal: () => setOpen(true),
        closeModal: () => setOpen(false),
        closeDetails: () => setDetailsOpen(false),
        openDetails: () => setDetailsOpen(true), setTasks,
        selectTask: (task: Task) => setSelectedTask(task),
        fetchTasks, handleDragEnd, todoTasks, inProgressTasks, doneTasks
    }



}

export default useTaskBoard;