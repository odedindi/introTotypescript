import * as React from 'react';
import { PropsInterface } from './interfaces';




const TaskListItem: React.FC<PropsInterface> = ({ task, toggleTask }) => {
    const labelStyle = { 
        textDecoration: !task.done ? undefined : 'line-through'
    };
    return (
        <li>
            <label style={labelStyle}> 
                <input 
                    type='checkbox' 
                    onChange={() => toggleTask(task)}
                    checked={ task.done }/> { task.content }
            </label>
        </li>
    );
};

export default TaskListItem;