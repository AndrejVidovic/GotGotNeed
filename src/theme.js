import { createTheme } from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";
import backgroundIMG from "../public/Background.png";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 500,
            md: 900,
            lg: 1100,
            xl: 1536,
        },
    },
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
        4: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                a: {
                    color: "black",
                    textDecoration: "none",
                },
                body: {
                    "@media (max-width: 900px)": {
                        marginTop: "5vh",
                    },
                    "@media (min-width: 900px)": {
                        marginTop: "15vh",
                    },
                    backgroundImage: `url(${backgroundIMG.src})`,
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: "6px",
                    boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.25)",
                    paddingLeft: "5px",
                    paddingRight: "5px",
                    background: "rgba(219, 219, 219, 0.08)" /*0 sivo*/,
                    backdropFilter: "blur(10px)",
                    "@media (min-width: 0px) and (max-width: 900px)": {
                        fontSize: "0.75rem",
                    },
                    "@media (min-width: 900px) and (max-width: 1536px)": {
                        fontSize: "0.875rem",
                    },
                    "@media (min-width: 1536px)": {
                        fontSize: "1rem",
                    },
                },
            },
        },
    },
});

export default theme;
