interface AboutDetailsItemProps {
    title:string;
    description:string;
}
export default function AboutDetailsItem ({title, description}:AboutDetailsItemProps){
    return (
        <div>
            <hr className="border-[#ffffff6e]" />
            <p className="mt-2 font-bold">{title}</p>
            <span className="text-sm">{description}</span>
        </div>
    )
}