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
    }
}
