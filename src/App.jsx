import React from 'react'
import Routing from './Utils/Routing'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import 'remixicon/fonts/remixicon.css'

function App() {
  return (
    <div className='w-full font-[gilroy] h-screen bg-zinc-950 text-white'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App