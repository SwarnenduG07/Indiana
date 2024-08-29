import React from 'react'

const LiveNavBar = () => {
  return (
    <nav className='border-b border-purple-600  pb-4 '>
      <div className='flex flex-wrap'>
        <div className='ml-24'>
            <h1 className='text-3xl font-mono text-emerald-400'>
            India
           </h1>
            <h1 className='font-serif text-emerald-700'>
              Immigrations
            </h1>
           </div>  
            <div className='mt-4 ml-10 font-bold text-2xl'>
               Live and Work in India
            </div>
        </div>
    </nav>
  )
}

export default LiveNavBar
