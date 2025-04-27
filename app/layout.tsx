import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./AuthProvider";

export const metadata: Metadata = {
  title: "CliniFacil",
  description: "Crriado pelo José Miguel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>{children}</body>
      </AuthProvider>
    </html>
  );
}
