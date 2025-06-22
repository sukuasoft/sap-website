

interface EligibilityCriteriaItemPros {
    icon: React.ReactNode,
    title:string,
    description:string
}
export default function EligibilityCriteriaItem ({icon, title, description}:EligibilityCriteriaItemPros){
return (  
    <div className="flex min-h-[60px] gap-4">
        <div className="bg-[#eee] flex-none flex items-center justify-center h-[60px] w-[60px]  rounded-xl">
            {icon}
        </div>

        <div className="flex flex-col gap-0.5">
            <p className="font-bold">{title}</p>
            <span className="text-[#4F7096] text-sm">{description}</span>
        </div>
    </div>
)
}