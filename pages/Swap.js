import { Grid, useTheme, Box } from "@mui/material";
import Head from "next/head";
import Title from "../components/Title";
import Glass from "../components/Glass";
import SwapFilter from "../components/Swap/SwapFilter";
import filterBackground from "../public/filterBackground.webp";
import Footer from "../components/Layout/footer";
import UserSwap from "../components/Swap/UserSwap";
import { useState } from "react";
import allSwapUsers from "../fakeData/Swap/Swaps.json";
const styles = (theme) => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "7rem",
        flexDirection: "column",
    },
    filterGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        overflow: "hidden",
    },
    glassContainer: {
        width: "100%",
        marginTop: "4vh",
        marginBottom: "9vh",
        zIndex: 11,
        backgroundImage: `url(${filterBackground.src})`,
        backgroundSize: "cover",
    },
});
function Swap() {
    const theme = useTheme();
    const allUsers = allSwapUsers;
    return (
        <>
            <Head>
                <title>Swap</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Grid container sx={styles(theme).container}>
                <Title title="Swap" subtitle="Find your ideal swap" />
                <Grid item xl={6} md={8} xs={10} sx={styles(theme).glassContainer}>
                    <Glass color={0}>
                        <Grid sx={styles(theme).filterGrid}>
                            <SwapFilter></SwapFilter>
                        </Grid>
                    </Glass>
                </Grid>
                <Grid item container xl={6} md={8} xs={10}>
                    {allUsers.map((user) => (
                        <UserSwap user={user} key={user.username} />
                    ))}
                </Grid>
            </Grid>
            <Footer></Footer>
        </>
    );
}
export default Swap;
