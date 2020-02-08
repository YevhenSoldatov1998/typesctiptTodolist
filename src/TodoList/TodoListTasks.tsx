import React from 'react';
import '../App.css';
import TodoListTask from "./TodoListTask/TodoListTask";

interface IProps {
    deleteTask: Function,
    changeIsDone: Function,
    changeTitleTask: Function,
    todoId: string,
    tasks: any[]
}

const TodoListTasks: React.FC<IProps> = ({deleteTask, changeIsDone, changeTitleTask, todoId, ...props}) => {
    return (
        <div className="todoList-tasks">
            {props.tasks.map((task: any) => {
                return <TodoListTask
                    task={task}
                    key={task.id}
                    changeIsDone={changeIsDone}
                    todoId={todoId}
                    changeTitleTask={changeTitleTask}
                    deleteTask={deleteTask}
                />
            })}
        </div>
    );
};
export default TodoListTasks;

