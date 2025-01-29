import React from 'react'
import Sidenav from '../Partials/Sidenav'
import TopNav from '../Partials/TopNav'

function Home() {
  document.title = "Movixer | HomePage";
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