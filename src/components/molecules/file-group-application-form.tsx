import {  Upload } from "lucide-react";

interface  FileGroupApplicationFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder: string;
}

export default function FileGroupApplicationForm({ label, placeholder, ...rest }: FileGroupApplicationFormProps) {
    return (
        <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2">{label} 

                <Upload size='16' />
            </label>
            <input  {...rest} accept="image/*,application/pdf"  required={true} placeholder={placeholder} type="file" 
                className=" placeholder:text-[#4A6B9C] file:text-[#4A6B9C] bg-[#F7FAFC] border-[#CFD9E8] border border-solid rounded-xl px-4 py-2" />
        </div>
    );
}