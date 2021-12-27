import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import backgroundIMG from "../public/Background.png";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: "black",
          textDecoration: "none",
        } /*
        li:{
          listStyle:"none"
        },*/,
        body: {
          marginTop: "15vh",
          backgroundImage: `url(${backgroundIMG.src})`,
          /* "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: "1vh",
            height: "1vh",
	          backgroundColor: "#F5F5F5",
          },
          "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.1)",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            backgroundColor: "#1976D2",
	          backgroundImage: "linear-gradient(45deg,rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%,rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)",
            borderRadius: "5px",
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#0066CC",
          },*/
        },
      },
    },
  },
});

export default theme;
