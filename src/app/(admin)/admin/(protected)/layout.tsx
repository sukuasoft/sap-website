import { getUser } from "@/services/auth";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    let isRedirect = false;
    try {
        const user = await getUser();
        if (user) {
            isRedirect = false;
        }
    } catch (error) {
        isRedirect = true;
    }

    if (isRedirect) {
        return redirect('/login');
    }
    return (
        children
    );
}