import { BookOpen, Calendar, DollarSign, FileText, GraduationCap, IdCard, Presentation, ScrollText } from "lucide-react";
import EligibilityCriteriaItem from "@/components/molecules/eligibility-criteria-item";
import ApplicationForm from "./application-form";
;

export default function ApplicationSection() {
    return (
        <section className="bg-[#F4F4F4] px-20 py-20">
            <h1 className="text-4xl font-bold mb-2">Requisitos para Bolsas de Estudo</h1>
            <p className="text-[#4F7096] mb-6">Verifique se você atende aos critérios para se candidatar a bolsas de estudo.</p>

            <div className="flex justify-center">
                <div>
                    <p className="font-bold text-lg mb-2">Critérios de Elegibilidade</p>
                    <div className="bg-[#F7FAFC] px-4 py-4  gap-4 flex flex-col">

                        <EligibilityCriteriaItem icon={<Calendar />} title="Idade" description="Ter entre 16 e 25 anos de idade" />
                        <EligibilityCriteriaItem icon={<DollarSign />} title="Renda" description="Renda familiar mensal de até 300.000 Kz" />
                        <EligibilityCriteriaItem icon={<GraduationCap />} title="Matrícula" description="Estar matriculado em uma instituição de ensino reconhecida pelo MEC." />
                        <EligibilityCriteriaItem icon={<Presentation />} title="Notas" description="Média de notas igual ou superior a 14 valores." />

                    </div>
                </div>

                <div>
                    <p className="font-bold text-lg mb-2">Documentos Necessários</p>

                    <div className="bg-[#F7FAFC]  px-4 py-4 gap-4  flex flex-col">
                        <EligibilityCriteriaItem icon={<IdCard />} title="Documentos de Identificação" description="Cópia do BI do candidato" />
                        <EligibilityCriteriaItem icon={<ScrollText />} title="Comporvante de Matrícula" description="Comprovante de matrícula atualizado." />
                        <EligibilityCriteriaItem icon={<FileText />} title="Comprovantes de Renda" description="Comprovantes de renda dos últimos três meses." />
                        <EligibilityCriteriaItem icon={<BookOpen />} title="Certificado/Histórico Escolar" description="Certificado ou histórico escolar completo." />


                    </div>
                </div>
            </div>

            <ApplicationForm />
        </section>
    )
}