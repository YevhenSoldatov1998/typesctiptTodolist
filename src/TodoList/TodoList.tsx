import React, {useEffect} from 'react';
import '../App.css';
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "../AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import {useState} from 'react'
import TodoListFooter from "./TodoListFooter";
import {ITask} from "../types/interfaces";

interface ITodoList {
    deleteTodoListThunk: Function,
    changeTitleTask: Function,
    changeIsDone: Function,
    changeFilter: Function
    todoId: string,
    filterValue: string,
    tasks: Array<ITask>,
    title: string,
    getTaskThunk: Function,
    addTaskThunk: Function,
    deleteTaskThunk: Function
    updateTaskThunk: Function
}

const TodoList: React.FC<ITodoList> = ({
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

    return (
        <div className="todoList">
            <div className="todoList-header">
                <button onClick={call_deleteTodoList}>&times;</button>
                <TodoListTitle title={title}/>
                <AddNewItemForm addTodo={call_addTask}/>
            </div>
            <TodoListTasks tasks={tasks && tasks.filter((task: any) => {
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

