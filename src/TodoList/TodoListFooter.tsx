import React, {FC} from 'react';
import '../App.css';
import {BottomNavigation} from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {makeStyles} from "@material-ui/core/styles";
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DoneIcon from '@material-ui/icons/Done';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import Divider from "@material-ui/core/Divider";

interface IProps {
    changeFilter: Function,
    todoId: string,
    filterValue: string
}

const TodoListFooter: FC<IProps> = (props: any) => {

    const onAllFilterClick = () => props.changeFilter(props.todoId, "All");
    const onCompletedFilterClick = () => props.changeFilter(props.todoId, "Completed");
    const onActiveFilterClick = () => props.changeFilter(props.todoId, "Active");
    const useStyles = makeStyles({
        root: {
            width: '100%'
        },
    });
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <>
            <Divider />

            <div className="todoList-footer">
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction onClick={onAllFilterClick} label="All" icon={<DoneAllIcon/>}/>
                    <BottomNavigationAction onClick={onCompletedFilterClick} label="Completed" icon={<DoneIcon/>}/>
                    <BottomNavigationAction onClick={onActiveFilterClick} label="Active"
                                            icon={<PlaylistAddCheckIcon/>}/>
                </BottomNavigation>


            </div>
        </>
    );

}

export default TodoListFooter;

