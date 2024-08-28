"use client"


import ThingsToDo from '@/components/NavbarContents/ThingsToDoContent'
import ThingsToDoVisit from '@/components/visit/ThingsToDo'
import { VisitContent } from '@/components/visit/VisitContent'
import VisitnavBar from '@/components/visit/VistNavBar'
import React from 'react'

const Visit = () => {
  return (
    <div>
        <VisitnavBar />
        <VisitContent />
        <ThingsToDoVisit title={''} price={''} rating={0} reviewsCount={0} badgeText={''} images={[]} />
    </div>
  )
}

export default Visit