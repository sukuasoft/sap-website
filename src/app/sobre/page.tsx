import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import Navbar from "@/components/organisms/navbar";
import Image from "next/image";
import organization from '@/assets/organization.png';
import PrincipleItem from "@/components/molecules/principle-item";
import { Lamp, Shield, ShieldCheck, Trophy, Users } from "lucide-react";
import ImpactItem from "@/components/molecules/impact-item";

export default function Sobre() {
    return (
        <div>
            <Navbar />

            <Header isLong={false}>
                <div className="bg-[url('/images/header-image3.png')]  bg-[#00000069] bg-blend-multiply  bg-cover bg-center w-full 
        flex  flex-col justify-end text-white h-[450px]  py-20 px-20 ">
                    <div className="w-[550px]">
                        <h1 className="text-4xl font-bold mb-2">Transforme seu futuro com uma Bolsa de Estudos Exclusiva!</h1>

                    </div>

                </div>
            </Header>


            <section className="px-20 py-20">
                <div className="w-[550px]  mb-8">
                      <h1 className="text-4xl font-bold mb-4">Princípios Fundamentais</h1>
                <p>Nossa organização é construída sobre uma base de valores fortes que orientam nosso trabalho e interações.</p>
                </div>

                <div className="flex gap-4 mb-20">
                    <PrincipleItem title='Integridade' description='Mantemos os mais altos padrões éticos em todas as nossas ações.'
                    icon={<ShieldCheck />} />

                     <PrincipleItem title='Excelência' description='Nós buscamos a excelência em todos os aspectos dos nossos programas e serviços.'
                    icon={<Trophy />} />

                      <PrincipleItem title='Comunidade' description='Nós promovemos uma comunidade solidária e inclusiva de acadêmicos e líderes.'
                    icon={<Users />} />

                       <PrincipleItem title='Inovação' description='Abraçamos a inovação e a melhoria contínua para atender às necessidades em evolução da nossa comunidade.'
                    icon={<Lamp />} />
                </div>


                <h1 className="text-xl font-bold mb-8">Nosso impacto</h1>
                <div className="flex gap-4">
                    <ImpactItem title='Bolsas de estudo concedidas' value={250}/>
                    <ImpactItem title='Estudantes apoiados' value={500}/>
                    <ImpactItem title='Eventos comunitários' value={500}/>
                </div>

              

            </section>

            <section className="px-20 pb-20">
                <h1 className="text-xl font-bold mb-8">Sobre a organização</h1>

                <div className="flex items-center gap-4">
                    <Image src={organization} width={300} alt='' />
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold mb-3">Nossa missão</h1>
                        <p>Dedicamo-nos a capacitar futuros líderes por meio de oportunidades educacionais. Nossa missão é proporcionar acesso a educação e recursos de qualidade, fomentando uma comunidade de acadêmicos comprometidos em causar um impacto positivo.</p>
                    </div>

                </div>


            </section>


            <Footer />
        </div>
    );
}