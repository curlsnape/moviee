import React from 'react'
import Sidenav from '../Partials/Sidenav'
import TopNav from '../Partials/TopNav'

function Home() {
  return (
    <div className='w-full h-full flex'>
       <Sidenav/>
        <div className="main w-[80%] h-full ">
          <TopNav/>
        </div>
    </div>
  )
}

export default Home