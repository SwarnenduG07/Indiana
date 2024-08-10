"use client"
import LandingContent from "@/components/LandingContent";
import LandingNavBar from "@/components/ui/LandingNavbar";
import { Trees } from "lucide-react";
import { Tulpen_One } from "next/font/google";
import TypewriterComponent from "typewriter-effect";

const LandingPage = () => {
    return (
        <div>
            <LandingNavBar />
            <LandingContent />
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
            </span>
            <div className="flex flex-col items-center text-green-400 justify-center lg:text-8xl md:text-6xl text-4xl font-serif font-bold pt-24 pb-10">
                Under Development
            </div>
        </div>
    );
};

export default LandingPage;
