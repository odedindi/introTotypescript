import React, { useState } from 'react';
import { AddTaskType, TaskInterface, ToggleTaskType } from './interfaces';
import TaskListItem from './taskListItem';
import AddTask from './addTask';

const initialTasks: TaskInterface[] = [
    {
        content: 'rule typescript',
        done: false
    },
    {
        content: 'rule the world',
        done: false
    },
    
]

const TasksApp = () => {
    const [ tasks, setTasks ] = useState(initialTasks);

    const toggleTask: ToggleTaskType = (selectedTask: TaskInterface) => {
        const newTasks = tasks.map(task => {
            if (task === selectedTask ) {
                return {
                    ...tasks, 
                    done: !task.done,
                    content: task.content, 
                };
            };
            return task;
        });
        setTasks(newTasks)
    };

    const addNewTaskHandler: AddTaskType = (content: string) => {
        const newTask = { 
            content,
            done: false,
        };
        setTasks([...tasks, newTask]);
    }

    return (
        <>
            <h2 style={{textAlign: 'center'}}>Somewhat simpler</h2>
            <AddTask addNewTask={addNewTaskHandler} />
            {
                tasks.map((task, index) => <TaskListItem key={index} task={task} toggleTask={toggleTask}/> )
            }
            
        </>
    );
};

export default TasksApp