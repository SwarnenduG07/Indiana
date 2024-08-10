"use client";

import { Card, CardHeader, CardTitle } from "./ui/card";
import { useRouter } from "next/navigation";

const testimonials = [
    {
        name: "Visit >",
        title: "Explore India destination and activities and plan the trip of lifetime",
        href: "/dashboad"
    },
    {
        name: "LIVE AND WORK >",
        title: "Discover what you need to know about living & working and moving to India",
        href: "/"
    },
    {
        name: "STUDY >",
        title: "Looking to study or currently studying in India",
        href: "/"
    },
    {
        name: "MEDICAL>",
        title: "Comne to india and do your Medical checkup in low cost and high qualiy",
        href: "/"
    }
];

export const LandingContent = () => {
    const router = useRouter();
    return (
        <div className="px-10 pb-20 bg-blue-950">
            <h1 className="flex flex-col items-center text-xl font-serif text-pretty font-bold text-emerald-400 pt-4 pb-4">
               OUR OFFICIAL GUIDES
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card
                        onClick={() => router.push(item.href)}
                        key={item.href}
                        className="bg-[#ffffffe8] border-none text-black lg:h-72 md:h-80 h-48 hover:text-purple-700 cursor-pointer hover:shadow-emerald-600/100"
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2 mb-2">
                                <div>
                                    <p className="text-kg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm mt-4 font-sans">{item.title}</p>
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
