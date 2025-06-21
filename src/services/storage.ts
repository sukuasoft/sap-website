import { supabase } from "./supabase";

async function uploadFile(file: File, path: string): Promise<string> {
    const { data, error } = await supabase.storage.from(process.env.SUPABASE_BUCKET || 'sap-bucket').upload(path, file, {
        upsert: true
    });
    if (error) {
        console.error('Error uploading file:', error);
        throw new Error('Failed to upload file');
    }
    return data.path;
}

const StorageService ={
uploadFile
}

export default StorageService;