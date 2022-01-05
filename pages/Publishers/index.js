import { Grid, Pagination, useTheme } from "@mui/material";
import Head from "next/head";
import Search from "../../components/Search";
import Title from "../../components/Title";
import Footer from "../../components/Layout/footer";
import dummyPublishersData from "../../fakeData/Publishers/Publishers.json";
import { useState, useEffect } from "react";
import PublisherCard from "../../components/Publishers/PublisherCard";

const styles = (theme) => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "7rem",
        flexDirection: "column",
    },
    searchGrid: {
        marginTop: "4vh",
        marginBottom: "6vh",
        width: "100%",
    },
    cardGrid: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
    },
    pagination: {
        marginTop: "5vh",
    },
});
function Publishers() {
    const theme = useTheme();
    const allPublishers = dummyPublishersData;
    const PublishersLimitPerPage = 6;

    const [filteredPublishers, setFilteredPublishers] =
        useState(dummyPublishersData);
    const [numberOfPages, setNumberOfPages] = useState(
        Math.ceil(filteredPublishers.length / PublishersLimitPerPage)
    );
    const [currentPage, setCurrentPage] = useState(1);

    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        setCurrentPage(1);
        setNumberOfPages(
            Math.ceil(filteredPublishers.length / PublishersLimitPerPage)
        );
    }, [filteredPublishers]);

    const getFilteredPublishers = () => {
        const startIndex =
            PublishersLimitPerPage * currentPage - PublishersLimitPerPage;
        let endIndex = PublishersLimitPerPage + startIndex;
        endIndex =
            endIndex > filteredPublishers.length
                ? filteredPublishers.length
                : endIndex;
        return filteredPublishers.slice(startIndex, endIndex);
    };

    const searchFilter = (event) => {
        let searchWord = event.target.value;
        let tempFilteredPublishers = [];

        if (searchWord != "") {
            tempFilteredPublishers = allPublishers.filter(
                (publisher) =>
                    publisher.title.toLowerCase().includes(searchWord) ||
                    publisher.country.toLowerCase().includes(searchWord)
            );
        } else {
            tempFilteredPublishers = allPublishers;
        }

        setFilteredPublishers(tempFilteredPublishers);
    };

    const handlePageChange = (event, value) => {
        event.preventDefault();
        setCurrentPage(value);
    };

    return (
        <>
            <Head>
                <title>Publishers</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Grid container sx={styles(theme).container}>
                <Title
                    title="Publishers"
                    subtitle="The sticker makers themselves"
                />
                <Grid
                    item
                    xl={6}
                    lg={8}
                    md={8}
                    sm={10}
                    xs={10}
                    sx={styles(theme).searchGrid}
                >
                    <Search searchTriggeredFunction={searchFilter}></Search>
                </Grid>
                <Grid
                    container
                    xl={8}
                    lg={9}
                    md={8}
                    sm={10}
                    xs={10}
                    spacing={6}
                    sx={styles(theme).cardGrid}
                >
                    {getFilteredPublishers().map((publisher) => (
                        <Grid item key={publisher.id}>
                            <PublisherCard
                                key={publisher.id}
                                publisher={publisher}
                                favorite={favorite}
                                setFavorite={setFavorite}
                            />
                        </Grid>
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
                    />
                </Grid>
            </Grid>
            <Footer></Footer>
        </>
    );
}
export default Publishers;
