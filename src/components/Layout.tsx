import { Box } from "@mui/material"
import { usePersonStore } from "../utils/store"
import BottomNav from "./BottomNav"
import FirstCome from "./FirstCome"

interface ILayoutProps {
    children: JSX.Element | JSX.Element[]
}

const Layout = ({children}:ILayoutProps) => {
    const userName = usePersonStore((state)=>state.name)
  return (
    <div className="w-screen h-screen bg-white relative">        
        <Box sx={{
          display: 'flex',       
        }}>
          <Box sx={{
            background: '#ededed',
            borderRadius: '10px',
            margin: 2,
            padding: 1.5,
            width: '100vw',
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}>
            <h2 className='font-bold text-xl text-blue-500 hover:text-blue-300 select-none transition-colors duration-300'>
              TODO
            </h2>
            <span className={(userName ? 'inline-flex' : 'hidden') + " text-base"}>
              Hi, {userName}
            </span>
          </Box>
        </Box>
        {
            userName ? 
            (<div className="mx-4 h-[calc(100vh_-_155px)] overflow-y-hidden overflow-x-hidden">
              {children}
            </div>
            )
            : 
            (<FirstCome/>)
        }
        <BottomNav style={{ backgroundColor: '#ededed' }} className="absolute w-full bottom-0"/>
    </div>
  )
}

export default Layout