import './globals.css'
import { Inter } from 'next/font/google'
import {AppProvider} from "@/app/context/appContext";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Breeding calculator',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
