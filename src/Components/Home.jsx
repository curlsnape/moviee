import React from 'react'
import Sidenav from '../Partials/Sidenav'

function Home() {
  return (
    <div className='w-full h-full flex'>
       <Sidenav/>
        <div className="main w-[80%] h-full "></div>
    </div>
  )
}

export default Home