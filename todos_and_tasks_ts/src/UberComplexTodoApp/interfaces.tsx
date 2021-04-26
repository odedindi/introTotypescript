import React from "react";

export interface TodoInterface {
    id: string;
    content: string;
    isDone: boolean;
};

export interface TodoFormInterface {
    todos: TodoInterface[];
    createNewTodoHandler: (todo: TodoInterface) => void;
};

export interface TodoListInterface {
    updateTodoHandler: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    removeTodoHandler: (id: string) => void;
    completeTodoHandler: (id: string) => void;
    todos: TodoInterface[];
};

export interface TodoItemInterface {
    updateTodoHandler: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    removeTodoHandler: (id: string) => void;
    completeTodoHandler: (id: string) => void;
    todo: TodoInterface;
}