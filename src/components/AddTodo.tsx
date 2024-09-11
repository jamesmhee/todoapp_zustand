import { Box, Button, TextField } from '@mui/material'
import React, { FormEvent, SetStateAction, useState } from 'react'
import { useTodoStore } from '../utils/store'

interface TodoDetail{
  todo: string  
}

const AddTodo = ({setValue}: {setValue: React.Dispatch<SetStateAction<number>>}) => {
  const addTodoList = useTodoStore((state)=>state.updateTodoList)
  const [todoDetail, setTodoDetail] = useState<TodoDetail>({
    todo: ''
  })
  
  const handleSubmit = (event:FormEvent) =>{
    event.preventDefault()    
    addTodoList(todoDetail.todo)    
    setTodoDetail({todo: ''})    
    setValue(0)
    alert("Add Todo List Success")
  }

  return (
    <Box
        sx={{
            display: 'flex',
            margin: '20px 0px'
        }}
        component="form"
        onSubmit={(e)=>handleSubmit(e)}
    >
      <TextField
        variant='standard'
        color="info"
        required
        label="What you have to do ?"
        value={todoDetail.todo}
        onChange={(e)=>setTodoDetail({todo: e.target.value})}
        fullWidth
      >
      </TextField>      
      <Button type="submit" variant="outlined" color='info' aria-label='add-todo'>Add</Button>
    </Box>
  )
}

export default AddTodo