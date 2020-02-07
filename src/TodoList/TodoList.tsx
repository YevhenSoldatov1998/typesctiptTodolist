import React from 'react';
import '../App.css';
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "../AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import {useState} from 'react'
import TodoListFooter from "./TodoListFooter";

interface ITodoList {
    deleteTodoListThunk: Function,
    addTask: Function,
    deleteTodoList: Function,
    changeTitleTask: Function,
    changeIsDone: Function,
    changeFilter: Function
    todoId: number,
    filterValue: string,
    tasks: any,
    title: string,
}

const TodoList: React.FC<ITodoList> = ({
                                           title,
                                           changeIsDone, deleteTodoListThunk,
                                           addTask, tasks, filterValue,
                                           changeTitleTask,changeFilter,
                                           todoId, ...props
                                       }) => {
    let [id, setId] = useState(3);
    const call_addTask = (title: string) => {
        setId(id + 1);
        let task = {id: id, title: title, isDone: false, priority: "low"};
        addTask(task, todoId)
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

