import Button from "@/components/atoms/button";
import EligibilityCriteriaItem from "@/components/molecules/eligibility-criteria-item";
import InputGroupApplicationForm from "@/components/molecules/input-group-application-form";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import Navbar from "@/components/organisms/navbar";
import { BookOpen, Calendar, DollarSign, FileText, GraduationCap, IdCard, Presentation, ScrollText } from "lucide-react";
import Link from "next/link";

export default function FazerCandidatura() {
    return (
        <div>
            <Navbar />
            <Header isLong={false}>
                <div className="bg-[url('/images/header-image2.png')] bg-[#00000069] bg-blend-multiply bg-cover bg-center w-full 
        flex  flex-col justify-center items-center text-white h-[450px] pt-40 pb-20 px-20 ">
                    <div className="w-[550px]">
                        <h1 className="text-4xl font-bold text-center">Transforme seu futuro com uma Bolsa de Estudos Exclusiva!</h1>
                        <div className="flex gap-2 text-xl mt-10 justify-center">
                            <Link href='/fazer-candidatura'>
                                <Button roundedVariant="secondary">Fazer Candidatura</Button>
                            </Link>
                            <Link href='/consulta'>
                                <Button roundedVariant="secondary" variant="secondary">Consultar Resultado</Button>
                            </Link>
                        </div>

                    </div>

                </div>
            </Header>

            <section className="bg-[#F4F4F4] px-20 py-20">
                <h1 className="text-4xl font-bold mb-2">Requisitos para Bolsas de Estudo</h1>
                <p className="text-[#4F7096] mb-6">Verifique se você atende aos critérios para se candidatar a bolsas de estudo.</p>

                <div className="flex">
                    <div>
                        <p className="font-bold text-lg mb-2">Critérios de Elegibilidade</p>
                        <div className="bg-[#F7FAFC] px-4 py-4  gap-4 flex flex-col">

                            <EligibilityCriteriaItem icon={<Calendar />} title="Idade" description="Ter entre 16 e 25 anos de idade" />
                            <EligibilityCriteriaItem icon={<DollarSign />} title="Renda" description="Renda familiar mensal de até R$ 3.000." />
                            <EligibilityCriteriaItem icon={<GraduationCap />} title="Matrícula" description="Estar matriculado em uma instituição de ensino reconhecida pelo MEC." />
                            <EligibilityCriteriaItem icon={<Presentation />} title="Notas" description="Média de notas igual ou superior a 7,0." />

                        </div>
                    </div>

                    <div>
                        <p className="font-bold text-lg mb-2">Documentos Necessários</p>

                        <div className="bg-[#F7FAFC]  px-4 py-4 gap-4  flex flex-col">
                            <EligibilityCriteriaItem icon={<IdCard />} title="Documentos de Identificação" description="Cópia do RG e CPF do candidato e dos responsáveis." />
                            <EligibilityCriteriaItem icon={<ScrollText />} title="Comporvante de Matrícula" description="Comprovante de matrícula atualizado." />
                            <EligibilityCriteriaItem icon={<FileText />} title="Comprovantes de Renda" description="Comprovantes de renda dos últimos três meses." />
                            <EligibilityCriteriaItem icon={<BookOpen />} title="Histórico Escolar" description="Histórico escolar completo." />


                        </div>
                    </div>
                </div>

                <h1 className="text-4xl font-bold mt-10">Submeter Candaditura</h1>
                <div className="grid grid-cols-2 gap-6">

                    <InputGroupApplicationForm label="Nome Completo" placeholder="Insira o seu nome completo" />
                    <InputGroupApplicationForm label="Cusro" placeholder="Insira o nome do seu curso" />
                    <InputGroupApplicationForm label="Email" placeholder="Insira seu email" />
                    <InputGroupApplicationForm label="Ano de Início" placeholder="Insira o ano de início do curso" />
                    <InputGroupApplicationForm label="Instituição de Ensino" placeholder="Insira o nome da sua instituição" />
                    <InputGroupApplicationForm label="Ano de Conlusão" placeholder="Insira o ano de conclusão do curso" />

                    <InputGroupApplicationForm label="Média Final" placeholder="Insira sua média final" />
                    <InputGroupApplicationForm label="Certificado" placeholder="Insira seu transcrito acadêmico" />

                    <InputGroupApplicationForm label="BI" placeholder="Insira seu BI" />

                </div>

                <Button className="w-full mt-10">Submeter</Button>
                <p className="text-[#4F7096] mt-8 text-center">Ao submeter, você concorda com nossos Termos de Serviço e Política de Privacidade.</p>

            </section>

            <div className="bg-[#F4F4F4]">
                <Footer />
            </div>
        </div>
    )
}