import React, {ChangeEvent} from 'react';
import '../../App.css';
import {useState} from 'react'
import {ITask} from "../../types/interfaces";

interface IProps {
    deleteTask: Function,
    changeIsDone: Function,
    todoId: string,
    task: ITask,
    changeTitleTask: Function,
    numberTask: number,
    updateTaskThunk: Function
}

const TodoListTask: React.FC<IProps> = ({deleteTask, updateTaskThunk, changeIsDone,changeTitleTask, todoId, task, ...props}) => {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(task.title);
    const onIsDoneChanged = (e: any) => {
        const value = e.target.checked;
        updateTaskThunk(todoId, task._id , {status: value});
    };

    const call_changeTitleTask = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
        // changeTitleTask(todoId, task.id, title)
    };

    const activateEditMode = () => setEditMode(true);

    const deactivateEditMode = () =>{
        updateTaskThunk(todoId, task._id, {title});
        setEditMode(false)
    };

    const call_deleteTask = () => {
        deleteTask(todoId, task._id)};

    let containerCssClass = task.status ? "todoList-task done" : "todoList-task";

    return (
        <div className={containerCssClass}>
            <input type="checkbox" checked={task.status}
                   onChange={onIsDoneChanged}/>
            {editMode
                ?
                <input onBlur={deactivateEditMode} onChange={call_changeTitleTask} autoFocus={true} value={title}/>
                : <span onClick={activateEditMode}>{props.numberTask} - {task.title}</span>
            }, priority: {task.priority}
            <button onClick={call_deleteTask}>&times;</button>
        </div>
    );
}

export default TodoListTask;

