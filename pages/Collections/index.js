import { Grid, Pagination, useTheme } from "@mui/material";
import Head from "next/head";
import Title from "../../components/Title";
import Glass from "../../components/Glass";
import FilterCollections from "../../components/Collections/FilterCollections";
import { useState, useEffect } from "react";
import Footer from "../../components/Layout/footer";
import CollectionsCard from "../../components/Collections/CollectionsCard";
import filterBackground from "../../public/filterBackground.webp";
import DataSourceAPI from "../../helpers/contentful";

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
        zIndex: 11,
        backgroundImage: `url(${filterBackground.src})`,
        backgroundSize: "cover",
    },
    filterGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        overflow: "hidden",
    },
    pagination: {
        marginTop: "5vh",
    },
});

const Collections = ({ collections }) => {
    const theme = useTheme();
    const CollectionsLimitPerPage = 6;
    //data for filtering
    const [publisher, setPublisher] = useState([]);
    const [category, setCategory] = useState([]);

    const [searchCollections, setSearchCollections] = useState(collections);
    const [filtersCollections, setFiltersCollections] = useState(collections);

    const [numberOfPages, setNumberOfPages] = useState(Math.ceil(collections.length / CollectionsLimitPerPage));
    const [currentPage, setCurrentPage] = useState(1);
    //favorite collections
    const [favorite, setFavorite] = useState([]);

    const handlePageChange = (event, value) => {
        event.preventDefault();
        setCurrentPage(value);
    };

    useEffect(() => {
        setCurrentPage(1);

        let filteredCollections = [];
        for (let i = 0; i < filtersCollections.length; i++) {
            for (let j = 0; j < searchCollections.length; j++) {
                if (filtersCollections[i].name === searchCollections[j].name) {
                    filteredCollections.push(filtersCollections[i]);
                }
            }
        }
        let allUniqueCollections = [...new Set(filteredCollections)];

        setNumberOfPages(Math.ceil(allUniqueCollections.length / CollectionsLimitPerPage));
    }, [filtersCollections, searchCollections]);

    const getFilteredCollections = () => {
        const startIndex = CollectionsLimitPerPage * currentPage - CollectionsLimitPerPage;
        let endIndex = CollectionsLimitPerPage + startIndex;

        let filteredCollections = [];
        for (let i = 0; i < filtersCollections.length; i++) {
            for (let j = 0; j < searchCollections.length; j++) {
                if (filtersCollections[i].name === searchCollections[j].name) {
                    filteredCollections.push(filtersCollections[i]);
                }
            }
        }
        let allUniqueCollections = [...new Set(filteredCollections)]; // samo jedinstvene vrijednosti

        endIndex = endIndex > allUniqueCollections.length ? allUniqueCollections.length : endIndex;
        return allUniqueCollections.slice(startIndex, endIndex);
    };

    return (
        <>
            <Head>
                <title>Collections</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Grid container sx={styles(theme).container}>
                <Title title="Collections" subtitle="Endless albums of stickers." />
                <Grid item xl={6} md={8} xs={10} sx={styles(theme).glassContainer}>
                    <Glass color={0}>
                        <Grid sx={styles(theme).filterGrid}>
                            <FilterCollections setCategory={setCategory} setPublisher={setPublisher} publisher={publisher} category={category} collections={collections} setSearchCollections={setSearchCollections} setFilteredCollections={setFiltersCollections} />
                        </Grid>
                    </Glass>
                </Grid>
                <Grid container item xl={6} md={8} xs={10} spacing={6}>
                    {getFilteredCollections().length > 0 ? getFilteredCollections().map((data) => <CollectionsCard collection={data} key={data.id} favorite={favorite} setFavorite={setFavorite} />) : <p style={{ margin: "8rem auto 2rem auto", paddingLeft: "4rem" }}>No results.</p>}
                </Grid>
                <Grid item xl={6} md={8} xs={10} sx={styles(theme).pagination}>
                    <Pagination page={currentPage} count={numberOfPages} onChange={handlePageChange} />
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};
export default Collections;

export async function getStaticProps() {
    const collectionsUnormated = await DataSourceAPI.getCollections();
    const collections = collectionsUnormated.map((col) => ({ ...col, publisher: col.publisher.name, categories: col.categories.items.map((item) => item.name) }));

    return {
        props: {
            collections,
        },
    };
}
