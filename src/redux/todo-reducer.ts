import {IState, ITask, ITaskUpdate} from "../util/interfaces/interfaces";
import {todoListAPI} from "../services/todoListAPI";

const ADD_TODO_LIST = 'ADD_TODO_LIST';
const DELETE_TODO_LIST = 'DELETE_TODO_LIST';
const CHANGE_IS_DONE = 'CHANGE_IS_DONE';
const ADD_TASK = 'ADD_TASK';
const CHANGE_TITLE_TASK = 'CHANGE_TITLE_TASK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const SET_TODO_LISTS = 'SET_TODO_LISTS';
const DELETE_TASK = 'DELETE_TASK';
const SET_TASKS = 'SET_TASKS';
const UPDATE_TASK = 'UPDATE_TASK';

const addTodoList = (newTodo: any) => ({type: ADD_TODO_LIST, newTodo});
export const deleteTodoList = (todoId: string) => ({type: DELETE_TODO_LIST, todoId});
export const changeIsDone = (todoId: number, taskId: number) => ({type: CHANGE_IS_DONE, todoId, taskId});
export const changeTitleTask = (todoId: number, taskId: number, body: string) => ({
    type: CHANGE_TITLE_TASK,
    todoId,
    taskId,
    body
});
export const changeFilter = (todoId: number, value: boolean) => ({type: CHANGE_FILTER, todoId, value});
const setTodoLists = (todoLists: any) => ({type: SET_TODO_LISTS, todoLists});
const setTasks = (tasks: Array<ITask>, todoListId: string) => ({type: SET_TASKS, tasks, todoListId});
const deleteTask = (todoListId: string, taskId: string) => ({type: DELETE_TASK, todoListId, taskId});
const addTask = (item: ITask, todoListId: string) => ({type: ADD_TASK, item, todoListId});
const updateTask = (todoListId: string, taskId: string, item: ITask) => ({type: UPDATE_TASK, todoListId, taskId, item});

export const getTodoListsThunk = () => (dispatch: Function) => {
    todoListAPI.getTodoLists().then(res => {
        debugger
        dispatch(setTodoLists(res.data));

    })
};
export const deleteTodoListThunk = (todoListId: string) => (dispatch: Function) => {
    todoListAPI.deleteTodoListItem(todoListId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(deleteTodoList(todoListId))
            } else {
                alert('error')
            }

        })
};
export const addTodoListThunk = (title: string) => (dispatch: Function) => {
    todoListAPI.addTodoLists(title).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(addTodoList(res.data.data.item))
        }
    })
};
export const deleteTaskThunk = (todoListId: string, taskId: string) => (dispatch: Function) => {
    todoListAPI.deleteTask(todoListId, taskId)
        .then(res => {
            dispatch(deleteTask(todoListId, taskId))
        })
}
export const addTaskThunk = (todoListId: string, task: any) => (dispatch: Function) => {
    todoListAPI.addTask(todoListId, task).then(res => {
        if (res.data.resultCode === 0) {
            debugger
            dispatch(addTask(res.data.data.item, todoListId))
        }
    })
}
export const getTaskThunk = (todoListId: string) => (dispatch: Function) => {
    todoListAPI.getTask(todoListId).then(res => {
        debugger
        dispatch(setTasks(res.data.items, todoListId))

    })
}
export const updateTaskThunk = (todoListId: string, taskId: string, items: ITaskUpdate) => (dispatch: Function) => {
    todoListAPI.updateTask(todoListId, taskId, items)
        .then(res => {
            if (res.data.resultCode === 0) {
                debugger
                dispatch(updateTask(todoListId, taskId, res.data.data.item))
            }
        })
}
const initialState: IState = {
    todoLists: []
};

export const todoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_TODO_LISTS:
            return {
                ...state,
                todoLists: action.todoLists
            };
        case ADD_TODO_LIST:
            return {
                ...state,
                todoLists: [...state.todoLists, action.newTodo]
            };
        case DELETE_TODO_LIST:
            return {
                ...state,
                todoLists: state.todoLists.filter(el => el.id !== action.todoId)
            };
        case ADD_TASK:
            return {
                ...state,
                todoLists: state.todoLists.map(el => {
                    debugger
                    if (el.id === action.todoListId) {
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
                todoLists: state.todoLists.map(todo => {
                    if (todo.id === action.todoListId) {
                        return {
                            ...todo,
                            tasks: [...action.tasks]
                        }
                    } else {
                        return todo
                    }
                })
            }
        case UPDATE_TASK:
            return {
                ...state,
                todoLists: state.todoLists.map(el => {
                    if (el.id === action.todoListId) {
                        return {
                            ...el,
                            tasks: el.tasks.map(task => {
                                if (task.id === action.taskId) {
                                    return {
                                        ...task, ...action.item
                                    }
                                } else return task
                            })
                        }
                    } else {
                        return {...el}
                    }
                })
            }
        // case CHANGE_IS_DONE:
        //     return {
        //         ...state,
        //         todoLists: state.todoLists.map(el => {
        //             if (el.id === action.todoId) {
        //
        //                 let newTasks = el.tasks.map(task => {
        //                     if (task.id === action.taskId) {
        //                         return {...task, isDone: !task.isDone}
        //                     } else return {...task}
        //                 });
        //
        //                 return {...el, tasks: newTasks}
        //             } else {
        //                 return {...el}
        //             }
        //         })
        //     }
        // case CHANGE_TITLE_TASK:
        //     return {
        //         ...state,
        //         todoLists: [...state.todoLists.map(el => {
        //             if (el.id === action.todoId) {
        //                 return {
        //                     ...el, tasks: el.tasks.map(task => {
        //                         if (task.id === action.taskId) {
        //                             return {...task, title: action.body}
        //                         } else return {...task}
        //
        //                     })
        //                 }
        //             } else {
        //                 return {...el}
        //             }
        //         })]
        //     }
        case DELETE_TASK:
            return {
                ...state,
                todoLists: state.todoLists.map(objItem => {
                    if (objItem.id === action.todoListId) {
                        return {
                            ...objItem,
                            tasks: objItem.tasks.filter(el => el.id !== action.taskId)
                        }

                    } else return {...objItem}
                })
            }
        case CHANGE_FILTER:
            return {
                ...state,
                todoLists: state.todoLists.map(objItem => {
                    if (objItem.id === action.todoId) {
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
