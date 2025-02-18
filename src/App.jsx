import React, { useEffect, useState } from 'react'
import Routing from './Utils/Routing'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import 'remixicon/fonts/remixicon.css'
import axios from './Utils/Axios'
import Trending from './Components/Trending'

function App() {

  return (
    <div className='w-full font-[gilroy] h-screen bg-zinc-900 text-white'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>}/>
      </Routes>
    </div>
  )
}

export default App