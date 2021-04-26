import * as React from 'react';
import { TodoInterface } from './interfaces';

import TodoForm from './todoForm';
import TodoList from './todoList';

const TodoApp: React.FC = () => {

    const [ todos, setTodos ] = React.useState<TodoInterface[]>([]);

    // create a new todo
    const createNewTodoHandler = (todo: TodoInterface) => {
        setTodos((prevValues) => [...prevValues, todo])
        // const newTodosState: TodoInterface[] = [...todos]
        // newTodosState.push(todo)
        // setTodos(newTodosState)
    }

    // update a todo
    const updateTodoHandler = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        const newTodosState: TodoInterface[] = [...todos];
        newTodosState.find((todo:TodoInterface) => 
            todo.id === id)!.content = event.target.value; 
        setTodos(newTodosState);
    }

    // remove a todo
    const removeTodoHandler = (id: string) => {
        const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => 
            todo.id !== id);
        setTodos(newTodosState);
    }

    const completeTodoHandler = (id: string) => {
        const newTodosState: TodoInterface[] = [...todos];
        newTodosState.find((todo: TodoInterface) => 
            todo.id === id)!.isDone = !newTodosState.find((todo:TodoInterface) =>
            todo.id === id)!.isDone;
        setTodos(newTodosState);
    }
    return(
        <div className='todo-list-app'>
            <h2 className='header'>Uber complicated</h2>
        <TodoForm todos={todos} createNewTodoHandler={createNewTodoHandler}/>
        
        <TodoList
            todos={todos}
            updateTodoHandler={updateTodoHandler}
            removeTodoHandler={removeTodoHandler}
            completeTodoHandler={completeTodoHandler}
        />
        </div>
    );
};

export default TodoApp;