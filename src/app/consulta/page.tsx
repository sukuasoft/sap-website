'use client'

import { Candidatura } from "@/application/entities/candidatura";
import { buscarCandidaturaPorBIUseCase } from "@/application/usecases/candidatura";
import Button from "@/components/atoms/button";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import Navbar from "@/components/organisms/navbar";
import { Check } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface BuscaFormInputs {
    bi: string;
}

export default function Consulta() {

    const { register, handleSubmit } = useForm<BuscaFormInputs>();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [candidatura, setCandidatura] = useState<Candidatura | null>(null);
    const [buscaState, setBuscaState] = useState<'error' | 'success' | null>(null);
    const [buscaError, setBuscaError] = useState<string>('');

    async function onSubmit(data: BuscaFormInputs) {
        setIsLoading(true);
        try {
            const candidatura = await buscarCandidaturaPorBIUseCase(data.bi);
            if (candidatura) {

                setCandidatura(candidatura);
                setBuscaState('success');
                setBuscaError('');
            }
            else {
                toast.error('Nenhuma candidatura encontrada para o BI informado.');
                setCandidatura(null);
                setBuscaState('error');
                setBuscaError('Nenhuma candidatura encontrada para o BI informado.');
            }

        }
        catch (error: any) {
            toast.error(error.message || 'Erro ao submeter a consulta');
            setCandidatura(null);
            setBuscaState('error');
            setBuscaError(error.message || 'Erro ao submeter a consulta');
            console.error('Error submitting query:', error);
        }

        setIsLoading(false);
    }


    return (
        <div>
            <Navbar />
            <Header isLong={false}>
                <div className="bg-[url('/images/header-image3.png')] bg-[#00000086] bg-blend-multiply bg-cover bg-center w-full 
        flex  flex-col justify-center items-center text-white min-h-[450px] pt-40 pb-20 px-20 max-sm:px-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-[550px] max-w-full">
                        <h1 className="text-4xl font-bold text-center">Consulte aqui o seu resultado</h1>

                        <input {...register('bi')} required maxLength={14} placeholder='Insira seu número do BI' type="text" id="contact-email"
                            className=" placeholder:text-[#4A6B9C]
                            block w-full
                            my-6
                             text-black
                             text-center
                            bg-[#F7FAFC] rounded-xl px-4 py-2" />
                        <Button isLoading={isLoading} className="mx-auto block mb-4" roundedVariant="secondary">Consultar</Button>

                        {buscaState === 'error' && (
                            <p className="text-red-500 text-center">{buscaError}</p>
                        )}

                        {buscaState === 'success' && candidatura && (
                            <div className="bg-white text-black p-4  rounded-lg shadow-md">
                                <h2 className="text-xl font-bold mb-2 flex items-center gap-2">

                                    <div className="bg-green-500 px-0.5 py-0.5 rounded-full">
                                        <Check color="#ffffff" size={14} />
                                    </div>
                                    Resultado da Consulta</h2>
                                <p><strong>Nome:</strong> {candidatura.nome_completo}</p>
                                <p><strong>BI:</strong> {candidatura.bi}</p>
                                <p><strong>Status:</strong> {candidatura.status.charAt(0).toUpperCase() + candidatura.status.slice(1)}</p>
                                <p><strong>Data de Inscrição:</strong> {new Date(candidatura.created_at).toLocaleDateString()}</p>
                            </div>
                        )}


                    </form>

                </div>
            </Header>

            <div className="mt-20">
                <Footer />

            </div>

        </div>
    )
}