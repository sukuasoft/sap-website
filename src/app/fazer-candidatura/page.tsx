import Button from "@/components/atoms/button";
import ApplicationSection from "@/components/organisms/application-section";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import Navbar from "@/components/organisms/navbar";
import Link from "next/link";

export default function FazerCandidatura() {
    return (
        <div>
            <Navbar />
            <Header isLong={false}>
                <div className="bg-[url('/images/header-image2.png')] bg-[#00000069] bg-blend-multiply bg-cover bg-center w-full 
        flex  flex-col justify-center items-center text-white min-h-[450px] pt-40 pb-20 px-20 max-sm:px-10">
                    <div className="w-[550px] max-w-full">
                        <h1 className="text-4xl max-md:text-2xl font-bold text-center">Transforme seu futuro com uma Bolsa de Estudos Exclusiva!</h1>
                        <div className="flex gap-2 text-xl mt-10 justify-center max-sm:flex-wrap">
                            <Link href='#aplicar'>
                                <Button roundedVariant="secondary">Fazer Candidatura</Button>
                            </Link>
                            <Link href='/consulta'>
                                <Button roundedVariant="secondary" variant="secondary">Consultar Resultado</Button>
                            </Link>
                        </div>

                    </div>

                </div>
            </Header>

            <ApplicationSection />

            <div className="bg-[#F4F4F4]">
                <Footer />
            </div>
        </div>
    )
}