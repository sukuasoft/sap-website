interface LoginInputProps  extends React.InputHTMLAttributes<HTMLInputElement> {
    label:string;
    placeholder:string;
    type?:string;
}
export default function LoginInput ({label, placeholder, type='text', ...rest}:LoginInputProps){
    return (
        <div className="flex flex-col gap-1">
            <label>{label}</label>

            <input required className="bg-[#eee] px-4 py-2 rounded-xl" type={type} placeholder={placeholder}  {...rest}/>
        </div>
    )
}