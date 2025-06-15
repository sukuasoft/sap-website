import Button from "@/components/atoms/button";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import Navbar from "@/components/organisms/navbar";

export default function Consulta() {
    return (
        <div>
            <Navbar />
            <Header isLong={false}>
                <div className="bg-[url('/images/header-image3.png')] bg-[#00000086] bg-blend-multiply bg-cover bg-center w-full 
        flex  flex-col justify-center items-center text-white h-[450px] pt-40 pb-20 px-20 ">
                    <div className="w-[550px]">
                        <h1 className="text-4xl font-bold text-center">Consulte aqui o seu resultado</h1>

                        <input placeholder='Insira seu número do BI' type="text" id="contact-email"
                            className=" placeholder:text-[#4A6B9C]
                            block w-full
                            my-6
                             text-black
                             text-center
                            bg-[#F7FAFC] rounded-xl px-4 py-2" />
                        <Button className="mx-auto block mb-4" roundedVariant="secondary">Consultar</Button>

                        <p>Sua inscrição está em análise. Volte mais tarde para ver as atualizações.</p>


                    </div>

                </div>
            </Header>

            <div className="mt-20">
                <Footer />

            </div>

        </div>
    )
}