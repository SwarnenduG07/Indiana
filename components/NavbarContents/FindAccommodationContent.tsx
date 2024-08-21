import { explore, Findaccommodation } from '@/constants'
import React from 'react'

const FindAccommodation = () => {
  return (
    <div className="bg-black backdrop-blur-sm text-white mr-72 mb-56">
      <div className="flex justify-between">
        <div className="space-y-4">
          <div className="font-bold ml-20 mr-56  whitespace-nowrap">Find Accommodation</div>
          <div className="space-y-2 ml-20">
            {Findaccommodation.map((option) => (
              <div key={option.href}>
                <a
                  href={option.href}
                  className="cursor-pointer hover:underline whitespace-nowrap"
                >
                  {option.label}
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