'use client';
import Image from "next/image";
import Link from "next/link";
import icon from '@/assets/icon.png';
import { Cloud, CloudDownload, Download, DownloadCloud, File, FileSpreadsheet, LogOut, Search, Sheet, User } from "lucide-react";
import SelectAdmin from "@/components/molecules/select-admin";
import Button from "@/components/atoms/button";
import { signOut } from "@/services/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useGetCandidaturas } from "@/services/queries/candidatura";
import { useMemo, useState } from "react";
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver';


export default function Dashboard() {

    const router = useRouter();

    const { data: candidaturas, } = useGetCandidaturas();

    const [search, setSearch] = useState<string>('');

    const candidaturasFiltered = useMemo(() => {

        return (candidaturas || []).filter(candidatura => {
            const nome = candidatura.nome_completo.toLowerCase();
            const bi = candidatura.bi.toLowerCase();
            const searchTerm = search.toLowerCase();

            return nome.includes(searchTerm) || bi.includes(searchTerm);
        })

    }, [candidaturas, search]);

    const [exporting, setExporting] = useState<boolean>(false);

    async function exportToExcel() {
        setExporting(true);


        const header = [
            'Nome', 'BI', 'Idade', 'Telefone', 'Email',
            'Instuição', 'Curso', 'Ano de Início', 'Ano de Conclusão', 'Média Final',
            'Renda Familiar Mensal', 'Estado', 'Submetido em',

        ]

        const body = candidaturasFiltered.map(item => [
            item.nome_completo,
            item.bi,
            item.idade,
            item.telefone,
            item.email,
            item.instituicao_ensino,
            item.curso,
            item.ano_inicio,
            item.ano_conclusao,
            item.media_final,
            item.renda_familiar_mensal,
            item.status.charAt(0).toLocaleUpperCase() +
            item.status.slice(1),
            new Date(item.created_at).toLocaleDateString()

        ]);

        // Junta tudo
        const worksheetData = [header, ...body]

        // Cria a planilha
        const worksheet = XLSX.utils.aoa_to_sheet(worksheetData)
        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Candidaturas')

        // Converte e exporta
        const excelBuffer = XLSX.write(workbook, {
            bookType: 'xlsx',
            type: 'array',
        })

        const blob = new Blob([excelBuffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        })

        saveAs(blob, 'Candidaturas.xlsx')

        setExporting(false);


    }




    async function logout() {
        try {
            await signOut();
            router.replace('/login');
        } catch (error) {

            console.error('Error signing out:', error);
            toast.error('Falha ao fazer logout');

        }

    }
    return (
        <div>
            <header className="bg-[#002B80] py-5 text-white">
                <nav className="flex items-center px-20 max-sm:px-10">
                    <div className="flex gap-4 items-center">
                        <Link href='/'>
                            <Image src={icon} className=" brightness-0 invert" width={70} alt='' />
                        </Link>
                        <span className="font-bold max-sm:hidden">Dashboard</span>
                    </div>

                    <div className="flex gap-2 ml-auto items-center">
                        <div className="bg-[#eee] rounded-full w-fit px-2 py-2 max-sm:hidden">
                            <User className="text-[#303030]" />
                        </div>

                        <button type='button' onClick={logout} className="text-red-500
                         hover:bg-red-100 px-4 py-2 rounded-lg
                        cursor-pointer flex items-center gap-1">
                            <LogOut />
                            Sair
                        </button>
                    </div>


                </nav>
                <hr className="border-[#ffffff33] mt-4 mb-10" />

                <div className="px-20 max-sm:px-10">
                    <div className="w-[550px] max-w-full">
                        <h1 className="text-4xl font-bold mb-2">Gestão de Candidatos</h1>
                        <p>Visualize, filtre e gerencie dados de candidatos</p>
                    </div>
                </div>

            </header>

            <section className="px-20 max-sm:px-10 pt-10">

                <div className="w-[550px] max-w-full">
                    <h1 className="text-xl font-bold mb-2">Filtros</h1>
                    <div className="flex gap-2  w-full mb-6 bg-[#F7FAFC] items-center border-[#CFD9E8] border border-solid rounded-xl px-4  py-2">
                        <Search className="text-[#4A6B9C]" size={18} />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Busque por nome ou BI"
                            className=" placeholder:text-[#4A6B9C] " />

                    </div>
                    <div className="flex gap-4">
                        {/**
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
 */}

                    </div>
                    {/**
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
                     */}
                </div>

            </section>

            <section className="px-20 max-sm:px-10 pb-10">
                <div className="flex gap-2 mb-4 max-md:flex-wrap">
                    <Button isLoading={exporting} onClick={exportToExcel} className="flex gap-2">
                        <FileSpreadsheet />
                        Download Excel
                    </Button>
                    <Button onClick={() => {
                        setSearch('');
                    }} className="bg-[#eee] cursor-pointer" variant="custom">
                        Limpar filtros
                    </Button>
                </div>
                <div className="overflow-x-auto w-full">
                <table>
                    <thead className=" bg-[#000] text-white ">
                        <tr>
                            {
                                ['Nome', 'BI', 'Idade', 'Telefone', 'Email',
                                    'Instuição', 'Curso', 'Ano de Início', 'Ano de Conclusão', 'Média Final',
                                    'Renda Familiar Mensal', 'Estado', 'Submetido em', 'Comprovante de Matrícula', 'Documento de Identificação', 'Comprovante de Renda', 'Certificado/Histórico Escolar'
                                ].map((header, index) => (
                                    <th key={index} className="px-4 py-1 border-solid border-r border-[#303030]">{header}</th>
                                ))
                            }

                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {candidaturasFiltered.map((candidatura, index) => {
                            const styles = `${index % 2 == 0 && 'bg-[#eee]'} px-2 py-2 border-solid border-r border-l border-[#aaa]`;
                            return (
                                <tr key={candidatura.id}>
                                    <td className={styles}>{candidatura.nome_completo}</td>
                                    <td className={styles}>{candidatura.bi}</td>
                                    <td className={styles}>{candidatura.idade} anos</td>
                                    <td className={styles}>{candidatura.telefone}</td>
                                    <td className={styles}>{candidatura.email}</td>
                                    <td className={styles}>{candidatura.instituicao_ensino}</td>
                                    <td className={styles}>{candidatura.curso}</td>
                                    <td className={styles}>{candidatura.ano_inicio}</td>
                                    <td className={styles}>{candidatura.ano_conclusao}</td>
                                    <td className={styles}>{candidatura.media_final} valores</td>
                                    <td className={styles}>{candidatura.renda_familiar_mensal} Kz</td>
                                    <td className={styles}>{candidatura.status.charAt(0).toLocaleUpperCase() +
                                        candidatura.status.slice(1)}</td>
                                    <td className={styles}>{new Date(candidatura.created_at).toLocaleDateString()}</td>
                                    <td className={styles}>
                                        <Link href={candidatura.comprovante_matricula_url} target="_blank" rel="noopener noreferrer">
                                            <CloudDownload />
                                        </Link>
                                    </td>

                                    <td className={styles}>
                                        <Link href={candidatura.documento_identificacao_url} target="_blank" rel="noopener noreferrer">
                                            <CloudDownload />
                                        </Link>
                                    </td>

                                    <td className={styles}>
                                        <Link href={candidatura.comprovante_renda_url} target="_blank" rel="noopener noreferrer">
                                            <CloudDownload />
                                        </Link>
                                    </td>

                                    <td className={styles}>
                                        <Link href={candidatura.certificado_historico_escolar_url} target="_blank" rel="noopener noreferrer">
                                            <CloudDownload />
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
            </section>
        </div>
    );
}