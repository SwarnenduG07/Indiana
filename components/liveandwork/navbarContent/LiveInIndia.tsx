import { LiveIndia } from '@/constants'
import React from 'react'

const LiveInIndia: React.FC = () => {
  return (
    <div className="flex gap-12 px-8 py-5 bg-slate-900 backdrop-blur-lg bg-opacity-75">
      <div className="flex justify-between">
        <div className="space-y-4">
          <div className="font-bold text-lg text-cyan-200 whitespace-nowrap">Find Accommodation</div>
          <div className="space-y-2">
            {LiveIndia.map((option) => (
              <div key={option.href}>
                <a
                  href={option.href}
                  className="cursor-pointer hover:text-yellow-300 hover:font-semibold whitespace-nowrap"
                >
                  {option.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveInIndia
