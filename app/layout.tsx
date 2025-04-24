import type { Metadata } from 'next'
import './globals.css'
import { Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: "CliniFacil",
  description: "Crriado pelo José Miguel"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
