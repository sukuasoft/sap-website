import { Candidatura } from "@/application/entities/candidatura";
import { supabase } from "@/services/supabase";


async function saveCandidutra(
    candidatura: Omit<Candidatura, 'id' | 'created_at' | 'status'>
): Promise<Candidatura> {

    const { data, error } = await supabase.from('applications').insert(candidatura).select('*').single();
    if (error) {
        console.error('Error inserting application:', error);
        throw new Error('Failed to create application');
    }
    return data;
}


async function getCandidaturas(): Promise<Candidatura[]> {

    const { data, error } = await supabase.from('applications').select('*');
    if (error) {
        console.error('Error fetching applications:', error);
        throw new Error('Failed to fetch applications');
    }
    return data;
}

async function getCandidaturaByBI(bi:string): Promise<Candidatura| null> {

    const { data, error } = await supabase.from('applications').select('*').eq('bi', bi);
    if (error) {
        console.error('Error fetching applications:', error);
        throw new Error('Failed to fetch applications');
    }
    return data.length > 0 ? data[0] : null;
}

const CandadituraService = {
    saveCandidutra,
    getCandidaturas,
    getCandidaturaByBI
}
export default CandadituraService;