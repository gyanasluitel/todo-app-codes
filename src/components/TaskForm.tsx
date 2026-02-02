import { useState } from "react";
import "./TaskForm.css";

interface TaskFormProps {
    onAdd: (title: string) => void;
}

const TaskForm = ({ onAdd }: TaskFormProps) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Prevent adding empty tasks
        if (title.trim() === "") {
            return;
        } 

        onAdd(title);
        setTitle(""); // Clear the input field after adding
    }

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input 
                type="text" 
                placeholder="Add new todo..." 
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="task-form__input"
            />
            <button type="submit" className="task-form__submit">Add Todo</button>
        </form>
    );
}

export default TaskForm;