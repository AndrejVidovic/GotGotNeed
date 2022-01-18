import { Grid, Pagination, useTheme } from "@mui/material";
import Head from "next/head";
import Search from "../../components/Search";
import Title from "../../components/Title";
import Footer from "../../components/Layout/footer";
import dummyPublishersData from "../../fakeData/Publishers/Publishers.json";
import { useState, useEffect } from "react";
import PublisherCard from "../../components/Publishers/PublisherCard";
import DataSourceApi from "../../helpers/contentful";
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
});
function Publishers({ publishers }) {
    const theme = useTheme();
    const allPublishers = publishers;
    const PublishersLimitPerPage = 6;
    const [filteredPublishers, setFilteredPublishers] = useState(publishers);
    const [numberOfPages, setNumberOfPages] = useState(Math.ceil(filteredPublishers.length / PublishersLimitPerPage));
    const [currentPage, setCurrentPage] = useState(1);
    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        setCurrentPage(1);
        setNumberOfPages(Math.ceil(filteredPublishers.length / PublishersLimitPerPage));
    }, [filteredPublishers]);

    const getFilteredPublishers = () => {
        const startIndex = PublishersLimitPerPage * currentPage - PublishersLimitPerPage;
        let endIndex = PublishersLimitPerPage + startIndex;
        endIndex = endIndex > filteredPublishers.length ? filteredPublishers.length : endIndex;
        return filteredPublishers.slice(startIndex, endIndex);
    };

    const handlePageChange = (event, value) => {
        event.preventDefault();
        setCurrentPage(value);
    };

    return (
        <>
            <Head>
                <title>Publishers</title>
            </Head>
            <Grid container sx={styles(theme).container}>
                <Title title="Publishers" subtitle="The sticker makers themselves" />
                <Grid item xl={6} md={8} xs={10} sx={styles(theme).searchGrid}>
                    <Search itemsToFilter={allPublishers} setFilteredItems={setFilteredPublishers} propertiesToSearch={["name", "location"]} />
                </Grid>
                <Grid container item xl={6} md={8} xs={10} spacing={5}>
                    {getFilteredPublishers().map((publisher) => (
                        <PublisherCard key={publisher.id} publisher={publisher} favorite={favorite} setFavorite={setFavorite} />
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
export default Publishers;

export async function getStaticProps() {
    const publishers = await DataSourceApi.getPublishers();

    return {
        props: {
            publishers,
        },
    };
}
