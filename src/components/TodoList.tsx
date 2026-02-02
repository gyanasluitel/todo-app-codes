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

    // Explain about immutability + functional state updates when adding a new task
    // What is immutability? Why is it important in React state management?
    // Immutability means that we do not modify the existing state directly. Instead, we create a new copy of the state with the necessary changes.
    // This is important in React because it allows React to efficiently determine when components need to re-render.
    // By creating a new state object, React can easily compare the previous and current state using shallow comparison.
    // If we were to mutate the existing state directly, React might not detect the change, leading to potential bugs and UI inconsistencies.

    const handleTaskAdd = (title: string) => {
        const newTask: TodoItem = {
            id: crypto.randomUUID(), // Generating a random id for the new task
            title,
            completed: false
        }

        // Why does this not work?
        // 1. React relies on immutability to detect changes in state. When we directly mutate the existing state (like using push on an array), React may not recognize that a change has occurred because the reference to the original state object remains the same.
        // 2. Directly mutating state can lead to unexpected behavior and bugs in the application. React's rendering process is optimized for detecting changes through new object references, and mutating state can interfere with this process.
        // 3. Using methods like push modifies the original array in place, which goes against the principles of functional programming that React encourages. Instead, we should create a new array that includes the new task.
        // tasks.push(newTask);

        // We should do this instead to add a new task
        // We use immutable update patterns to create a new array that includes the new task
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