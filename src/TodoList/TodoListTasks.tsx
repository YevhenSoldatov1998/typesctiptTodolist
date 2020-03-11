import React from 'react';
import '../App.css';
import TodoListTask from "./TodoListTask/TodoListTask";
import {ITask} from "../types/interfaces";
import List from '@material-ui/core/List';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';


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
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                width: '100%',
                padding: 0,
                maxWidth: 360,
                backgroundColor: theme.palette.background.paper,
            },
        }),
    );
    const classes = useStyles();
    return (
        <div className="todoList-tasks">
            {tasks && tasks.map((task, index) => {
                return <List className={classes.root} key={task._id}>
                    <TodoListTask
                        task={task}
                        numberTask={index + 1}
                        changeIsDone={changeIsDone}
                        todoId={todoId}
                        changeTitleTask={changeTitleTask}
                        deleteTask={deleteTask}
                        updateTaskThunk={updateTaskThunk}
                    />
                </List>
            })}
        </div>
    );
};
export default TodoListTasks;

