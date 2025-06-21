import { ButtonHTMLAttributes } from "react";
import { ClipLoader } from "react-spinners";

interface ButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'custom',
    roundedVariant?: 'primary' | 'secondary',
    isLoading?: boolean
}
export default function Button ({children, variant='primary',isLoading, roundedVariant='primary',className, ...props}:ButtonProps){
    return (
        <button  disabled={isLoading} className={`${variant == 'primary' && 'text-white bg-blue-500 hover:bg-blue-600'}
        ${variant == 'secondary' && 'text-black bg-white hover:bg-zinc-100'}
       ${roundedVariant == 'primary' && 'rounded-lg'} 
        ${roundedVariant == 'secondary' && 'rounded-3xl'}  flex items-center gap-2  px-4 py-2 text-sm ${className} ${isLoading && 'bg-zinc-300 pointer-events-none'}`} {...props}>
            {isLoading && <ClipLoader color="#ffffff" size={12} />}
            {children}
        </button>
    )
}