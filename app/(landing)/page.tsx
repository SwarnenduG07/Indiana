"use client"
import LandingContent from "@/components/LandingContent";
import LandingNavBar from "@/components/LandingNavbar";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { Trees } from "lucide-react";
import React, { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";



// Client-side code here


 const products = [
    
    {
        title: "INDIANA",
        link: "/visitPRO",
        thumbnail:
          "/india.png",
    },
    {
        title: "Live And Work",
        link: "/liveandwork",
        thumbnail: 
            "/swastika.svg"
    },
    {
        title: "Visit",
        link: "/visit",
        thumbnail:
          "/india.png",
    },
    {
        title: "Study",
        link: "/study",
        thumbnail: 
            "/swastika.svg"
    },
    {
        title: "Medical >",
        link: "/medical",
        thumbnail: 
            "/swastika.svg"
    },
    {
        title: "Study",
        link: "/study",
        thumbnail: 
            "/swastika.svg"
    },
    {
        title: "Medical >",
        link: "/medical",
        thumbnail: 
            "/swastika.svg"
    },
    {
        title: "Study",
        link: "/study",
        thumbnail: 
            "/swastika.svg"
    },
    
];

const LandingPage = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Or a loading spinner
    }
    
    return (
        <div>
            <LandingNavBar />
            <HeroParallax products={products} />
            <div className="flex flex-col items-center text-teal-400 justify-center lg:text-4xl md:text-3xl text-3xl font-serif font-bold pt-24 pb-10 sm:ml">
                Visit India With Indiana
            </div>
            <span className="flex flex-col items-center text-slate-800 text-2xl font-extralight">
                The best guide to visit India For<span><Trees /></span>
                <span>
                    <TypewriterComponent
                       options={{
                         strings: [
                            "Visiting Urban India",
                            " Live and Work",
                            " Study",
                            " Medical Treatement"
                         ],
                         autoStart: true,
                         loop: true,

                       }}
                    />
                </span>
                <LandingContent />
            </span>
            <div className="flex flex-col items-center text-green-400 justify-center lg:text-8xl md:text-6xl text-4xl font-serif font-bold pt-24 pb-10">
                Under Development
            </div>
        </div>
    );
};

export default LandingPage;
