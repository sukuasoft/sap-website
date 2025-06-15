'use client'
import {  ChevronDown } from "lucide-react";
import { useState } from "react";

interface FaqItemProps {
    title:string;
    children:React.ReactNode;
}
export default function FaqItem({title,children}:FaqItemProps){
    const [showDetails, setShowDetails] = useState(false);

    function toogleShowDetails (){
        setShowDetails(!showDetails);
    }
    return (
        <div className="bg-[#F7FAFC] rounded-lg 
         border border-[#CFD9E8] border-solid px-4 py-3" onClick={toogleShowDetails}>
            <div className="flex">
                    <p>{title}</p>

                    <ChevronDown className={`${showDetails && 'rotate-180'} ml-auto`} />
            </div>
                {showDetails && <div className="text-[#4A6B9C]">
                {children}
            </div>}
        </div>
    )
}