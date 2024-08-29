"use client";

import { Card, CardHeader, CardTitle } from "./ui/card";
import { useRouter } from "next/navigation";

const testimonials = [
    {
        name: "Visit >",
        title: "Explore India destination and activities and plan the trip of lifetime",
        href: "/visit"
    },
    {
        name: "LIVE AND WORK >",
        title: "Discover what you need to know about living & working and moving to India",
        href: "/liveandwork"
    },
    {
        name: "STUDY >",
        title: "Looking to study or currently studying in India",
        href: "/study"
    },
    {
        name: "MEDICAL>",
        title: "Comne to india and do your Medical checkup in low cost and high qualiy",
        href: "/medical"
    }
];

export const LandingContent = () => {
    const router = useRouter();
    return (
        <div className="px-10 pb-20">
            <h1 className="flex flex-col items-center text-xl font-serif text-pretty font-bold text-emerald-400 pt-4 pb-4">
               OUR OFFICIAL GUIDES
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card
                        onClick={() => router.push(item.href)}
                        key={item.href}
                        className="bg-slate-600 bg-opacity-40 backdrop-blur-lg border-none text-white lg:h-72 md:h-80 h-48 hover:text-cyan-400 cursor-pointer hover:shadow-xl hover:shadow-cyan-400"
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2 mb-2">
                                <div>
                                    <p className="text-kg">{item.name}</p>
                                    <p className="text-gray-600 text-base mt-4 font-sans">{item.title}</p>
                                </div>
                            </CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default LandingContent;
