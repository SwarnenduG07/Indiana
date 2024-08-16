"use client";
import React from 'react'
 
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from './ui/direction-aware-hover';

const ramdom = [
  {
    label: "In the mountain",
    imageUrl: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Indian mountains are best"
  }
]


const VisitContent = () => {
  
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      {ramdom.map((item, i) => (
      <DirectionAwareHover key={i} imageUrl={item.imageUrl}>
        <p className="font-bold text-xl">{item.label}</p>
        <p className="font-normal text-sm">{item.description}</p>
      </DirectionAwareHover>
   ))}   
  
    </div>
  )
}

export default VisitContent