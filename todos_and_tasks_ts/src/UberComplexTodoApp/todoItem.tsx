import * as React from 'react';
import { TodoItemInterface } from './interfaces';


const TodoItem = (props: TodoItemInterface) => {

    return(
        <div className="todo-item">
            <div onClick={ () => props.completeTodoHandler(props.todo.id) }>
                {
                    props.todo.isDone ? <span className="todo-item-checked" ></span>
                        : <span className="todo-item-unchecked" ></span>
                }
            </div>
            <div className="todo-item-input-wrapper">
                <input 
                    value={props.todo.content} 
                    onChange={ (event: React.ChangeEvent<HTMLInputElement>) =>
                        props.updateTodoHandler(event, props.todo.id) } 
                />
            </div>
            <div className="item-remove" onClick={ () => props.removeTodoHandler(props.todo.id)}>x</div>
        </div>
    );
};

export default TodoItem;
