import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#27AAE1",
      light: "#F1FEFF",
      dark: "#1A1F36",
    },
    secondary: {
      main: "#9ACA3C",
    },
  },
  typography: {
    h1: {
      fontSize: 64,
      fontWeight: 600,
    },
  },
});

export default theme;
