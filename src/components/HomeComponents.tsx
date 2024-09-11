import { Box } from '@mui/material'
import TodoList from './TodoList'

const HomeComponents = () => {  
  return (
    <Box sx={{
      display: 'flex',
      width: '100%',      
    }}>
      <TodoList/>
    </Box>
  )
}

export default HomeComponents