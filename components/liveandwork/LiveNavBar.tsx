import React from 'react'

const LiveNavBar: React.FC= () => {
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
            <div className='mt-2 ml-10'>
               <h1 className='font-bold text-2xl'>
                   Live and Work in India
               </h1>
                <h1 className='lg:text-xl md:text-xl text-sm font-thin'>
                     The official government guide to living and working in India
                </h1>
            </div>
        </div>
    </nav>
  )
}

export default LiveNavBar
