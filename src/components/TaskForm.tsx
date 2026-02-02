import { useState } from "react";
import "./TaskForm.css";

interface TaskFormProps {
    onAdd: (title: string) => void;
}

// A simple form component to add new tasks
// Controlled vs Uncontrolled components in React
// Controlled components are those where form data is handled by the React component's state.
// Uncontrolled components store their own state internally and you query the DOM using refs to get their current values.
// In this example, we are using a controlled component approach where the input value is tied to the component's state.
// This allows for easier validation, conditionally enabling/disabling buttons, and instant feedback to the user.
// Here, we manage the input value using the useState hook and update it on every change event.
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