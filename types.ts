import React from "react";

export interface Opsitons {
    label: string;
    href: string;
  }
  
  export interface Explore {
    label: string;
    href: string;
  }
  
  export interface LiveNav {
     title: string;
     label: string;
     component: React.FC;
     
  }
  
 export interface Choose {
    title: string;
    href: string;
 } 