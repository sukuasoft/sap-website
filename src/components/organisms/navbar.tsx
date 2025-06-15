import icon from '@/assets/icon.png';
import Image from 'next/image';
import Button from '../atoms/button';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-white z-[99999] px-20 py-6 flex fixed top-0 left-0 items-center w-full">
            <Link href='/'>
                <Image src={icon} width={70} alt='' />
            </Link>

            <div className='ml-auto flex items-center gap-4'>
                <Link href='/'>Home</Link>
                <Link href='/consulta'>Consulta</Link>
                <Link href='/sobre'>Sobre</Link>

                <Link href='/fazer-candidatura'>

                    <Button roundedVariant='secondary'>Candidatar-se</Button>
                </Link>
            </div>

        </nav>
    )
}