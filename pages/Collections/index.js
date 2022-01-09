import { Grid, Pagination, Typography, useTheme } from "@mui/material";
import Head from "next/head";
import Title from "../../components/Title";
import Glass from "../../components/Glass";
import FilterCollections from "../../components/Collections/FilterCollections";
import { useState } from "react";
import dummyFilterCollections from "../../fakeData/Collections/CategoryFilter.json";
import Footer from "../../components/Layout/footer";
import CollectionsCard from "../../components/Collections/CollectionsCard";
const styles = (theme) => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "7rem",
        flexDirection: "column",
    },
    glassContainer: {
        width: "100%",
        marginTop: "4vh",
        marginBottom: "6vh",
    },
    filterGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
    },
    pagination: {
        marginTop: "5vh",
    },
    cardGrid: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
    },
});
function Collections() {
    const theme = useTheme();
    const collections = dummyFilterCollections;
    const CollectionsLimitPerPage = 3;
    //data for filtering
    const [publisher, setPublisher] = useState([]);
    const [category, setCategory] = useState([]);
    const [filteredCollections, setFilteredCollections] = useState(
        dummyFilterCollections
    );

    const [numberOfPages, setNumberOfPages] = useState(
        Math.ceil(filteredCollections.length / CollectionsLimitPerPage)
    );
    const [currentPage, setCurrentPage] = useState(1);
    //favorite collections
    const [favorite, setFavorite] = useState([]);

    const handlePageChange = (event, value) => {
        event.preventDefault();
        setCurrentPage(value);
    };

    const getFilteredCollections = () => {
        const startIndex =
            CollectionsLimitPerPage * currentPage - CollectionsLimitPerPage;
        let endIndex = CollectionsLimitPerPage + startIndex;
        endIndex =
            endIndex > filteredCollections.length
                ? filteredCollections.length
                : endIndex;
        return filteredCollections.slice(startIndex, endIndex);
    };
    return (
        <>
            <Head>
                <title>Collections</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Grid container sx={styles(theme).container}>
                <Title
                    title="Collections"
                    subtitle="Endless albums of stickers."
                />
                <Grid
                    item
                    xl={6}
                    lg={8}
                    md={8}
                    sm={10}
                    xs={10}
                    sx={styles(theme).glassContainer}
                >
                    <Glass color={0}>
                        <Grid sx={styles(theme).filterGrid}>
                            <FilterCollections
                                setCategory={setCategory}
                                setPublisher={setPublisher}
                                publisher={publisher}
                                category={category}
                                collections={collections}
                                setFilteredCollections={setFilteredCollections}
                            />
                        </Grid>
                    </Glass>
                </Grid>
                <Grid
                    item
                    xl={6}
                    lg={8}
                    md={8}
                    sm={10}
                    xs={10}
                    sx={styles(theme).cardGrid}
                >
                    {getFilteredCollections().map((data) => (
                        <CollectionsCard
                            collection={data}
                            key={data.id}
                            favorite={favorite}
                            setFavorite={setFavorite}
                        />
                    ))}
                </Grid>
                <Grid
                    item
                    xl={6}
                    lg={8}
                    md={8}
                    sm={10}
                    xs={10}
                    sx={styles(theme).pagination}
                >
                    <Pagination
                        page={currentPage}
                        count={numberOfPages}
                        onChange={handlePageChange}
                    ></Pagination>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}
export default Collections;
