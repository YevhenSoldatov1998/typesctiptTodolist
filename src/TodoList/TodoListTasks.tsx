import React from 'react';
import '../App.css';
import TodoListTask from "./TodoListTask/TodoListTask";
import {ITask} from "../types/interfaces";

interface IProps {
    deleteTask: Function,
    changeIsDone: Function,
    changeTitleTask: Function,
    updateTaskThunk: Function,
    todoId: string,
    tasks: Array<ITask>
}

const TodoListTasks: React.FC<IProps> = (
    {
        tasks, deleteTask, updateTaskThunk,
        changeIsDone, changeTitleTask, todoId
    }) => {
    return (
        <div className="todoList-tasks">
            {tasks && tasks.map((task, index) => {
                return <TodoListTask
                    task={task}
                    key={task._id}
                    numberTask={index + 1}
                    changeIsDone={changeIsDone}
                    todoId={todoId}
                    changeTitleTask={changeTitleTask}
                    deleteTask={deleteTask}
                    updateTaskThunk={updateTaskThunk}
                />
            })}
        </div>
    );
};
export default TodoListTasks;

