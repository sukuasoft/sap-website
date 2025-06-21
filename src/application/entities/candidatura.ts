export interface Candidatura {
    id: string;
    nome_completo: string;
    idade: number;
    bi: string;
    telefone: string;
    email: string;
    instituicao_ensino: string;
    curso: string;
    ano_inicio: number;
    ano_conclusao: number;
    media_final: number;
    renda_familiar_mensal: number;
    comprovante_matricula_url: string;
    documento_identificacao_url: string;
    comprovante_renda_url: string;
    certificado_historico_escolar_url: string;
    status: | 'pendente'
    | 'em_analise'
    | 'incompleta'
    | 'aprovada'
    | 'rejeitada';
    created_at: Date;
}