"use client";
import Header from "../../Header";
import Footer from "../../Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
