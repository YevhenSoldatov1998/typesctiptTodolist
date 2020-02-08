import React from 'react';
import '../App.css';
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "../AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import {useState} from 'react'
import TodoListFooter from "./TodoListFooter";

interface ITodoList {
    deleteTodoListThunk: Function,
    addTodoListTaskThunk: Function,
    deleteTodoList: Function,
    changeTitleTask: Function,
    changeIsDone: Function,
    changeFilter: Function
    todoId: string,
    filterValue: string,
    tasks: any,
    title: string,
}

const TodoList: React.FC<ITodoList> = ({
                                           title, addTodoListTaskThunk,
                                           changeIsDone, deleteTodoListThunk,
                                           tasks, filterValue,
                                           changeTitleTask,changeFilter,
                                           todoId, ...props
                                       }) => {
    const call_addTask = (title: string) => {
        let task = {title: title, status: false, priority: "low"};
        debugger
        addTodoListTaskThunk(todoId, task)
    };
    const call_deleteTodoList = () => {
        deleteTodoListThunk(todoId)
    }
    return (
        <div className="todoList">
            <div className="todoList-header">
                <button onClick={call_deleteTodoList}>&times;</button>
                <TodoListTitle title={title}/>
                <AddNewItemForm addTodo={call_addTask}/>
            </div>
            <TodoListTasks tasks={tasks.filter((task: any) => {
                if (filterValue === 'All') {
                    return task
                } else if (filterValue === 'Completed') {
                    return task.isDone
                } else if (filterValue === 'Active') {
                    return !task.isDone
                }
            })}
                           todoId={todoId}
                           changeIsDone={changeIsDone}
                           changeTitleTask={changeTitleTask}
                           deleteTask={()=>{}}

            />
            <TodoListFooter todoId={todoId}
                            changeFilter={changeFilter}
                            filterValue={filterValue}/>
        </div>

    );
}

export default TodoList;

