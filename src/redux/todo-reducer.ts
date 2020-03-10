import {IState, ITask, ITaskUpdate, ITodoList} from "../types/interfaces";
import {todoListAPI} from "../services/todoListAPI";
import {ThunkAction} from "redux-thunk";
import {appStateType} from "./store";

// CONSTANTS
const ADD_TODO_LIST = 'todo-reducer/ADD_TODO_LIST';
const DELETE_TODO_LIST = 'todo-reducer/DELETE_TODO_LIST';
const CHANGE_IS_DONE = 'todo-reducer/CHANGE_IS_DONE';
const ADD_TASK = 'todo-reducer/ADD_TASK';
const CHANGE_TITLE_TASK = 'todo-reducer/CHANGE_TITLE_TASK';
const CHANGE_FILTER = 'todo-reducer/CHANGE_FILTER';
const SET_TODO_LISTS = 'todo-reducer/SET_TODO_LISTS';
const DELETE_TASK = 'todo-reducer/DELETE_TASK';
const SET_TASKS = 'todo-reducer/SET_TASKS';

// ACTION TYPE
type AddTodoListType = {
    type: typeof ADD_TODO_LIST,
    newTodo: ITodoList

}
type AddTaskType = {
    type: typeof ADD_TASK
    todoListId: string
    item: ITask
}
type DeleteTodoListType = {
    type: typeof DELETE_TODO_LIST
    todoId: string
}
type ChangeIsDoneType = {
    type: typeof CHANGE_IS_DONE
    todoId: string
    taskId: string
    value: boolean
}
type ChangeTitleTaskType = {
    type: typeof CHANGE_TITLE_TASK
    todoId: string
    taskId: string
    body: string
}
type ChangeFilterType = {
    type: typeof CHANGE_FILTER
    todoId: string
    value: boolean
}
type SetTodoListsType = {
    type: typeof SET_TODO_LISTS
    todoLists: Array<ITodoList>
}
type SetTasksType = {
    type: typeof SET_TASKS
    tasks: Array<ITask>
    todoListId: string
}
type DeleteTaskType = {
    type: typeof DELETE_TASK
    todoListId: string
    taskId: string
}

type AllActionType = AddTodoListType
    | AddTaskType
    | DeleteTodoListType
    | ChangeIsDoneType
    | ChangeTitleTaskType
    | ChangeFilterType
    | SetTodoListsType
    | SetTasksType
    | DeleteTaskType

// ACTION CREATOR
const addTodoListSuccess = (newTodo: ITodoList): AddTodoListType => ({type: ADD_TODO_LIST, newTodo});
const addTaskSuccess = (todoListId: string, item: ITask): AddTaskType => ({type: ADD_TASK, todoListId, item});
export const deleteTodoList = (todoId: string): DeleteTodoListType => ({type: DELETE_TODO_LIST, todoId});
export const changeIsDone = (todoId: string, taskId: string, value: boolean): ChangeIsDoneType => ({
    type: CHANGE_IS_DONE,
    todoId,
    taskId,
    value

});
export const changeTitleTask = (todoId: string, taskId: string, body: string): ChangeTitleTaskType => ({
    type: CHANGE_TITLE_TASK,
    todoId,
    taskId,
    body
});
export const changeFilter = (todoId: string, value: boolean): ChangeFilterType => {
    return {
        type: CHANGE_FILTER, todoId, value
    }
};
const setTodoLists = (todoLists: Array<ITodoList>): SetTodoListsType => ({type: SET_TODO_LISTS, todoLists});
const setTasks = (tasks: Array<ITask>, todoListId: string): SetTasksType => ({type: SET_TASKS, tasks, todoListId});
const deleteTask = (todoListId: string, taskId: string): DeleteTaskType => ({type: DELETE_TASK, todoListId, taskId});

// THUNK CREATOR
type ThunkActionType = ThunkAction<void, appStateType, unknown, AllActionType | any>
export const getTodoListsThunk = (): ThunkActionType => async (dispatch) => {
    const data = await todoListAPI.getTodoLists();
    dispatch(setTodoLists(data.items));
};
export const deleteTodoListThunk = (todoListId: string): ThunkActionType => (dispatch) => {
    todoListAPI.deleteTodoListItem(todoListId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(deleteTodoList(todoListId));
            } else {
                alert('error')
            }

        })
};
export const addTodoListThunk = (title: string): ThunkActionType => (dispatch) => {
    todoListAPI.addTodoLists(title).then(res => {
        if (res.data.resultCode === 0) {
            let todoList = {...res.data.data.item, filterValue: 'All'}
            dispatch(addTodoListSuccess(todoList))
        }
    })
};
export const deleteTaskThunk = (todoListId: string, taskId: string): ThunkActionType => (dispatch) => {
    todoListAPI.deleteTask(todoListId, taskId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(deleteTask(todoListId, taskId))
            } else {
                console.error('try delete task failed')
            }
        })
}
export const addTaskThunk = (todoListId: string, task: ITask): ThunkActionType => async (dispatch) => {
    const data = await todoListAPI.addTask(todoListId, task);
    if (data.resultCode === 0) {
        dispatch(addTaskSuccess(todoListId, data.item));
    }
}
export const getTaskThunk = (todoListId: string): ThunkActionType => (dispatch) => {
    todoListAPI.getTask(todoListId).then(res => {
        dispatch(setTasks(res.data.items, todoListId))

    })
}
export const updateTaskThunk = (todoListId: string, taskId: string, items: ITaskUpdate): ThunkActionType => (dispatch) => {
    todoListAPI.updateTask(todoListId, taskId, items)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getTaskThunk(todoListId))
            }
        })
}

// INITIAL STATE
const initialState: IState = {
    todoLists: []
};

// REDUCER
export const todoReducer = (state = initialState, action: AllActionType) => {
    switch (action.type) {
        case SET_TODO_LISTS:
            return {
                ...state,
                todoLists: action.todoLists.map((todolist: ITodoList) => ({...todolist, filterValue: 'All'}))
            };
        case ADD_TODO_LIST:
            let newTodo = {...action.newTodo};
            return {
                ...state,
                todoLists: [...state.todoLists, newTodo]

            };
        case DELETE_TODO_LIST:
            return {
                ...state,
                todoLists: state.todoLists.filter(el => el._id !== action.todoId)
            };
        case ADD_TASK:
            return {
                ...state,
                todoLists: state.todoLists.map(el => {
                    if (el._id === action.todoListId) {
                        return {
                            ...el,
                            tasks: [...el.tasks, action.item]
                        }
                    } else {
                        return {...el}
                    }
                })
            }
        case SET_TASKS:
            return {
                ...state,
                todoLists: state.todoLists.map((todo: any) => {
                    if (todo._id === action.todoListId) {
                        return {
                            ...todo,
                            tasks: [...action.tasks]
                        }
                    } else {
                        return todo
                    }
                })
            }
        case DELETE_TASK:
            return {
                ...state,
                todoLists: state.todoLists.map(objItem => {
                    if (objItem._id === action.todoListId) {
                        return {
                            ...objItem,
                            tasks: objItem.tasks.filter(el => el._id !== action.taskId)
                        }

                    } else return {...objItem}
                })
            }
        case CHANGE_FILTER:
            return {
                ...state,
                todoLists: state.todoLists.map(objItem => {
                    if (objItem._id === action.todoId) {
                        return {
                            ...objItem,
                            filterValue: action.value
                        }
                    } else {
                        return {...objItem}
                    }
                })
            }
        default:
            return state;
    }
}
