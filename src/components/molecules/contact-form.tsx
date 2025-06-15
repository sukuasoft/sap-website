import Button from "../atoms/button";

export default function  ContactForm (){
    return (
        <div className="flex flex-col items-start gap2 w-[550px]">
            <h1 className="text-xl font-bold mb-2">Contacto e Suporte</h1>
            <p>Para mais informações ou suporte, entre em contato conosco através do e-mail suporte@bolsas.com ou pelo telefone (11) 1234-5678.</p>

            <div className="flex flex-col gap-2 mb-6 mt-4 w-full">
                <label htmlFor="contact-email" className="font-[500]">Seu email</label>
                <input placeholder="Digite seu email" type="text" id="contact-email"
                 className=" placeholder:text-[#4A6B9C] bg-[#F7FAFC] border-[#CFD9E8] border border-solid rounded-xl px-4 py-2" />
            </div>

            <Button>Enviar</Button>
        </div>
    )
}