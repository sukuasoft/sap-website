'use server';

import StorageService from "@/services/storage";
import CandadituraService from "../services/candidatura";
import { Candidatura } from "../entities/candidatura";
import { candidaturaToPresenter } from "../presenters/candidatura.presenter";

export type FazerCandidaturaProps = {
    nomeCompleto: string;
    idade: number;
    bi: string;
    telefone: string;
    email: string;
    instituicaoEnsino: string;
    curso: string;
    anoInicio: number;
    anoConclusao: number;
    mediaFinal: number;
    rendaFamiliarMensal: number;
    comprovanteMatricula: File;
    documentoIdentificacao: File;
    comprovanteRenda: File;
    certificadoHistoricoEscolar: File;

}

export async function fazerCandidaturaUseCase(props: FazerCandidaturaProps): Promise<Candidatura> {

    const comprovanteMatriculaUrl = await StorageService.uploadFile(props.comprovanteMatricula, `comprovantes-matricula/${props.nomeCompleto}`)
    const documentoIdentificacaoUrl = await StorageService.uploadFile(props.documentoIdentificacao, `documentos-identificacao/${props.nomeCompleto}`);
    const comprovanteRendaUrl = await StorageService.uploadFile(props.comprovanteRenda, `comprovantes-renda/${props.nomeCompleto}`);
    const certificadoHistoricoEscolarUrl = await StorageService.uploadFile(props.certificadoHistoricoEscolar, `certificados-historico-escolar/${props.nomeCompleto}`);


    if (await CandadituraService.getCandidaturaByBI(props.bi)) {
        throw new Error('Já existe uma candidatura com o mesmo BI. Por favor.');
    }

    const candidatura = {
        nome_completo: props.nomeCompleto,
        idade: props.idade,
        bi: props.bi,
        telefone: props.telefone,
        email: props.email,
        instituicao_ensino: props.instituicaoEnsino,
        curso: props.curso,
        ano_inicio: props.anoInicio,
        ano_conclusao: props.anoConclusao,
        media_final: props.mediaFinal,
        renda_familiar_mensal: props.rendaFamiliarMensal,
        comprovante_matricula_url: comprovanteMatriculaUrl,
        documento_identificacao_url: documentoIdentificacaoUrl,
        comprovante_renda_url: comprovanteRendaUrl,
        certificado_historico_escolar_url: certificadoHistoricoEscolarUrl
    };


    return candidaturaToPresenter(await CandadituraService.saveCandidutra({
        ...candidatura,
    }));

}


export async function buscarCandidaturasUseCase(): Promise<Candidatura[]> {
    return (await CandadituraService.getCandidaturas()).map((candidatura)=>{
        return candidaturaToPresenter(candidatura);
    });
}

export async function buscarCandidaturaPorBIUseCase(bi: string): Promise<Candidatura | null> {
    const candidatura = await CandadituraService.getCandidaturaByBI(bi);
    if (!candidatura) {
        return null;
    }
    return candidaturaToPresenter(candidatura);
}   