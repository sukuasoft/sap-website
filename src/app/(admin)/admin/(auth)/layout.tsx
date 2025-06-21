import { getUser } from "@/services/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    let isRedirect = false;
    try {
        const user = await getUser();
        if (user) {
            isRedirect = true;
        }
    } catch (error) {
        isRedirect = false;
    }

    if (isRedirect) {
        return redirect('/');
    }
    return (
        children
    );
}