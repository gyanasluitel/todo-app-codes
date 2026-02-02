import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export interface TodoItem {
    id: string;
    title: string;
    completed: boolean;
}

const INITIAL_TASKS: TodoItem [] = [
    { id: "task1", title: "Go through today's schedule", completed: false },
    { id: "task2", title: "Teach full stack course at Leapfrog Connect", completed: true }
]


const TodoList = () => {
    const [tasks, setTasks] = useState<TodoItem[]>(INITIAL_TASKS);

    const handleTaskAdd = (title: string) => {
        const newTask: TodoItem = {
            id: crypto.randomUUID(), // Generating a random id for the new task
            title,
            completed: false
        }

        setTasks(prevTasks => [...prevTasks, newTask]);
    }

    // Function to toggle task completion status
    const handleToggleTaskCompletion = (id: string) => {
        // Logic to toggle the 'completed' status of the task with the given id. We return a new array with the updated tasks
        const updatedTasks = tasks.map(item => {
            const taskToMatch = item.id === id;

            if (taskToMatch) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            else {
                return item;
            }
        });

        // Normally, you would use setTasks here to update state
        setTasks(updatedTasks);
    }

    // Function to delete a task
    const handleDeleteTask = (id: string) => {
        // Logic to remove the task with the given id from the tasks array
        const updatedTasks = tasks.filter(task => task.id !== id);
        // Normally, you would use setTasks here to update state    
        setTasks(updatedTasks);
    }

    return (
        <div>
            <TaskForm onAdd={handleTaskAdd} />

            <TaskList tasks={tasks} onToggle={handleToggleTaskCompletion} onDelete={handleDeleteTask} />
        </div>
    )
}

export default TodoList;