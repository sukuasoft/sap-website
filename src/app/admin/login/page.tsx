import Image from 'next/image';
import icon from '@/assets/icon.png';
import LoginInput from '@/components/molecules/login-input';
import Button from '@/components/atoms/button';
import Link from 'next/link';

export default function Login() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <Image src={icon} width={100} alt='' />

            <div className='shadow-md rounded-xl px-10 py-6 mt-4 w-[450px]'>
                <h1 className='text-xl font-bold text-center mb-2'>Acesse sua conta</h1>
                <hr  className='border-[#eee] mb-6'/>
                <form className='flex flex-col gap-3 '>
                    <LoginInput type='email' label='Email' placeholder='Insira o seu email' />
                    <LoginInput type='password' label='Senha' placeholder='Insira a sua senha' />
                
                    <Link className='w-full block' href='/dashboard'>
                       <Button className='mt-2 w-full'>Entrar</Button></Link>
                </form>
            </div>
            <Link className='mt-6 hover:underline text-zinc-500 hover:text-zinc-700' href='/'>
            Voltar ao início
            </Link>

        </div>
    )
}