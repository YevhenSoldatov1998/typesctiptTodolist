import React, {ChangeEvent} from 'react';
import '../../App.css';
import {useState} from 'react'
import {ITask} from "../../types/interfaces";
import {ListItem, ListItemText} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from "@material-ui/core/TextField";
import MyPopover from "../../util/popover/MyPopover";

interface IProps {
    deleteTask: Function,
    changeIsDone: Function,
    todoId: string,
    task: ITask,
    changeTitleTask: Function,
    numberTask: number,
    updateTaskThunk: Function
}

const TodoListTask: React.FC<IProps> = ({deleteTask, updateTaskThunk, changeIsDone, changeTitleTask, todoId, task, ...props}) => {
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const onIsDoneChanged = (e: any) => {
        const value = e.target.checked;
        updateTaskThunk(todoId, task._id, {status: value});
    };
    const call_changeTitleTask = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };
    const activateEditMode = () => {
        setEditMode(true)
    };
    const deactivateEditMode = () => {
        updateTaskThunk(todoId, task._id, {title});
        setEditMode(false)
    };
    const call_deleteTask = () => {
        deleteTask(todoId, task._id)
    };
    let containerCssClass = task.status ? "todoList-task done" : "todoList-task";
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return (
        <div className={containerCssClass}>
            <ListItem role={undefined} dense button>
                <Checkbox
                    edge="start"
                    checked={task.status}
                    onChange={onIsDoneChanged}
                    tabIndex={-1}
                    disableRipple
                />
                {!editMode ?
                    <ListItemText primary={`${props.numberTask}) ${task.title}`} onClick={activateEditMode}/>
                    : <TextField type="text"
                                 label="New item name"
                                 onBlur={deactivateEditMode}
                                 onChange={call_changeTitleTask}
                                 autoFocus={true} value={title}/>
                }
                <ListItemSecondaryAction>
                    <MyPopover anchorEl={anchorEl} open={open} handlePopoverClose={handlePopoverClose}>
                        delete taks
                    </MyPopover>
                    <IconButton onClick={call_deleteTask}
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}
                                edge="end" aria-label="comments">
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    );
}

export default TodoListTask;

