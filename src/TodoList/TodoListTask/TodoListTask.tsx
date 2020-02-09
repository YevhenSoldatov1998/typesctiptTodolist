import React, {ChangeEvent} from 'react';
import '../../App.css';
import {useState} from 'react'
import {ITask} from "../../util/interfaces/interfaces";

interface IProps {
    deleteTask: Function,
    changeIsDone: Function,
    todoId: string,
    task: ITask,
    changeTitleTask: Function,
    numberTask: number

}

const TodoListTask: React.FC<IProps> = ({deleteTask, changeIsDone,changeTitleTask, todoId, task, ...props}) => {
    const [editMode, setEditMode] = useState(false);
    const onIsDoneChanged = () => {
        changeIsDone(todoId, task.id);
    };

    const call_changeTitleTask = (e: ChangeEvent<HTMLInputElement>) => changeTitleTask(todoId, task.id, e.currentTarget.value);

    const activateEditMode = () => setEditMode(true);

    const deactivateEditMode = () => setEditMode(false);

    const call_deleteTask = () => {
        deleteTask(todoId, task.id)};

    let containerCssClass = task.status ? "todoList-task done" : "todoList-task";

    return (
        <div className={containerCssClass}>
            {/*<input type="checkbox" checked={task.status}*/}
            {/*       onChange={onIsDoneChanged}/>*/}
            {editMode
                ?
                <input onBlur={deactivateEditMode} onChange={call_changeTitleTask} autoFocus={true} value={task.title}/>
                : <span onClick={activateEditMode}>{props.numberTask}- {task.title}</span>
            }, priority: {task.priority}
            <button onClick={call_deleteTask}>&times;</button>
        </div>
    );
}

export default TodoListTask;

