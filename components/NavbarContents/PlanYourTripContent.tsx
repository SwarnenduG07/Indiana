import { Sessions, opsitons } from '@/constants'
import React from 'react'

const PlanYourTripContent = () => {
  return (
    <div className="bg-black backdrop-blur-sm text-white mr-72 mb-56">
      <div className="flex justify-between">
        <div className="space-y-4">
          <div className="font-bold ml-20 mr-56  whitespace-nowrap">Popular places</div>
          <div className="space-y-2 ml-20">
            {opsitons.map((option) => (
              <div key={option.href}>
                <a
                  href={option.href}
                  className="cursor-pointer hover:underline whitespace-nowrap"
                >
                  {option.label}
                </a>
                a
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-bold whitespace-nowrap">Sessions to visit</h2>
          <div className="space-y-2">
            {Sessions.map((Sessions) => (
              <div key={Sessions.href}>
                <a href={Sessions.href} className="cursor-pointer hover:underline whitespace-nowrap">
                  {Sessions.label}
                </a>
                <div className='font-extralight whitespace-nowrap'>
                  {Sessions.month}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanYourTripContent