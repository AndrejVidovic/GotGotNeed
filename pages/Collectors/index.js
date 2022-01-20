import { Grid, Pagination, useTheme, Button } from "@mui/material";
import Head from "next/head";
import { useState, useEffect } from "react";
import Footer from "../../components/Layout/footer";
import Search from "../../components/Search";
import Title from "../../components/Title";
import allCollectors from "../../fakeData/Profiles/Profiles.json";
import CollectorCard from "../../modules/Collectors/CollectorCard";

const styles = (theme) => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "7rem",
        flexDirection: "column",
    },
    searchGrid: {
        marginBottom: "4rem",
        width: "100%",
        [theme.breakpoints.down("lg")]: {
            marginBottom: "2rem",
        },
    },
    pagination: {
        marginTop: "5vh",
    },
    card: {
        borderRadius: theme.shape.borderRadius + "px",
        overflow: "hidden",
        boxShadow: theme.shadows[1],
        position: "relative",
        height: "350px",
        width: "100%",
    },
    cardImage: {
        position: "relative",
        width: "100%",
        height: "60%",
    },
    // searchButtons: {
    //     margin: "0 0 0 15px",
    //     fontWeight: 600,
    // },
});

const Collectors = () => {
    const theme = useTheme();
    const allUsers = allCollectors;
    const cardsPerPage = 6;

    const [currentPage, setCurrentPage] = useState(() => 1);
    const [filteredUsers, setFilteredUsers] = useState(() => allUsers);
    const [numberOfPages, setNumberOfPages] = useState(Math.ceil(allUsers.length / cardsPerPage));

    useEffect(() => {
        setCurrentPage(1);
        setNumberOfPages(Math.ceil(filteredUsers.length / cardsPerPage));
    }, [filteredUsers]);

    const handlePageChange = (event, value) => {
        event.preventDefault();
        setCurrentPage(value);
    };

    const getDisplayedUsers = () => {
        const startIndex = cardsPerPage * currentPage - cardsPerPage;
        let endIndex = cardsPerPage + startIndex;
        endIndex = endIndex > filteredUsers.length ? filteredUsers.length : endIndex;

        return filteredUsers.slice(startIndex, endIndex);
    };

    return (
        <>
            <Head>
                <title>Collectors</title>
            </Head>
            <Grid container sx={styles(theme).container}>
                <Title title="Collectors" subtitle="Your fellow sticker enthusiasts." />
                <Grid item xl={6} md={8} xs={10} sx={styles(theme).searchGrid}>
                    <Search itemsToFilter={allUsers} setFilteredItems={setFilteredUsers} propertiesToSearch={["username", "location", "name"]}>
                        {/* <Button variant="contained" color="secondary" sx={styles(theme).searchButtons}>Split</Button>
                        <Button variant="contained" color="secondary" sx={styles(theme).searchButtons}>Croatia</Button> */}
                    </Search>
                </Grid>
                <Grid container item xl={6} md={8} xs={10} spacing={6}>
                    {getDisplayedUsers().length > 0 ? getDisplayedUsers().map((user) => <CollectorCard user={user} key={user.username} />) : <p style={{ margin: "4rem auto 2rem auto", paddingLeft: "4rem" }}>No results.</p>}
                </Grid>
                <Grid item xl={6} md={8} xs={10} sx={styles(theme).pagination}>
                    <Pagination page={currentPage} count={numberOfPages} onChange={handlePageChange} />
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};
export default Collectors;
