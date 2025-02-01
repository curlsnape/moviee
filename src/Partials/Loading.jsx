import React from 'react'
import loader from '../../public/loader2.gif'
function Loading() {
  return (
    <div className='flex h-screen text-white flex-col bg-black justify-center items-center w-full'>
        <img className='h-[50%] w-[50%] object-cover' src={loader} alt="" />
       <h1 className='font-semibold uppercase text-3xl tracking-wide'>loading...</h1>
    </div>
  )
}

export default Loading