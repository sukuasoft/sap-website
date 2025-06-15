import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'custom',
    roundedVariant?: 'primary' | 'secondary'
    
}
export default function Button ({children, variant='primary', roundedVariant='primary',className, ...props}:ButtonProps){
    return (
        <button className={`${variant == 'primary' && 'text-white bg-blue-500 hover:bg-blue-600'}
        ${variant == 'secondary' && 'text-black bg-white hover:bg-zinc-100'}
       ${roundedVariant == 'primary' && 'rounded-lg'} 
        ${roundedVariant == 'secondary' && 'rounded-3xl'}   px-4 py-2 text-sm ${className}`} {...props}>
            {children}
        </button>
    )
}