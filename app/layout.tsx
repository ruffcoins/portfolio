import './globals.css'
import {Rubik} from 'next/font/google'
import React from "react";


const rubik = Rubik({subsets: ['latin']})

export const metadata = {
  title: 'My Frontend Engineer Portfolio | Anthony Chukwujekwu',
  description: 'Welcome to my frontend engineering portfolio. Explore my projects, skills, and experience in web development.',
  keywords: "frontend engineer, web development, portfolio, projects, skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={rubik.className}>{children}</body>
    </html>
  )
}
