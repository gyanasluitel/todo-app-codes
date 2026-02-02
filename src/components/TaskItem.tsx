import './TaskItem.css';
import { MdDelete } from "react-icons/md";


interface Props {
    key: string
    id: string;
    title: string;
    completed: boolean;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TaskItem = ({id, title, completed, onToggle, onDelete} : Props) => {
    return (
        <div className="task-item">
            <input type='checkbox' className='task-item__checkbox' checked={completed} onChange={() => onToggle(id)} />
            <span className={`${completed ? 'task-item__completed' : ''}`}>{title}</span>
            <button className='task-item__delete' onClick={() => onDelete(id)}><MdDelete color='red' /></button>
        </div>
    )
}

export default TaskItem;