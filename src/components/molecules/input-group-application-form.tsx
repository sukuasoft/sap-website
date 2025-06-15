interface InputGroupApplicationFormProps {
    label:string;
    placeholder:string;
}

export default function InputGroupApplicationForm ({label,placeholder}:InputGroupApplicationFormProps){
    return (
        <div className="flex flex-col gap-1">
            <label>{label}</label>
     <input placeholder={placeholder} type="text" id="contact-email"
                 className=" placeholder:text-[#4A6B9C] bg-[#F7FAFC] border-[#CFD9E8] border border-solid rounded-xl px-4 py-2" />

        </div>
    );
}