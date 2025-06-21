'use server'

import { createClient } from "./supabase";


interface User {
    email: string;
    id: string;
}

export async function signIn(email: string, password: string) {
    const supabase = await createClient();

    const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password
    })


    if (error || !data || !data.user) {
        console.error('Error signing in:', error);
        throw new Error('Falha ao fazer login, verifique suas credenciais');
    }

    return {
        email: data.user.email,
        id: data.user.id
    } as User;
}

export async function getUser() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();

    if (error) {
        console.error('Error fetching user:', error);
        throw new Error('Falha ao obter usuário');
    }

    if (!data.user) {
        throw new Error('Usuário não autenticado');
    }

    return {
        email: data.user.email,
        id: data.user.id
    } as User;
}

export async function signOut() {
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error('Error signing out:', error);
        throw new Error('Falha ao fazer logout');
    }
}   
