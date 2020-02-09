import {instance} from './instanceAxios'

export const todoListAPI = {
    getTodoLists: () => {
        return instance.get('todo-lists')
    },
    deleteTodoListItem: (todoListId: string) => {
        return instance.delete(`todo-lists/${todoListId}`)
    },
    addTodoLists: (title: string) => {
        return instance.post('todo-lists', {title})
    },
    getTask: (todoListId: string) => {
        return instance.get(`todo-lists/${todoListId}/tasks`)
    },
    addTask: (todoListId?: string, task?: any) => {
        return instance.post(`todo-lists/${todoListId}/tasks`, {title: task})
    },
    deleteTask: (todoListId: string, taskId: string) => {
        return instance.delete(`todo-lists/${todoListId}/tasks/${taskId}`)
    }
}
