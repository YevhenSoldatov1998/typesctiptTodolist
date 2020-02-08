import {instance} from './instanceAxios'

export const todoListAPI = {
    getTodoLists: () => {
        return instance.get('todo-lists')
    },
    getTodoListsTask: (todoListId: string) => {
        return instance.get(`todo-lists/${todoListId}/tasks`)
    },
    deleteTodoListItem: (todoListId: string) => {
        return instance.delete(`todo-lists/${todoListId}`)
    },
    addTodoLists: (title: string) => {
        return instance.post('todo-lists', {title})
    },
    addTodoListTask: (todoListId: string, task: any) => {
        return instance.post(`todo-lists/${todoListId}/tasks`, {task})
    }
}
