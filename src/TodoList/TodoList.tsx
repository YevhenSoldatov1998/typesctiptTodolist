import React, {useEffect} from 'react';
import '../App.css';
import AddNewItemForm from "../AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import {ITask} from "../types/interfaces";
import ClearIcon from '@material-ui/icons/Clear';
import MyPopover from "../util/popover/MyPopover";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";

interface ITodoList {
    deleteTodoListThunk: Function,
    changeTitleTask: Function,
    changeIsDone: Function,
    changeFilter: Function
    todoId: string,
    title: string,
    filterValue: string,
    tasks: Array<ITask>,
    getTaskThunk: Function,
    addTaskThunk: Function,
    deleteTaskThunk: Function
    updateTaskThunk: Function
}

const TodoList: React.FC<ITodoList & any> = ({
                                           title, getTaskThunk,
                                           addTaskThunk,
                                           changeIsDone, deleteTodoListThunk,
                                           tasks, filterValue,
                                           changeTitleTask, changeFilter, deleteTaskThunk,
                                           todoId, updateTaskThunk
                                       }) => {
    const call_addTask = (title: string) => {
        addTaskThunk(todoId, title)
    };
    const call_deleteTodoList = () => {
        deleteTodoListThunk(todoId)
    };
    useEffect(() => {
        getTaskThunk(todoId)
    }, []);
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const handlePopoverOpen = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const useStyles = makeStyles(
        createStyles({
            todoDelete: {
                position: 'absolute',
                right: 5,
                top: 5
            }
        })
    )
    const classes = useStyles()
    return (
        <div className="todoList">
            <div className="todoList-header">
                <MyPopover anchorEl={anchorEl}  open={open} handlePopoverClose={handlePopoverClose}>delete todo</MyPopover>
                <ClearIcon onMouseEnter={handlePopoverOpen}
                           onMouseLeave={handlePopoverClose}
                           onClick={call_deleteTodoList}
                           className={classes.todoDelete}
                />
               <span>
                   <AddNewItemForm forTasks addTodo={call_addTask}/>
               </span>
            </div>
            <TodoListTasks tasks={tasks && tasks.filter((task: any) => {
                if (filterValue === 'All') {
                    return task
                } else if (filterValue === 'Completed') {
                    return task.status
                } else if (filterValue === 'Active') {
                    return !task.status
                }
            })}
                           todoId={todoId}
                           changeIsDone={changeIsDone}
                           changeTitleTask={changeTitleTask}
                           deleteTask={deleteTaskThunk}
                           updateTaskThunk={updateTaskThunk}

            />
            <TodoListFooter todoId={todoId}
                            changeFilter={changeFilter}
                            filterValue={filterValue}/>
        </div>

    );
}

export default TodoList;

