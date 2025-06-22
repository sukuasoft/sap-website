'use client';


import Image from 'next/image';
import icon from '@/assets/icon.png';
import LoginInput from '@/components/molecules/login-input';
import Button from '@/components/atoms/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from '@/services/auth';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';


interface LoginFormInputs {
    email: string;
    password: string;
}
export default function Login() {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { register, handleSubmit } = useForm<LoginFormInputs>();

    async function onSubmit(data: LoginFormInputs) {
        setIsLoading(true);
        try {
            await signIn(data.email, data.password);
            toast.success('Login realizado com sucesso!');
            router.replace('/');
        } catch (error: any) {
            toast.error(error.message || 'Erro ao fazer login, verifique suas credenciais');
            console.error('Error signing in:', error);

        }
        setIsLoading(false);
    }


    return (
        <div className="flex flex-col justify-center items-center w-full h-screen">
            <Image src={icon} width={100} alt='' />

            <div className='shadow-md rounded-xl px-10 py-6 mt-4 w-[450px] max-w-full'>
                <h1 className='text-xl font-bold text-center mb-2'>Acesse sua conta</h1>
                <hr className='border-[#eee] mb-6' />
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 '>
                    <LoginInput {...register('email')} type='email' label='Email' placeholder='Insira o seu email' />
                    <LoginInput {...register('password')} type='password' label='Senha' placeholder='Insira a sua senha' />

                    <Button isLoading={isLoading} className='mt-2 w-fit mx-auto'>Entrar</Button>
                </form>
            </div>

        </div>
    )
}