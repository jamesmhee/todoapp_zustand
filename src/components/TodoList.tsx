import { useTodoStore } from '../utils/store'
import { Box, Button } from '@mui/material'

const TodoList = () => {
    const todoList = useTodoStore((state)=>state.todoList)
    const deleteTodo = useTodoStore((state)=>state.deleteTodoList)
    
    const formatDate = (time: number) =>{
      const format = new Date(time)
      return `${format.getDate() < 10 ? '0' + (format.getDate()) : format.getDate()}-${(format.getMonth()+1 < 10) ? '0'+ (format.getMonth()+1) : format.getMonth()+1}-${format.getFullYear()} `
    }

    const getTime = (time: number, type: string) => {
      const format = new Date(time)
      if(type === 'date'){
        return format.getDate() < 10 ? '0' + (format.getDate()) : format.getDate()
      }else if(type === 'month'){
        return format.getMonth() + 1 < 10 ? '0' + (format.getMonth() + 1) : format.getMonth() + 1
      }else{
        return format.getFullYear()
      }
    }

  return (
    <Box sx={{
        display: 'flex',
        width: '100%',        
        borderRadius: 2,
        height: 'calc(100vh - 250px)',
        margin: '20px 0px',
        overflowY: 'auto'
      }}>
        <div className='flex w-screen flex-col gap-3 py-2'>
          {
              todoList?.map((elm, index)=>(
                  <div className='flex justify-between items-center bg-zinc-200 rounded-md py-5 px-3' key={index}>
                    <div className='grow-0 shrink-0 basis-16 bg-zinc-100 rounded-t-xl rounded-b h-full mr-4 flex items-center justify-center flex-col'>  
                      <div className='bg-red-500 text-white p-1 text-sm w-full text-center rounded-t'>                        
                        วันที่
                      </div>
                      <span className='text-xl h-9'>
                        {getTime(elm.date, 'date')}
                      </span>
                    </div>
                    <div className='flex-auto'>
                      <div className='flex gap-3'>
                        <span>
                          Name :
                        </span>
                        <span>
                          {elm.todo}
                        </span>
                      </div>
                      <div className='flex gap-3 hidden'>
                        <span>
                          Time :
                        </span>
                        <span>
                          {formatDate(elm.date)}
                        </span>
                      </div>                    
                    </div>
                    <Button color="error" variant="outlined" onClick={()=>deleteTodo(index)}>
                      Delete
                    </Button>
                  </div>
              ))
          }
        </div>
    </Box>
  )
}

export default TodoList