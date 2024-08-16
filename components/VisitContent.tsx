"use client";
import React from 'react'
 
import { useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from './ui/direction-aware-hover';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';

const ramdom = [
  {
    label: "In the mountain",
    imageUrl: "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Indian mountains are best"
  }
]


export const VisitContent = () => {
  
  return (
    <div>
    <div className="h-[40rem] relative  flex items-center justify-center">
      {ramdom.map((item, i) => (
      <DirectionAwareHover key={i} imageUrl={item.imageUrl}>
        <p className="font-bold text-xl">{item.label}</p>
        <p className="font-normal text-sm">{item.description}</p>
      </DirectionAwareHover>
   ))}   
  
  <BentoGrid className="max-w-4xl mx-auto bg-gre">
  {items.map((item, i) => (
    <BentoGridItem
      key={i}
      title={item.title}
      description={item.description}
      header={item.header}
 
      className={i === 3 || i === 6 ? "md:col-span-2" : ""}
    />
  ))}
    </BentoGrid>
  </div>
 </div>   
  )
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    imageSrc: "/india.png"
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    imageSrc: "/india.png",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    imageSrc: "/india.png"
  },

];

