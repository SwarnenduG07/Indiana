import { ChooseIndia } from '@/constants'
import React from 'react'


export const chooseIndia: React.FC = () => {
  return (
    <div className="flex gap-12 px-8 py-5 bg-slate-900 backdrop-blur-lg bg-opacity-75">
      <div className="flex justify-between">
        <div className="space-y-4">
          <div className="font-bold text-lg text-cyan-200 whitespace-nowrap">Find Accommodation</div>
          <div className="space-y-2">
            {ChooseIndia.map((option) => (
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
