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
import { fontGrid } from "@mui/material/styles/cssUtils";

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
    const [searchNews, setSearchNews] = useState(() => dummyNewsData);

    const [activeChips, setActiveChips] = useState(() => []);
    const [numberOfPages, setNumberOfPages] = useState(
        Math.ceil(filteredNews.length / newsLimitPerPage)
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
        endIndex =
            endIndex > filteredNews.length ? filteredNews.length : endIndex;

        let filteredNews = [];
        for (let chipBlog in chipsNews) {
            for (let searchBlog in searchNews) {
                if (chipBlog.id === searchBlog.id) {
                    filteredNews.push(chipBlog);
                }
            }
        }

        return filteredNews.slice(startIndex, endIndex);
    };

    const handlePageChange = (event, value) => {
        event.preventDefault();
        setCurrentPage(value);
    };

    return (
        <>
            <Head>
                <title>News</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Grid container sx={styles(theme).container}>
                <Title
                    title="News"
                    subtitle="News from the world of stickers."
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
                    <Search
                        itemsToFilter={allNews}
                        setFilteredItems={setSearchNews}
                        propertiesToSearch={["title", "description", "date"]}
                    />
                </Grid>
                <Grid
                    item
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                    spacing={1.5}
                    xl={6}
                    lg={8}
                    md={8}
                    sm={10}
                    xs={10}
                >
                    {allUniqueKeywords.map((keyword, index) => (
                        <Grid item key={index}>
                            <Chips
                                chipName={keyword}
                                setFilteredNews={setChipsNews}
                                allNews={allNews}
                                activeChips={activeChips}
                                setActiveChips={setActiveChips}
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
                    sx={{ marginTop: "7rem" }}
                >
                    {getDisplayedNews().map((blog) => (
                        <BlogCard
                            key={blog.id}
                            id={blog.id}
                            title={blog.title}
                            type={blog.type}
                            description={blog.description}
                            date={blog.date}
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
                    />
                </Grid>
            </Grid>
            <Footer></Footer>
        </>
    );
};
export default News;
