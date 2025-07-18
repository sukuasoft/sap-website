import type { Metadata } from "next";
import "./main.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "SAP",
  description: 'Scholarship Angola Program'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
