
export interface TaskInterface {
    content: string;
    done: boolean;
};

export type ToggleTaskType = (selectedTask: TaskInterface) => void;
export type AddTaskType = (content: string) => void;

export interface PropsInterface {
    task: TaskInterface;
    toggleTask: ToggleTaskType;
}

export interface NewTaskForm {
    addNewTask: AddTaskType;
}