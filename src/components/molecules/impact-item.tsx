import { useMemo } from "react";

interface ImpactItemProps {

    title:string;
    value?: string | number;

}
export default function ImpactItem ({title, value}:ImpactItemProps){

    const valueFormatted = useMemo(()=>{
        if(typeof value == 'number'){
            return `${value}+`;
        }

        else if(typeof value == 'string'){
            return value;
        }

        return '-';
    }, []); 
    return (
        <div className="bg-[#F2F2F5] px-6 py-4 rounded-lg">
            <p className="mb-2">{title}</p>
            <span className="font-bold text-xl">{valueFormatted}</span>
        </div>
    )
}