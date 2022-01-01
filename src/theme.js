import { createTheme } from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";
import backgroundIMG from "../public/Background.png";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: orange[400],
    },
  },
  typography: {
    fontFamily: "'Epilogue', sans-serif",
    fontSize: 14,
    button: {
      fontSize: 14,
    },
  },
  shape: {
    borderRadius: 4,
  },
  shadows: {
    1: "0px 0px 4px rgba(0, 0, 0, 0.25)",
    2: "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12)",
    3: "0px 5px 5px rgba(0, 0, 0, 0.25)", //navbar shadow
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: "black",
          textDecoration: "none",
        },
        body: {
          marginTop: "15vh",
          backgroundImage: `url(${backgroundIMG.src})`,
          /*display:"flex",
          alignItems:"center", 
          justifyContent:"center"*/
        },
      },
    },
  },
});

export default theme;
