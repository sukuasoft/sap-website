import Link from "next/link";
import ContactForm from "../molecules/contact-form";
import {  Facebook, Instagram, Twitter, X } from "lucide-react";


type FooterProps = {
    showContactForm?:boolean;
}

export default function Footer ({showContactForm=true}:FooterProps){
    return (
        <footer className="px-20  max-sm:px-10 pb-10">
    <hr  className="border-[#1978E58C] mb-16"/>

            {showContactForm && <ContactForm />}

            <div className="text-[#0D6BF2] flex flex-col gap-4 mt-10 px-10">
                  <div className="flex justify-center gap-2">
                    <Link className='hover:underline' href='/'>Home</Link> |
                    <Link className='hover:underline' href='/consulta'>Consulta</Link> |
                    <Link className='hover:underline' href='/sobre'>Sobre</Link>
                </div>
                {/**
                <div className="flex justify-between">
                    <Link href='#'>Política de Privacidade</Link>
                    <Link href='#'>Termos de uso</Link>
                    <Link href='#'>Contacto</Link>
                </div>
                <div className="flex gap-4 mx-auto w-fit">
                    <Twitter />
                    <Facebook/>
                    <Instagram />
                </div>
                 */}

                <p className="text-center">© 2025 Scholarship Angola Program. Todos os direitos reservados.</p>
            </div>
            
        </footer>
    )
}