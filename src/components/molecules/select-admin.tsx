interface SelectAdminProps {
    label: string
    children: React.ReactNode;
    placeholder: string
}
export default function SelectAdmin({ label, children, placeholder }: SelectAdminProps) {
    return (
        <div className="flex flex-col gap-2  w-full">
            <label className="font-[500]">{label}</label>
            <select
                className=" placeholder:text-[#4A6B9C] bg-[#F7FAFC] border-[#CFD9E8] border border-solid rounded-xl px-4 py-2" >
                <option value="">{placeholder}</option>
                {children}
            </select>
        </div>
    )
}