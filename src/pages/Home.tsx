import FirstCome from "../components/FirstCome"
import HomeComponents from "../components/HomeComponents"
import { usePersonStore } from "../utils/store"

const Home = () => {

  const name = usePersonStore((state)=>state.name)  
  return (
    <>
      {
        name ? 
        (<HomeComponents/>)
        : 
        (<FirstCome/>)
      }
    </>    
  )
}

export default Home