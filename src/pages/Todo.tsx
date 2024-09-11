import { Box } from '@mui/material'
import { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../components/TabPanel';
import { FaList } from "react-icons/fa6";
import { IoAddCircleSharp } from "react-icons/io5";


const Todo = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  return (
    <Box sx={{width: '100%'}}>
      <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" variant="fullWidth">
        <Tab icon={<FaList />} label="List" aria-label="todo-list" />
        <Tab icon={<IoAddCircleSharp />} label="Add" aria-label="add-todo" />
      </Tabs>      
      <TabPanel setValue={setValue} value={value}/>
    </Box>
  );
}

export default Todo