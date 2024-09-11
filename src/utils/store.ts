import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface TodoState {
    todoList: TodoList[]
    updateTodoList: (todo:string) => void
    deleteTodoList: (index:number) => void
}

interface TodoList {
    todo: string
    date: number
}

interface NameState {
    name: string
    updateName: (name: string) => void
}

export const usePersonStore = create<NameState>()(
    persist(
        (set)=>({
            name: '',
            updateName: (name) => set(()=> ({name: name}))
        }),
        {
            name: 'name-storage',
            storage: createJSONStorage(()=>localStorage)
        }
    )
)

export const useTodoStore = create<TodoState>()(
    persist(
        (set)=>({
            todoList: [],
            updateTodoList: (todo:string) => set((state)=>({
                todoList: [...state.todoList, {todo:todo, date: new Date().getTime()}]
            })),
            deleteTodoList: (index:number) => set((state)=>{
                const newTodoList = [...state.todoList]
                newTodoList.splice(index , 1)
                return {todoList: newTodoList}
            })
        }),
        {
            name: 'todo-storage',
            storage: createJSONStorage(()=> localStorage)
        }
    )
)