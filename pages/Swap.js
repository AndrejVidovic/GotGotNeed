import { Grid, useTheme, Pagination } from "@mui/material";
import Head from "next/head";
import Title from "../components/Title";
import Glass from "../components/Glass";
import SwapFilter from "../components/Swap/SwapFilter";
import filterBackground from "../public/filterBackground.webp";
import Footer from "../components/Layout/footer";
import UserSwap from "../components/Swap/UserSwap";
import { useState, useEffect } from "react";
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
    const UsersPerPage = 10;

    const [currentPage, setCurrentPage] = useState(() => 1);
    const [numberOfPages, setNumberOfPages] = useState(Math.ceil(allUsers.length / UsersPerPage));

    useEffect(() => {
        setCurrentPage(1);
        setNumberOfPages(Math.ceil(allUsers.length / UsersPerPage));
    }, [allUsers]);

    const handlePageChange = (event, value) => {
        event.preventDefault();
        setCurrentPage(value);
    };
    const getDisplayedUsers = () => {
        const startIndex = UsersPerPage * currentPage - UsersPerPage;
        let endIndex = UsersPerPage + startIndex;
        endIndex = endIndex > allUsers.length ? allUsers.length : endIndex;

        return allUsers.slice(startIndex, endIndex);
    };
    return (
        <>
            <Head>
                <title>Swap</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Grid container sx={styles(theme).container}>
                <Title title="Swap" subtitle="Find your ideal swap." />
                <Grid item xl={6} md={8} xs={10} sx={styles(theme).glassContainer}>
                    <Glass color={0}>
                        <Grid sx={styles(theme).filterGrid}>
                            <SwapFilter></SwapFilter>
                        </Grid>
                    </Glass>
                </Grid>
                <Grid item container xl={6} md={8} xs={10}>
                    {getDisplayedUsers().map((user) => (
                        <UserSwap user={user} key={user.username} />
                    ))}
                </Grid>
                <Grid item xl={6} md={8} xs={10} sx={styles(theme).pagination}>
                    <Pagination page={currentPage} count={numberOfPages} onChange={handlePageChange} />
                </Grid>
            </Grid>
            <Footer></Footer>
        </>
    );
}
export default Swap;
