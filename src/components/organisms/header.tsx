import React from "react";

interface HeaderProps {
    children: React.ReactNode;
    isLong?:boolean
}
export default function Header ({children, isLong=true}:HeaderProps){

return (
    <header className={`${isLong && 'h-screen'} w-full bg-[#eee] flex flex-col`}>
        {children}
    </header>
);

}