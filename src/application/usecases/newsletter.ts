'use server';

import { Newsletter } from "../entities/newsletter";
import NewsletterService from "../services/newsletter";


export async function addNewsletterUseCase(email: string): Promise<Newsletter> {

    if (await NewsletterService.getNewsletterByEmail(email)) {
        throw new Error('Email já existe na nossa lista de contatos');
    }

    return await NewsletterService.addNewsletter(email);
}
