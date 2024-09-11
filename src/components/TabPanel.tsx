import React, { SetStateAction } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

interface ITabPanelProps{
    value: number
    setValue: React.Dispatch<SetStateAction<number>>
}

const TabPanel = ({value, setValue}: ITabPanelProps) => {
  return (
    <>
    {
        value === 0 ? (<TodoList/>) : (<AddTodo setValue={setValue}/>)
    }
    </>
  )
}

export default TabPanel