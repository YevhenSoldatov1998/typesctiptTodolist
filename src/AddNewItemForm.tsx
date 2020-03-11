import React from 'react';
import './App.css';
import {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {Tooltip} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';

interface IAddNewItemForm {
    addTodo: any,
    forTasks: any
}

const AddNewItemForm: React.FC<IAddNewItemForm> = ({addTodo , forTasks}) => {
    const [error, setError] = useState(false);
    const [title, setTitle] = useState("");
    const [add , setAdd]  = useState(false)
    const onAddItemClick = () => {
        setTitle("");
        if (title === "") {
            setError(true)
        } else {
            setError(false);
            addTodo(title);
        }
    };
    const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        let body = e.target.value;
        if (body) setError(false);
        setTitle(body);

    }
    const activeAdd = () => {
        setAdd(true)
    }
    const deactiveAdd = () => {
        setAdd(false)
    }
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            iconAdd:  {
                transform: 'translateY(10px) translateX(10px)',
            },
            fab: {
                margin: '0 auto',

            },

        })
    );
    const classes = useStyles();

    return (
        <div className={forTasks ? 'headerItemForm headerItemFormTasks': 'headerItemForm ' }>
            {add ?
                <form className="todoList-newTaskForm" >
                    <TextField error={error}
                               id="standard-required"
                               type="text"
                               label="New item name"
                               onChange={onTitleChanged}
                               value={title}/>

                    <Button onClick={onAddItemClick} className={classes.iconAdd} variant="contained" color="primary">
                        Add
                    </Button>
                </form>
                :
                <Tooltip title="Add" aria-label="add" onClick={activeAdd}>
                    <Fab color={forTasks ? "primary" : "secondary"}
                         size={forTasks ? "medium" : "large"}>
                        <AddIcon/>
                    </Fab>
                </Tooltip>

            }

        </div>
    );
}

export default AddNewItemForm;

