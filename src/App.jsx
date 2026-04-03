import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Register from './components/pages/Register'
import Userdata from './components/pages/Userdata'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import Protect from './components/pages/Protect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
<Routes>
  <Route path = '/' element={<Home/>}/>
  <Route path='/register' element={<Register/>}/>
        <Route path='/register/:id' element={<Register/>}/>

  <Route path ='/login' element ={<Login/>}/>
  <Route path='/userdata' element={<Protect><Userdata/></Protect>}/>


</Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App
