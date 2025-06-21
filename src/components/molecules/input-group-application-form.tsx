import { HTMLInputTypeAttribute } from "react";

interface InputGroupApplicationFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    placeholder: string;
    type?: 'text' | 'email' | 'number';
}

export default function InputGroupApplicationForm({ label, placeholder, type, ...rest }: InputGroupApplicationFormProps) {
    return (
        <div className="flex flex-col gap-1">
            <label>{label}</label>
            <input {...rest}   required={true}   placeholder={placeholder} type={type}
                className=" placeholder:text-[#4A6B9C] bg-[#F7FAFC] border-[#CFD9E8] border border-solid rounded-xl px-4 py-2" />
        </div>
    );
}