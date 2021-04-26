import * as React from 'react';
import { TodoListInterface } from './interfaces';
import TodoItem from './todoItem';

const TodoList = (props: TodoListInterface) => {


    return(
        <div className="todo-list">
            <ul>
                {
                    props.todos.map((todo) => (
                        <li key={todo.id}>
                            <TodoItem
                                todo={todo}
                                updateTodoHandler={props.updateTodoHandler}
                                removeTodoHandler={props.removeTodoHandler}
                                completeTodoHandler={props.completeTodoHandler}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoList;