import {
    Grid,
    Typography,
    useTheme,
    Chip,
    Pagination,
    ListItem,
} from "@mui/material";
import Head from "next/head";
import { useState, useEffect } from "react";
import dummyNewsData from "../fakeData/News/News.json";
import Footer from "../components/Layout/footer";
import Search from "../components/Search";
import BlogCard from "../components/News/BlogCard";
import Chips from "../components/News/Chips";
import Title from "../components/Title";

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
    pagination: {
        marginTop: "5vh",
    },
});

const News = () => {
    const theme = useTheme();
    const allNews = dummyNewsData;
    const newsLimitPerPage = 3;

    const [chipsNews, setChipsNews] = useState(() => dummyNewsData);

    const [numberOfPages, setNumberOfPages] = useState(
        Math.ceil(allNews.length / newsLimitPerPage)
    );
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
        let filteredNews = [];
        for (let chipBlog in chipsNews) {
            for (let searchBlog in searchNews) {
                if (chipBlog.id === searchBlog.id) {
                    filteredNews.push(chipBlog);
                }
            }
        }
        setNumberOfPages(Math.ceil(filteredNews.length / newsLimitPerPage));
    }, [searchNews, chipsNews]);

    let tempAllKeywords = [];
    for (let i = 0; i < allNews.length; i++) {
        tempAllKeywords = [...tempAllKeywords, ...allNews[i].type];
    }
    let allUniqueKeywords = [...new Set(tempAllKeywords)]; //vrati samo niz jedinstvenih

    const getDisplayedNews = () => {
        const startIndex = newsLimitPerPage * currentPage - newsLimitPerPage;
        let endIndex = newsLimitPerPage + startIndex;

        let filteredNews = [];
        for (let i in chipsNews) {
            for (let j in searchNews) {
                if (chipsNews[i].id === searchNews[j].id) {
                    filteredNews.push(chipsNews[i]);
                }
            }
        }

        endIndex =
            endIndex > filteredNews.length ? filteredNews.length : endIndex;

        return filteredNews.slice(startIndex, endIndex);
    };

    const handlePageChange = (event, value) => {
        event.preventDefault();
        setCurrentPage(value);
    };

    return (
        <>
            <Head>
                <title>Collectors</title>
            </Head>
            <Grid container sx={styles(theme).container}>
                <Title
                    title="Collectors"
                    subtitle="Your fellow sticker enthusiasts."
                />
            </Grid>
            <Footer />
        </>
    );
};
export default News;
