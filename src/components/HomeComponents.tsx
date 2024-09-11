import { Box } from '@mui/material'
import { TodoList, useTodoStore } from '../utils/store'

const HomeComponents = () => {  
  const todoList = useTodoStore((state)=>state.todoList)
  
  const findDone = (list:TodoList[]) =>{
    return list.filter((e)=>e.done).length    
  }

  const findThisDay = (list:TodoList[]) =>{
    const today:number = new Date().getDate()
    const findToday = list.filter((elm)=>new Date(elm.date).getDate() === today)
    return findToday.length
  }

  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column'
    }}>
      <div className='flex justify-between gap-3'>
        <div className='flex-auto basis-5/12 h-[250px] bg-[#ededed] rounded-md p-2'>
          <h1 className='text-md font-bold border-b border-zinc-300'>How many your list</h1>
            <div className='flex items-center justify-center h-full text-2xl'>
              {todoList.length}
            </div>
          </div>
        <div className='flex-auto basis-1/12 flex flex-col gap-3'>
          <div className='flex-auto basis-1/12 bg-[#ededed] p-2 rounded-md'>
            <h1 className='text-md font-bold border-b border-zinc-300'>On this day</h1>
            <div className='flex items-center justify-center h-full text-2xl'>
              {findThisDay(todoList)}
            </div>            
          </div>
          <div className='flex-auto basis-1/12 bg-[#ededed] p-2 rounded-md'>
            <h1 className='text-md font-bold border-b border-zinc-300'>Done</h1>
            <div className='flex items-center justify-center h-full text-2xl'>
              {findDone(todoList)}
            </div>            
          </div>
        </div>        
      </div>
    </Box>
  )
}

export default HomeComponents