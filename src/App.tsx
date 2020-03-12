import React, {useEffect} from 'react';
import './App.css';
import TodoList from "./TodoList/TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    addTaskThunk,
    addTodoListThunk,
    changeFilter,
    changeIsDone,
    changeTitleTask, deleteTaskThunk,
    deleteTodoList, deleteTodoListThunk, getTaskThunk, getTodoListsThunk, updateTaskThunk
} from "./redux/todo-reducer";
import {appStateType} from "./redux/store";
import {ITodoList} from "./types/interfaces";
import {createStyles, Paper, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

interface IProps {
    addTodoListThunk: Function,
    changeIsDone: Function,
    changeTitleTask: Function,
    changeFilter: Function,

    getTodoListsThunk: Function
    deleteTodoListThunk: Function,
    getTaskThunk: Function,
    addTaskThunk: Function,
    deleteTaskThunk: Function,
    updateTaskThunk: Function
}

interface IMapStateToProps {
    todoLists: ITodoList[]
}

type packedPropsType = IProps & IMapStateToProps
const App: React.FC<packedPropsType> = (
    {
        addTodoListThunk, todoLists,
        changeIsDone, changeTitleTask,
        deleteTodoListThunk, changeFilter,
        getTodoListsThunk,
        addTaskThunk, getTaskThunk, deleteTaskThunk,
        updateTaskThunk
    }) => {
    const call_addTodoList = (title: string) => {
        addTodoListThunk(title);
    };

    useEffect(() => {
        getTodoListsThunk();
    }, []);
    const useStyles = makeStyles((theme: Theme) =>{
        debugger
        return createStyles({
            title: {
                position: 'absolute',
                top: -30,
                opacity: 0.3,
                left: 0,
                width: '100%'
            },
            paper: {
                position: 'relative',
                padding: theme.spacing(1),
                margin: theme.spacing(2),
                marginTop: 50,
                width: `calc(25% - ${theme.spacing(4)}px)`,
                [theme.breakpoints.down('md')]:{
                    padding: theme.spacing(1),
                    margin: theme.spacing(1),
                    marginTop: 50,
                    width: `calc(33% - ${theme.spacing(2)}px)`,
                },
                [theme.breakpoints.down('sm')]:{
                    width: `calc(50% - ${theme.spacing(2)}px)`
                },
                [theme.breakpoints.down('xs')]:{
                    width: 300
                }

            }
        })}
    );
    const classes = useStyles();
    return (
        <>
            <div className={"header"}>
                <AddNewItemForm forTasks={false} addTodo={call_addTodoList}/>
            </div>
            <div className="App">
                {todoLists.map((tl: any) => {
                    return (
                        <Paper className={classes.paper} elevation={3}>
                            <Typography variant="h6"
                                        className={classes.title}
                            >{tl.title}</Typography>
                            <TodoList todoId={tl._id}
                                      title = {tl.title}
                                      key={tl._id}
                                      tasks={tl.tasks}
                                      filterValue={tl.filterValue}
                                      deleteTaskThunk={deleteTaskThunk}
                                      changeIsDone={changeIsDone}
                                      changeTitleTask={changeTitleTask}
                                      deleteTodoListThunk={deleteTodoListThunk}
                                      changeFilter={changeFilter}
                                      getTaskThunk={getTaskThunk}
                                      addTaskThunk={addTaskThunk}
                                      updateTaskThunk={updateTaskThunk}

                            />
                        </Paper>
                    )
                })}
            </div>
        </>
    );
}

let mapStateToProps = (state: appStateType): IMapStateToProps => {
    return {
        todoLists: state.todo.todoLists
    }
}

export default compose(
    connect(mapStateToProps, {
        deleteTodoList, changeIsDone, changeTitleTask,
        changeFilter, getTodoListsThunk, deleteTodoListThunk,
        addTodoListThunk, getTaskThunk, addTaskThunk, deleteTaskThunk,
        updateTaskThunk
    })
)(App);

