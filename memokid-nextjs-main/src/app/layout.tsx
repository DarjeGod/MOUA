"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import RootProvider from "@/providers/RootProvider";
import { Box, Stack } from "@mui/material";
import Layout1 from './layout1'
import Layout2 from './layout2'
import Layout3 from './layout3'
import Layout4 from './layout4'


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootProvider>
      <html lang="en">
        <body className={inter.className}>
          <Layout1/>
          <Layout2/>
          <Layout3/>
          <Layout4/>
        </body>
      </html>
    </RootProvider>
  );
}
