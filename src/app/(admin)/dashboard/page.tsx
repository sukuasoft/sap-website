import Image from "next/image";
import Link from "next/link";
import icon from '@/assets/icon.png';
import { LogOut, Search, Sheet, User } from "lucide-react";
import SelectAdmin from "@/components/molecules/select-admin";
import Button from "@/components/atoms/button";


export default function Dashboard() {
    return (
        <div>
            <header className="bg-[#002B80] py-5 text-white">
                <nav className="flex items-center px-20 ">
                    <div className="flex gap-4 items-center">
                        <Link href='/'>
                            <Image src={icon} className=" brightness-0 invert" width={70} alt='' />
                        </Link>
                        <span className="font-bold">Dasboard</span>
                    </div>

                    <div className="flex gap-4 ml-auto items-center">
                        <div className="bg-[#eee] rounded-full w-fit px-2 py-2">
                            <User className="text-[#303030]" />
                        </div>

                        <Link className="text-red-500 flex items-center gap-1" href='/login'>
                            <LogOut />
                            Sair
                        </Link>
                    </div>


                </nav>
                <hr className="border-[#ffffff33] mt-4 mb-10" />

                <div className="px-20 ">
                    <div className="w-[550px]">
                        <h1 className="text-4xl font-bold mb-2">Gestão de Candidatos</h1>
                        <p>Visualize, filtre e gerencie dados de candidatos</p>
                    </div>
                </div>

            </header>

            <section className="px-20 py-10">

                <div className="w-[550px]">
                    <h1 className="text-xl font-bold mb-2">Filtros</h1>
                    <div className="flex gap-2  w-full mb-6 bg-[#F7FAFC] items-center border-[#CFD9E8] border border-solid rounded-xl px-4  py-2">
                        <Search className="text-[#4A6B9C]" size={18} />
                        <input
                            placeholder="Busque por nome ou email"
                            className=" placeholder:text-[#4A6B9C] " />


                    </div>
                    <div className="flex gap-4">
                        <SelectAdmin
                            placeholder="Selecione curso" label="Curso">
                            <option value="Engenharia Informática">Engenharia Informática</option>
                            <option value="Engenharia Química">Engenharia Química</option>
                        </SelectAdmin>


                        <SelectAdmin
                            placeholder="Selecione classe" label="Classe">
                            <option value="1º">1º</option>
                            <option value="2º">2º</option>
                            <option value="3º">3º</option>
                        </SelectAdmin>


                        <SelectAdmin
                            placeholder="Selecione localização" label="Localização">
                            <option value="Luanda">Luanda</option>
                            <option value="Huambo">Huambo</option>
                            <option value="Benguela">Benguela</option>
                        </SelectAdmin>


                    </div>
                    <div className="flex gap-4 mt-4">
                        <div className="flex gap-4 items-center">
                            Faixa etária:
                            <input type="range" className="accent-[#002B80]" />
                        </div>

                        <div className="flex gap-4 items-center">
                            Nota média:
                            <input type="range" className="accent-[#002B80]" />
                        </div>
                    </div>
                </div>

            </section>

            <section className="px-20 py-10">
                <div className="flex gap-2 mb-10">
                    <Button className="flex gap-2">
                        <Sheet />
                        Download Excel
                    </Button>
                    <Button className="bg-[#eee]" variant="custom">
                        Limpar filtros
                    </Button>
                </div>
                <table className="w-full">
                    <thead className=" border-solid border-[#aaa] border-b ">
                        <tr>
                            <th className="px-4 py-1">Nome</th>
                            <th className="px-4 py-1">Idade</th>
                            <th className="px-4 py-1">Email</th>
                            <th className="px-4 py-1">Telefone</th>
                            <th className="px-4 py-1">Localização</th>
                            <th className="px-4 py-1">Documento</th>
                            <th className="px-4 py-1">Classe</th>
                            <th className="px-4 py-1">Curso</th>
                            <th className="px-4 py-1">Média</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {[1,2,3, 4, 5, 6].map((i) => {
                            const styles= `${i % 2 == 0 && 'bg-[#eee]'} px-2 py-2`;
                            return (
                                <tr key={i}>
                                    <td className={styles}>Sebastiao</td>
                                    <td className={styles}>19 anos</td>
                                    <td className={styles}>sdsd@gmail.com</td>
                                    <td className={styles}>943435435</td>
                                    <td className={styles}>Luanda</td>
                                    <td className={styles}>020333501HO056</td>
                                    <td className={styles}>1º</td>
                                    <td className={styles}>Informatica</td>
                                    <td className={styles}>19v</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
}