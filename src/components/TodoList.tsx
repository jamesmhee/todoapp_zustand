import { useTodoStore } from '../utils/store'
import { Box } from '@mui/material'
import TodoItem from './TodoItem';

const TodoList = () => {
    const todoList = useTodoStore((state)=>state.todoList)    

  return (
    <Box sx={{
        display: 'flex',
        width: '100%',        
        borderRadius: 2,
        height: 'calc(100dvh - 250px)',
        margin: '20px 0px',
        overflowY: 'scroll'
      }}>
        <div className='flex w-screen flex-col gap-3 py-2'>
          {
              todoList?.map((elm, index)=>(
                  <TodoItem todo={elm} index={index} key={index}/>
              ))
          }
        </div>
    </Box>
  )
}

export default TodoList