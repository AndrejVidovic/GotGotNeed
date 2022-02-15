import { useState } from "react";
import { AppBar, Box, Button, Toolbar, darken, useTheme, IconButton } from "@mui/material";
import Image from "next/image";
import { MenuRounded } from "@mui/icons-material";
import Link from "next/link";
import logo from "../../public/LogoS.png";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";

const styles = (theme) => ({
    appBar: {
        boxShadow: theme.shadows[3],
    },
    loginButtonBox: {
        marginLeft: "auto",
        marginRight: "0",
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
    selectedButton: {
        backgroundColor: theme.palette.primary.dark,
        "&:hover": {
            backgroundColor: darken(theme.palette.primary.dark, 0.1),
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
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState("");
    const router = useRouter();

    const pages = ["About Us", "News", "Collections", "Collectors", "Publishers", "Swap"];

    async function handleLogout() {
        setError("");

        try {
            await logout();
            history.push("/login");
        } catch {
            setError("Failed to log out");
        }
    }

    return (
        <>
            <AppBar position="fixed" sx={styles(theme).appBar}>
                <Toolbar>
                    <IconButton onClick={() => openDrawer()} sx={styles(theme).menuButton}>
                        <MenuRounded sx={styles(theme).menuButton} />
                    </IconButton>
                    <Box>
                        <Link href="/" passHref>
                            <a style={styles(theme).logoLink}>
                                <Image src={logo} layout="intrinsic" alt="GGN"></Image>
                            </a>
                        </Link>
                    </Box>
                    {pages.map((page) => (
                        <Box ml={3} key={page} sx={styles(theme).pageBox}>
                            <Link href={{ pathname: "/[page]" }} as={`/${page.replace(/\s+/g, "")}`} passHref>
                                <Button sx={router.pathname !== `/${page.replace(/\s+/g, "")}` ? styles(theme).navbarButtons : { ...styles(theme).navbarButtons, ...styles(theme).selectedButton }}>{page}</Button>
                            </Link>
                        </Box>
                    ))}
                    {currentUser && (
                        <Box ml={3} key={"Chat"} sx={styles(theme).pageBox}>
                            <Link href="/Chat" passHref>
                                <Button sx={router.pathname !== `/Chat` ? styles(theme).navbarButtons : { ...styles(theme).navbarButtons, ...styles(theme).selectedButton }}>Chat</Button>
                            </Link>
                        </Box>
                    )}
                    <Box sx={styles(theme).loginButtonBox}>
                        {currentUser ? (
                            <Button sx={styles(theme).loginButton} onClick={() => handleLogout()}>
                                Log Out
                            </Button>
                        ) : (
                            <Link href="/Login" passHref>
                                <Button sx={styles(theme).loginButton}>Log In</Button>
                            </Link>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};
export default Navbar;
