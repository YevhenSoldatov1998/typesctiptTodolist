import React, {useEffect} from 'react';
import './App.css';
import TodoList from "./TodoList/TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    addTodoListTaskThunk,
    addTodoListThunk,
    changeFilter,
    changeIsDone,
    changeTitleTask,
    deleteTodoList, deleteTodoListThunk, getTodoListsThunk
} from "./redux/todo-reducer";

interface IProps {
    addTodoListThunk: Function,
    deleteTodoList: Function,
    changeIsDone: Function,
    changeTitleTask: Function,
    changeFilter: Function,

    getTodoListsThunk: Function
    deleteTodoListThunk: Function,
    addTodoListTaskThunk: Function,
    todoLists: any,
}

const App: React.FC<IProps> = ({
                                   addTodoListThunk, todoLists,
                                   deleteTodoList,
                                   changeIsDone, changeTitleTask,
                                   deleteTodoListThunk, changeFilter,
                                   addTodoListTaskThunk, ...props
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
                                     filterValue={tl.filterValue = 'All'}
                                     deleteTodoList={deleteTodoList}
                                     addTodoListTaskThunk = {addTodoListTaskThunk}
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
        changeTitleTask,
        changeFilter,getTodoListsThunk, deleteTodoListThunk,
        addTodoListThunk, addTodoListTaskThunk
    })
)(App);

