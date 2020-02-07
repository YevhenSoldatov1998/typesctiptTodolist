import React from 'react';
import '../App.css';
interface IProps {
    title: string
}
const TodoListTitle: React.FC<IProps> = ({title}) => {
    return (
        <h3 className="todoList-header__title">{title}</h3>
    );
}

export default TodoListTitle;

