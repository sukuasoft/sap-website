interface BenefitsCardProps {
    imageUrl: string;
    title:string;
    description:string;
    icon:React.ReactNode;
}
export default function BenefitsCard({ imageUrl, title, description, icon }: BenefitsCardProps) {
    return (
        <div className={`h-[500px] bg-cover bg-center flex flex-col py-4 px-2 rounded-2xl`}
            style={{ backgroundImage: `url(${imageUrl})` }}>

            <div className="w-[300px]   mt-auto p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                <div className="flex flex-col items-start gap-2">
                   {icon}
                    <div>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <p className="text-sm text-white/80">
                          {description}
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
}