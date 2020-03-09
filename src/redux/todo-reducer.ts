import {IState, ITask, ITaskUpdate} from "../types/interfaces";
import {todoListAPI} from "../services/todoListAPI";

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
const UPDATE_TASK = 'todo-reducer/UPDATE_TASK';

// ACTION TYPE
type AddTodoListType = {
    type: typeof ADD_TODO_LIST,
    newTodo: any
}
type DeleteTodoListType = {
    type: typeof DELETE_TODO_LIST
    todoId: string
}
type ChangeIsDoneType = {
    type: typeof CHANGE_IS_DONE
    todoId: string
    taskId: string
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

// ACTION CREATOR
const addTodoList = (newTodo: any): AddTodoListType => ({type: ADD_TODO_LIST, newTodo});
export const deleteTodoList = (todoId: string): DeleteTodoListType => ({type: DELETE_TODO_LIST, todoId});
export const changeIsDone = (todoId: string, taskId: string): ChangeIsDoneType => ({
    type: CHANGE_IS_DONE,
    todoId,
    taskId
});
export const changeTitleTask = (todoId: string, taskId: string, body: string): ChangeTitleTaskType => ({
    type: CHANGE_TITLE_TASK,
    todoId,
    taskId,
    body
});
export const changeFilter = (todoId: string, value: boolean): ChangeFilterType => ({
    type: CHANGE_FILTER,
    todoId,
    value
});
const setTodoLists = (todoLists: any) => ({type: SET_TODO_LISTS, todoLists});
const setTasks = (tasks: Array<ITask>, todoListId: string) => ({type: SET_TASKS, tasks, todoListId});
const deleteTask = (todoListId: string, taskId: string) => ({type: DELETE_TASK, todoListId, taskId});
const addTask = (item: ITask, todoListId: string) => ({type: ADD_TASK, item, todoListId});
const updateTask = (todoListId: string, taskId: string, item: ITask) => ({type: UPDATE_TASK, todoListId, taskId, item});

export const getTodoListsThunk = () => async (dispatch: Function) => {
    const data = await todoListAPI.getTodoLists();
    dispatch(setTodoLists(data.items));
};
export const deleteTodoListThunk = (todoListId: string) => (dispatch: Function) => {
    todoListAPI.deleteTodoListItem(todoListId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(deleteTodoList(todoListId))
                dispatch(getTodoListsThunk())
            } else {
                alert('error')
            }

        })
};
export const addTodoListThunk = (title: string) => (dispatch: Function) => {
    todoListAPI.addTodoLists(title).then(res => {
        if (res.data.resultCode === 0) {
            // dispatch(addTodoList(res.data.data.item))
            dispatch(getTodoListsThunk())
        }
    })
};
export const deleteTaskThunk = (todoListId: string, taskId: string) => (dispatch: Function) => {
    todoListAPI.deleteTask(todoListId, taskId)
        .then(res => {
            if(res.data.resultCode == 0){
                dispatch(deleteTask(todoListId, taskId))
            }
            else{
                console.error('try delete task failed')
            }
        })
}
export const addTaskThunk = (todoListId: string, task: any) => (dispatch: Function) => {
    todoListAPI.addTask(todoListId, task).then(res => {
        debugger
        if (res.data.resultCode === 0) {
            dispatch(getTaskThunk(todoListId))

        }
    })
}
export const getTaskThunk = (todoListId: string) => (dispatch: Function) => {
    todoListAPI.getTask(todoListId).then(res => {
        debugger
        dispatch(setTasks(res.data.items , todoListId))

    })
}
export const updateTaskThunk = (todoListId: string, taskId: string, items: ITaskUpdate) => (dispatch: Function) => {
    todoListAPI.updateTask(todoListId, taskId, items)
        .then(res => {
            if (res.data.resultCode === 0) {
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
            debugger
            return {
                ...state,
                todoLists: state.todoLists.map((todo:any) => {

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
        case UPDATE_TASK:
            return {
                ...state,
                todoLists: state.todoLists.map(el => {
                    if (el._id === action.todoListId) {
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
