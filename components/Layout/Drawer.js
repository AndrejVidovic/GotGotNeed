import React from "react";
import {
    useTheme,
    Drawer,
    List,
    ListItem,
    ButtonBase,
    Divider,
    IconButton,
    darken,
} from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import Footer from "./footer";
import logo from "../../public/logoS.png";
import Image from "next/image";
import Link from "next/link";

const styles = (theme) => ({
    drawer: {
        width: "100vw",
        flexShrink: 0,
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "5px 15px 5px 25px",
        ...theme.mixins.toolbar, // It simply adds a minimum height to an element. It's useful when you use the AppBar with a content section below, and you want to add a spacer at the top of your content so it doesn't disappear under the AppBar, for example.
        boxShadow: theme.shadows[3],
    },
    logo: {
        height: "40px",
        width: "100px",
        margin: "0 auto 0 0",
        position: "relative",
    },
    divider: {
        backgroundColor: darken(theme.palette.primary.main, 0.1),
        height: "6px",
        border: "none",
    },
    signUpButton: {
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "80px",
    },
    closeIcon: {
        fontSize: "35px",
        stroke: "white",
        strokeWidth: "0.6",
        color: "white",
        textShadow: theme.shadows[4],
        // transition:"transform .2s",
        // "&:hover":{
        //   transform: "rotate(45deg)"
        // }
    },
    pageName: {
        marginLeft: "20px",
        fontSize: "18px",
        fontWeight: 600,
        color: "white",
        textShadow: theme.shadows[4],
    },
    signUpName: {
        color: "black",
        marginLeft: "35px",
        height: "80px",
    },
    pageButton: {
        height: "50px",
    },
});

const DrawerMenu = ({ drawerStatus, closeDrawer }) => {
    const theme = useTheme();
    const pages = [
        "About Us",
        "News",
        "Collections",
        "Collectors",
        "Publishers",
        "Chat",
        "Swap",
    ];

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={drawerStatus}
            sx={styles(theme).drawer}
        >
            <div style={styles(theme).header}>
                <div style={styles(theme).logo}>
                    <Image
                        src={logo}
                        layout="fill"
                        alt="GGN"
                        objectFit="contain"
                    />
                </div>
                <IconButton onClick={() => closeDrawer()}>
                    <CloseRounded sx={styles(theme).closeIcon} />
                </IconButton>
            </div>
            <Divider sx={styles(theme).divider} />
            <List>
                {pages.map((page) => (
                    <div key={page}>
                        <Link
                            href={{ pathname: "/[page]" }}
                            as={`/${page.replace(/\s+/g, "")}`}
                            passHref
                        >
                            <ListItem button sx={styles(theme).pageButton}>
                                <span style={styles(theme).pageName}>
                                    {page}
                                </span>
                            </ListItem>
                        </Link>
                        <Divider sx={styles(theme).divider} />
                    </div>
                ))}
            </List>
            <Link href="/Register" passHref>
                <ButtonBase sx={styles(theme).signUpButton}>
                    <div
                        style={{
                            ...styles(theme).pageName,
                            ...styles(theme).signUpName,
                            ...styles(theme).signUpButton,
                        }}
                    >
                        SIGN UP
                    </div>
                </ButtonBase>
            </Link>
            <Footer />
        </Drawer>
    );
};

export default DrawerMenu;
