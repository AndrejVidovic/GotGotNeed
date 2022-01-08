import {
    AppBar,
    Box,
    Button,
    Toolbar,
    darken,
    useTheme,
    IconButton,
} from "@mui/material";
import Image from "next/image";
import { MenuRounded } from "@mui/icons-material";
import Link from "next/link";
import logo from "../../public/LogoS.png";

const pages = [
    "About Us",
    "News",
    "Collections",
    "Collectors",
    "Publishers",
    "Chat",
    "Swap",
];

const styles = (theme) => ({
    appBar: {
        boxShadow: theme.shadows[3],
    },
    loginButtonBox: {
        marginLeft: "auto",
        marginRight: "0",
        "@media (min-width: 1100px) and (max-width: 1300px)": {
            marginLeft: "24px",
        },
    },
    loginButton: {
        backgroundColor: theme.palette.secondary.light,
        color: "black",
        fontWeight: 700,
        boxShadow: theme.shadows[2],
        width: "10vh",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
        },
    },
    navbarButtons: {
        color: "white",
        backgroundColor: darken(theme.palette.primary.main, 0.1),
        width: "12vh",
        textAlign: "center",
        textTransform: "none",
        boxShadow: theme.shadows[1],
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    logoLink: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    menuButton: {
        fontSize: "35px",
        color: "white",
        textShadow: theme.shadows[4],
        [theme.breakpoints.up("lg")]: {
            display: "none",
        },
    },
    pageBox: {
        [theme.breakpoints.down("lg")]: {
            display: "none",
        },
    },
});

const Navbar = ({ openDrawer }) => {
    const theme = useTheme(); //dohvaćamo temu zadanu ThemeProviderom iz _app.js

    return (
        <>
            <AppBar position="fixed" sx={styles(theme).appBar}>
                <Toolbar>
                    <IconButton
                        onClick={() => openDrawer()}
                        sx={styles(theme).menuButton}
                    >
                        <MenuRounded sx={styles(theme).menuButton} />
                    </IconButton>
                    <Box>
                        <Link href="/" passHref>
                            <a style={styles(theme).logoLink}>
                                <Image
                                    src={logo}
                                    layout="intrinsic"
                                    alt="GGN"
                                ></Image>
                            </a>
                        </Link>
                    </Box>
                    {pages.map((page) => (
                        <Box ml={3} key={page} sx={styles(theme).pageBox}>
                            <Link
                                href={{ pathname: "/[page]" }}
                                as={`/${page.replace(/\s+/g, "")}`}
                                passHref
                            >
                                <Button sx={styles(theme).navbarButtons}>
                                    {page}
                                </Button>
                            </Link>
                        </Box>
                    ))}
                    <Box sx={styles(theme).loginButtonBox}>
                        <Link href="/Login" passHref>
                            <Button sx={styles(theme).loginButton}>
                                Login
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};
export default Navbar;
