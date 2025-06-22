'use client';
import FileGroupApplicationForm from "@/components/molecules/file-group-application-form";
import InputGroupApplicationForm from "@/components/molecules/input-group-application-form";
import Button from "@/components/atoms/button"
import { useForm } from "react-hook-form";
import { fazerCandidaturaUseCase } from "@/application/usecases/candidatura";
import { useState } from "react";
import toast from "react-hot-toast";
import { CheckCircle } from "lucide-react";



type FazerCandidaturaFormInputs = {
    nomeCompleto: string;
    idade: string;
    bi: string;
    telefone: string;
    email: string;
    instituicaoEnsino: string;
    curso: string;
    anoInicio: string;
    anoConclusao: string;
    mediaFinal: string;
    rendaFamiliarMensal: number;
    comprovanteMatricula: FileList;
    documentoIdentificacao: FileList;
    comprovanteRenda: FileList;
    certificadoHistoricoEscolar: FileList;

}



export default function ApplicationForm() {
    const { register, reset, handleSubmit } = useForm<FazerCandidaturaFormInputs>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [submetted, setSubmitted] = useState<boolean>(false);

    async function onSubmit(data: FazerCandidaturaFormInputs) {

        setIsLoading(true);
        try {
            await fazerCandidaturaUseCase({
                ...data,
                anoConclusao: parseInt(data.anoConclusao),
                anoInicio: parseInt(data.anoInicio.toString()),
                idade: parseInt(data.idade.toString()),
                mediaFinal: parseFloat(data.mediaFinal.toString()),
                rendaFamiliarMensal: parseFloat(data.rendaFamiliarMensal.toString()),
                comprovanteMatricula: data.comprovanteMatricula[0],
                documentoIdentificacao: data.documentoIdentificacao[0],
                comprovanteRenda: data.comprovanteRenda[0],
                certificadoHistoricoEscolar: data.certificadoHistoricoEscolar[0]
            });

            setSubmitted(true);
            reset();

            toast.success('Candidatura submetida com sucesso!');
        }
        catch (error: any) {
            toast.error(error.message || 'Erro ao submeter a candidatura. Por favor, tente novamente.');
        }
        setIsLoading(false);
    }

    return (
        <>

            <form id='aplicar' onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-4xl font-bold mt-10 mb-6">Submeter Candaditura</h1>
                <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">

                    <InputGroupApplicationForm {...register('nomeCompleto')} label="Nome Completo" placeholder="Insira o seu nome completo" />
                    <InputGroupApplicationForm {...register('idade')} min={16} max={25} type="number" label="Idade" placeholder="Insira a sua Idade" />
                    <InputGroupApplicationForm {...register('bi')} minLength={14} maxLength={14} label="BI" placeholder="Insira seu número de BI" />
                    <InputGroupApplicationForm {...register('telefone')} minLength={9} maxLength={9} label="Telefone" placeholder="Insira seu número de telefone" />
                    <InputGroupApplicationForm {...register('email')} type="email" label="Email" placeholder="Insira seu email" />
                    <InputGroupApplicationForm {...register('instituicaoEnsino')} label="Instituição de Ensino" placeholder="Insira o nome da sua instituição" />
                    <InputGroupApplicationForm {...register('curso')} label="Curso" placeholder="Insira o nome do seu curso" />
                    <InputGroupApplicationForm {...register('anoInicio')} min={1900} max={2999} type="number" label="Ano de Início" placeholder="Insira o ano de início do curso" />
                    <InputGroupApplicationForm {...register('anoConclusao')} min={1900} max={2999} type="number" label="Ano de Conlusão" placeholder="Insira o ano de conclusão do curso" />
                    <InputGroupApplicationForm {...register('mediaFinal')} type='number' label="Média Final" placeholder="Insira sua média final" />
                    <InputGroupApplicationForm {...register('rendaFamiliarMensal')} type='number' label="Renda Familiar Mensal" placeholder="Insira a renda familiar mensal" />

                    <FileGroupApplicationForm {...register('documentoIdentificacao')} label="Documento de Identificação" placeholder="Anexe o seu documento de identificação" />
                    <FileGroupApplicationForm {...register('comprovanteMatricula')} label="Comprovante de Matrícula" placeholder="Anexe o comprovante de matrícula" />
                    <FileGroupApplicationForm {...register('comprovanteRenda')} label="Comprovante de Renda" placeholder="Anexe o comprovante de renda" />
                    <FileGroupApplicationForm {...register('certificadoHistoricoEscolar')} label="Certificado/Histórico Escolar" placeholder="Anexe o certificado ou histórico escolar" />
                </div>

                <Button isLoading={isLoading} className="w-fit mt-10 mx-auto">Submeter</Button>
                <p className="text-[#4F7096] mt-8 text-center">Ao submeter, você concorda com nossos Termos de Serviço e Política de Privacidade.</p>
            </form>

            {
                submetted &&

                <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center">
                    <div className={`bg-white p-10 rounded-lg shadow-lg flex flex-col w-[350px] max-w-full items-center gap-2 `}>
                        <div className="bg-green-500 px-2 py-2 rounded-full">
                            <CheckCircle color="#ffffff" size={30} />
                        </div>
                        <h2 className="text-xl font-bold text-center">Candidatura Submetida!</h2>
                        <p className="text-zinc-700 mb-2 text-center">Obrigado por se candidatar ao programa de bolsas de estudo. Sua candidatura foi recebida com sucesso.</p>
                        <p className="text-zinc-500 text-justify">Você receberá uma confirmação por e-mail em breve.</p>
                    </div>
                </div>

            }


        </>
    )
}