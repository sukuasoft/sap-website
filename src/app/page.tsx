import Button from "@/components/atoms/button";
import AboutDetailsItem from "@/components/molecules/about-details-item";
import BenefitsCard from "@/components/molecules/benefits-card";
import FaqItem from "@/components/molecules/faq-item";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import Navbar from "@/components/organisms/navbar";
import { Globe, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Header>
        <div className="bg-[url('/images/header-image1.png')] bg-cover bg-center flex-1 w-full 
        flex  flex-col justify-end text-white py-20 px-20 max-sm:px-10">
          <div className="w-[550px] max-w-full max-sm:text-center">
            <h1 className="text-4xl max-md:text-2xl  font-bold mb-2">Transforme seu futuro com uma Bolsa de Estudos Exclusiva!</h1>
            <p>Descubra oportunidades de bolsas de estudo para estudantes talentosos do Brasil e de países de língua portuguesa. Invista no seu futuro acadêmico e profissional com o nosso programa de bolsas.</p>
            <div className="flex gap-2 max-md:flex-wrap text-xl mt-4 max-sm:justify-center">
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

      <section className="px-20 py-20 max-sm:px-10">
        <span className="bg-[#E8EDF2] text-[#0D141C]  px-6 py-3 font-[700] w-fit">Fazer Candidatura</span>
        <div className="w-[550px]  mt-6 max-w-full">
          <h1 className="text-4xl max-sm:text-2xl font-bold mb-2 text-[#0B0032]">Transforme seu futuro com uma Bolsa de Estudos Exclusiva!</h1>
          <p className="text-[#0B0032]">Descubra oportunidades de bolsas de estudo para estudantes talentosos do Brasil e de países de língua portuguesa. Invista no seu futuro acadêmico e profissional com o nosso programa de bolsas.</p>
        </div>

        <div className="flex mt-25 gap-4 justify-center max-md:flex-wrap">
          <BenefitsCard icon={<GraduationCap />} description="Acesso a bolsas de estudo em universidades de renome, com foco em cursos de alta demanda no mercado." title="Oportunidades Exclusivas" imageUrl="/images/benefits-image1.png" />

          <div className="-translate-y-[50px] max-md:translate-y-0">
            <BenefitsCard icon={<Users />} description="Mentores experientes acompanham os bolsistas, oferecendo orientação e suporte para o desenvolvimento de suas carreiras." title="Mentoria Personalizada" imageUrl="/images/benefits-image2.png" />
          </div>
          <BenefitsCard icon={<Globe />} title="Comunidade Global" description="Integração em uma rede global de estudantes e profissionais, promovendo o intercâmbio de ideias e oportunidades." imageUrl="/images/benefits-image3.png" />
        </div>
      </section>

      <section className="px-20 py-20 max-sm:px-10 flex">
        <div className="bg-[url('/images/about-image1.png')] px-10 pt-10 pb-5 text-white bg-[#0000009a]  bg-blend-multiply  w-full bg-cover bg-center flex flex-col rounded-xl">
          <div className="w-[450px] max-w-full">
            <h1 className="font-bold text-2xl max-sm:text-xl mb-2">Sobre a Bolsa de Estudo</h1>
            <p className="font-[400]">A Bolsa de Estudo Éxito é uma iniciativa que visa apoiar estudantes talentosos e dedicados, mas com recursos financeiros limitados, a alcançar seus objetivos acadêmicos. </p>
            <div className="grid grid-cols-2 mt-20 max-sm:mt-10 gap-6 max-sm:grid-cols-1">
                <AboutDetailsItem title="Mensalidade" description="Cobre integralmente as mensalidades do curso escolhido." />
                <AboutDetailsItem title="Transporte" description="Auxílio para despesas com transporte." />
                <AboutDetailsItem title="Alimentação" description="Subsídio para gastos com alimentação." />
                <AboutDetailsItem title="Materiais" description="Recursos para compra de livros e materiais didáticos." />
            </div>
        
          </div>
              <Link className="mt-6 ml-auto border border-white border-solid rounded-lg
            px-4 py-2 hover:bg-white hover:text-black block" href='/fazer-candidatura'>
            Fazer candidatura
            </Link>
        </div>
      </section>

      <section className="px-20 max-sm:px-10 py-20">
            <h1 className="text-4xl max-sm:text-2xl font-bold mb-8">Perguntas frequentes</h1>

            <div className="flex flex-col gap-3">
              <FaqItem title="Quem pode se candidatar?">
                Estudantes com média acadêmica igual ou superior a 14 valores
              </FaqItem>
              <FaqItem title="Quais os critérios de seleção?">
                Os critérios de seleção incluem análise de desempenho acadêmico, situação financeira e potencial de impacto social.
              </FaqItem>

              <FaqItem title="Como é o processo de aplicação?">
                O processo de aplicação envolve o preenchimento de um formulário online, envio de documentos comprobatórios e uma entrevista com a equipe de seleção.
              </FaqItem>
            </div>


      </section>
      <Footer />
    </div>
  );
}