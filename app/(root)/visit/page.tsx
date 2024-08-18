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
        <ThingsToDoVisit />
    </div>
  )
}

export default Visit