'use client';

import { useState } from "react";
import Button from "../atoms/button";
import { useForm } from "react-hook-form";
import { addNewsletterUseCase } from "@/application/usecases/newsletter";
import toast from "react-hot-toast";


interface ContactFormInputs {
    email: string;
}
export default function ContactForm() {

    const { register, reset,handleSubmit } = useForm<ContactFormInputs>();

    const [isLoading, setIsLoading] = useState<boolean>(false);


   async function onSubmit(data: ContactFormInputs) {
        setIsLoading(true);
        try{
           await addNewsletterUseCase(data.email);
           toast.success('Email foi adicionado com sucesso à nossa lista de contatos!');
           reset();
        } catch (error: any) {
            toast.error(error.message || 'Erro ao enviar o formulário');
        }
        setIsLoading(false);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap2 w-[550px]">
            <h1 className="text-xl font-bold mb-2">Contacto e Suporte</h1>
            <p>Para mais informações ou suporte, entre em contato conosco através do e-mail geral@sap.ao</p>

            <div className="flex flex-col gap-2 mb-6 mt-4 w-full">
                <label htmlFor="contact-email" className="font-[500]">Seu email</label>
                <input {...register('email')} required placeholder="Digite seu email" type="email" id="contact-email"
                    className=" placeholder:text-[#4A6B9C] bg-[#F7FAFC] border-[#CFD9E8] border border-solid rounded-xl px-4 py-2" />
            </div>

            <Button isLoading={isLoading}>Enviar</Button>
        </form>
    )
}