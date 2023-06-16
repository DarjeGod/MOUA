import { Height } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#27AAE1",
      light: "#F1FEFF",
      dark: "#1A1F36",
    },
    secondary: {
      main: "#FFF",
      light: "#9ACA3C",
      dark: "#583F99"
    }, 
  },
  typography: {
    fontFamily: "var(--font-inter)",
    h1: {
      fontSize: 64,
      fontWeight: 600,
    },
    body1: {
      fontSize: "13px",
      lineHeight: "24px",
    },
    h3: {
      fontSize: "48px",
      fontWeight: "700px"
    },
    h6: {
      fontWeight: "500px",
      fontSize: "15px"
    }
  },
});

export default theme;