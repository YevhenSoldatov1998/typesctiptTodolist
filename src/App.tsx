import React, {useEffect} from 'react';
import './App.css';
import TodoList from "./TodoList/TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    addTask,
    addTodoListThunk,
    changeFilter,
    changeIsDone,
    changeTitleTask,
    deleteTodoList, deleteTodoListThunk, getTodoListsThunk
} from "./redux/todo-reducer";
import {useState} from 'react'

interface IProps {
    addTodoListThunk: Function,
    deleteTodoList: Function,
    changeIsDone: Function,
    addTask: Function,
    changeTitleTask: Function,
    changeFilter: Function,

    getTodoListsThunk: Function
    deleteTodoListThunk: Function,
    todoLists: any,
}

const App: React.FC<IProps> = ({
                                   addTodoListThunk, todoLists,
                                   deleteTodoList, addTask,
                                   changeIsDone, changeTitleTask,
                                   deleteTodoListThunk, changeFilter, ...props
                               }) => {
    const call_addTodoList = (title: string) => {
        addTodoListThunk(title);
    };

    useEffect(() => {
        props.getTodoListsThunk();
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
                                     tasks={tl.tasks = []}
                                     title={tl.title}
                                     filterValue={tl.filterValue}
                                     deleteTodoList={deleteTodoList}
                                     addTask={addTask}
                                     changeIsDone={changeIsDone}
                                     changeTitleTask={changeTitleTask}
                                     deleteTodoListThunk={deleteTodoListThunk}
                                     changeFilter={changeFilter}

                    />
                })}
            </div>
        </>
    );
}

let mapStateToProps = (state: any) => {
    return {
        todoLists: state.todo.todoLists
    }
}

export default compose(
    connect(mapStateToProps, {
        deleteTodoList, changeIsDone,
        addTask, changeTitleTask,
        changeFilter,getTodoListsThunk, deleteTodoListThunk,
        addTodoListThunk
    })
)(App);

