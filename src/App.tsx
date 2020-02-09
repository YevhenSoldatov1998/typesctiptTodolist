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
import {ITodoList} from "./util/interfaces/interfaces";

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

    return (
        <>
            <div>
                <AddNewItemForm addTodo={call_addTodoList}/>
            </div>
            <div className="App">
                {todoLists.map((tl: any) => {
                    return <TodoList todoId={tl.id}
                                     key={tl.id}
                                     tasks={tl.tasks}
                                     title={tl.title}
                                     filterValue={tl.filterValue = 'All'}
                                     deleteTaskThunk={deleteTaskThunk}
                                     changeIsDone={changeIsDone}
                                     changeTitleTask={changeTitleTask}
                                     deleteTodoListThunk={deleteTodoListThunk}
                                     changeFilter={changeFilter}
                                     getTaskThunk={getTaskThunk}
                                     addTaskThunk={addTaskThunk}
                                     updateTaskThunk = {updateTaskThunk}

                    />
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
        deleteTodoList, changeIsDone,
        changeTitleTask,
        changeFilter, getTodoListsThunk, deleteTodoListThunk,
        addTodoListThunk, getTaskThunk, addTaskThunk, deleteTaskThunk,
        updateTaskThunk
    })
)(App);

