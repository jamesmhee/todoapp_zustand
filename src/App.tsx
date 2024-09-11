import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/todo' element={<Todo/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
