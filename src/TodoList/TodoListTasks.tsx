import React from 'react';
import '../App.css';
import TodoListTask from "./TodoListTask/TodoListTask";
import {ITask} from "../util/interfaces/interfaces";

interface IProps {
    deleteTask: Function,
    changeIsDone: Function,
    changeTitleTask: Function,
    todoId: string,
    tasks: Array<ITask>
}

const TodoListTasks: React.FC<IProps> = ({deleteTask, changeIsDone, changeTitleTask, todoId, ...props}) => {
    return (
        <div className="todoList-tasks">
            {props.tasks && props.tasks.map((task, index) => {
                return <TodoListTask
                    task={task}
                    key={task.id}
                    numberTask = {index + 1}
                    changeIsDone={changeIsDone}
                    todoId={todoId}
                    changeTitleTask={changeTitleTask}
                    deleteTask={deleteTask}
                />
            })}
        </div>
    );
};
export default TodoListTasks;

