import React, { useState} from 'react';
import { NewTaskForm } from './interfaces';


const AddTask: React.FC<NewTaskForm> = ({ addNewTask }) => {
    const [ newTaskContent, setNewTaskContent ] = useState('');

    const submitNewTaskHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addNewTask(newTaskContent);
        setNewTaskContent('');
    }

    const inputFieldStyle = {
        padding: '0 14px',
        width: '30vw',
        height: '30px',
        transition: '.25s border ease-in-out',

    }

    return (
        <form onSubmit={ submitNewTaskHandler }>
            <input 
                type='text'
                value={ newTaskContent } 
                onChange={ (event) => setNewTaskContent(event.target.value)}
                style={inputFieldStyle}
            />
            <button type='submit'>Add New Task</button>
        </form>
    );
};
export default AddTask;