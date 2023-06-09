"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material";

import theme from "@/theme";

interface Props {
  children: ReactNode;
}

const RootProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default RootProvider;
