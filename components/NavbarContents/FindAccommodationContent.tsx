import { explore, opsitons } from '@/constants'
import React from 'react'

const FindAccommodation = () => {
  return (
    <div className="bg-black  backdrop-blur-sm text-white mr-96 mb-20">
      <div className="flex justify-between">
        <div className="space-y-4">
          <div className="font-bold ml-20 mr-56 pr-10">Popular places</div>
          <div className="space-y-2 ml-20">
            {opsitons.map((option) => (
              <div key={option.href}>
                <a
                  href={option.href}
                  className="cursor-pointer hover:underline"
                >
                  {option.label}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold">Explore all places to visit</h2>
          <div className="space-y-2">
            {explore.map((explore) => (
              <div key={explore.href}>
                <a href={explore.href}  className='cursor-pointer hover:underline'>
                  {explore.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindAccommodation