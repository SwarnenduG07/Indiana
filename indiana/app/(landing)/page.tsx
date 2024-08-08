import LandingNavBar from "@/components/ui/LandingNavbar"
import { BookType, Trees, WholeWord } from "lucide-react"

 export const landing = () => {
    return (
         <div>
            <LandingNavBar/>
            <div className="flex flex-col items-center text-teal-400 justify-center text-4xl font-serif font-bold pt-24 pb-10">
                Visit India With Indiana
            </div>
            <span className="flex flex-col items-center text-slate-800 text-2xl font-extralight">
               The best traval guide to visit<span><Trees/></span>Urban India
            </span>
            <div className="flex flex-col items-center text-pink-600 justify-center text-4xl font-serif font-bold pt-24 pb-10">
               Coming Soon
            </div>
         </div>
    )
}

export default landing