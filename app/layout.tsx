"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
/*import "bootstrap/dist/css/bootstrap.min.css"; 
import './globals.scss';*/
/*import { useEffect } from 'react';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const isServer = typeof window === 'undefined';
const WOW = !isServer ? require('wow.js') : null;*/
/*export const metadata = {
  title: 'Blue Wave',
  description: '',
}*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
/*
  useEffect(() => {
    new WOW().init();
  }, []);*/
    return (
        <html suppressHydrationWarning lang="en">
            <head>
              <meta content="width=device-width, initial-scale=1" name="viewport" />
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/images/favicon.ico" />
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
            </head>
            <body className="">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
