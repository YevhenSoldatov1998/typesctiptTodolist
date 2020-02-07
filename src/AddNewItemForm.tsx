import React from 'react';
import './App.css';
import {useState} from 'react'
interface IAddNewItemForm {
    addTodo: any,
}
const AddNewItemForm: React.FC<IAddNewItemForm> = ({addTodo}) => {
    const [error, setError] = useState(false);
    const [title, setTitle] = useState("");

    const onAddItemClick = () => {
        setTitle("");
        if (title === "") {
            setError(true)
        } else {
            setError(false);
            addTodo(title);
        }
    };
    const onTitleChanged = (e:React.ChangeEvent<HTMLInputElement>) => {
        let body = e.target.value;
        if(body) setError(false);
        setTitle(body);

    }
    let classNameForInput = error ? "error" : "";

    return (
        <div className="todoList-newTaskForm">
            <input className={classNameForInput} type="text" placeholder="New item name"
                   onChange={onTitleChanged}
                   value={title}
            />
            <button onClick={onAddItemClick}>Add</button>
        </div>

    );
}

export default AddNewItemForm;

