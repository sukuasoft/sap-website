interface PrincipleItemProps {
    title: string,
    description: string,
    icon: React.ReactNode,
}
export default function PrincipleItem({ title, description, icon }: PrincipleItemProps) {
    return (
        <div className="w-[300px] aspect-[2/1] max-w-full   mt-auto p-4 rounded-xl border border-solid border-[#eee]">
            <div className="flex flex-col items-start gap-2">
                {icon}
                <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-black/80">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}