import * as React from 'react';
import { TodoFormInterface, TodoInterface } from './interfaces';


const TodoForm = (props: TodoFormInterface) => {

        const [ values, setValues ] = React.useState('')
        const inputRef = React.useRef<HTMLInputElement>(null)

        const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues(event.target.value);
        }

        const inputEnterHandler = (event: React.KeyboardEvent) => {
            if(event.key === 'Enter') {
                // new todo object:
                const newTodo: TodoInterface = {
                    id: Math.random().toString(16),
                    content: values,
                    isDone: false,
                };

                // create the new todo:
                props.createNewTodoHandler(newTodo);

                // reset input field
                if (inputRef && inputRef.current) {
                    inputRef.current.value = '';
                };
            };
        };

        return(
            <div className="todo-form">
                <input 
                    type="text"
                    ref={inputRef}
                    placeholder="Please Add a todo"
                    onChange={ event => inputChangeHandler(event) }
                    onKeyPress={ event => inputEnterHandler(event) }
                />
            </div>
    );
};

export default TodoForm;