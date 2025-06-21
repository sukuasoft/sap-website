import { Candidatura } from "../entities/candidatura";

export function candidaturaToPresenter(candidatura: Candidatura) {
    const storageUrl = process.env.SUPABASE_BUCKET_URL || '';
    return {
        ...candidatura,
        certificado_historico_escolar_url: `${storageUrl}${candidatura.certificado_historico_escolar_url}`,
        comprovante_matricula_url: `${storageUrl}${candidatura.comprovante_matricula_url}`,
        documento_identificacao_url: `${storageUrl}${candidatura.documento_identificacao_url}`,
        comprovante_renda_url: `${storageUrl}${candidatura.comprovante_renda_url}`,
    }

}