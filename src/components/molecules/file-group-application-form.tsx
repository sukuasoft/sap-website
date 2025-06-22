'use client'

import {  Check, Upload } from "lucide-react";
import { useState } from "react";

interface  FileGroupApplicationFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder: string;
}

export default function FileGroupApplicationForm({ label, placeholder, ...rest }: FileGroupApplicationFormProps) {
    const [selected, setSelected] = useState<boolean>(false);
    return (
        <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2">{label} 
                {selected ?   <div className="bg-green-500 px-0.5 py-0.5 rounded-full">
                                        <Check color="#ffffff" size={14} />
                                    </div>:   <Upload size='16' />}
              
            </label>
            <input  {...rest} onChange={(ev)=>{setSelected((ev.target.files?.length || 0 ) > 0)}} accept="image/*,application/pdf"  required={true} placeholder={placeholder} type="file" 
                className=" placeholder:text-[#4A6B9C] file:text-[#4A6B9C] bg-[#F7FAFC] border-[#CFD9E8] border border-solid rounded-xl px-4 py-2" />
        </div>
    );
}