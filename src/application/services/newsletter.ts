import { createClient } from "@/services/supabase";
import { Newsletter } from "../entities/newsletter";

async function addNewsletter(
    email: string,
): Promise<Newsletter> {
    const supabase = await createClient();

    const { data, error } = await supabase.from('newsletters').insert({
        email
    }).select('*').single();
    if (error) {
        console.error('Error inserting newsletter:', error);
        throw new Error('Failed to create newsletter');
    }
    return data;
}


async function getNewsletterByEmail(email: string): Promise<Newsletter | null> {
    const supabase = await createClient();


    const { data, error } = await supabase.from('newsletters').select('*').eq('email', email);
    if (error) {
        console.error('Error fetching newsletter:', error);
        throw new Error('Failed to fetch newsletter');
    }
    return data.length > 0 ? data[0] : null;
}


const NewsletterService = {
    addNewsletter,
    getNewsletterByEmail,
}
export default NewsletterService;