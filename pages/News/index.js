import { Grid, Typography, useTheme, Chip, Pagination, ListItem } from "@mui/material";
import Head from "next/head";
import { useState, useEffect } from "react";
import DataSourceAPI from "../../helpers/contentful";
import Footer from "../../components/Layout/footer";
import Search from "../../components/Search";
import BlogCard from "../../components/News/BlogCard";
import Chips from "../../components/News/Chips";
import Title from "../../components/Title";

const styles = (theme) => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "7rem",
        flexDirection: "column",
    },
    searchGrid: {
        width: "100%",
    },
    pagination: {
        marginTop: "5vh",
    },
    cards: {
        marginTop: "6rem",
        [theme.breakpoints.down("md")]: {
            marginTop: "4rem",
        },
    },
});

const News = ({ newsData }) => {
    const theme = useTheme();
    const allNews = newsData;
    const newsLimitPerPage = 3;

    console.log(allNews.length);

    const [chipsNews, setChipsNews] = useState(() => newsData);
    const [searchNews, setSearchNews] = useState(() => newsData);

    const [activeChips, setActiveChips] = useState(() => []);
    const [numberOfPages, setNumberOfPages] = useState(Math.ceil(allNews.length / newsLimitPerPage));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
        let filteredNews = [];
        for (let i in chipsNews) {
            for (let j in searchNews) {
                if (chipsNews[i].slug === searchNews[j].slug) {
                    filteredNews.push(chipsNews[i]);
                }
            }
        }

        setNumberOfPages(Math.ceil(filteredNews.length / newsLimitPerPage));
    }, [searchNews, chipsNews]);

    let tempAllKeywords = [];
    for (let i = 0; i < allNews.length; i++) {
        for (let j = 0; j < allNews[i].types.items.length; j++) {
            tempAllKeywords = [...tempAllKeywords, allNews[i].types.items[j].name];
        }
    }
    let allUniqueKeywords = [...new Set(tempAllKeywords)]; //vrati samo niz jedinstvenih

    const getDisplayedNews = () => {
        const startIndex = newsLimitPerPage * currentPage - newsLimitPerPage;
        let endIndex = newsLimitPerPage + startIndex;

        let filteredNews = [];
        for (let i in chipsNews) {
            for (let j in searchNews) {
                if (chipsNews[i].slug === searchNews[j].slug) {
                    filteredNews.push(chipsNews[i]);
                }
            }
        }

        endIndex = endIndex > filteredNews.length ? filteredNews.length : endIndex;

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
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Grid container sx={styles(theme).container}>
                <Title title="News" subtitle="News from the world of stickers." />
                <Grid item xl={6} md={8} xs={10} sx={styles(theme).searchGrid}>
                    <Search itemsToFilter={allNews} setFilteredItems={setSearchNews} propertiesToSearch={["title", "description", "date"]} />
                </Grid>
                <Grid item container direction="row" alignItems="center" justifyContent="flex-start" spacing={1.5} xl={6} md={8} xs={10}>
                    {allUniqueKeywords.map((keyword, index) => (
                        <Grid item key={index}>
                            <Chips chipName={keyword} setFilteredNews={setChipsNews} allNews={allNews} activeChips={activeChips} setActiveChips={setActiveChips} />
                        </Grid>
                    ))}
                </Grid>
                <Grid container item xl={6} md={8} xs={10} sx={styles(theme).cards}>
                    {getDisplayedNews().map((blog) => (
                        <BlogCard key={blog.slug} id={blog.slug} slug={blog.slug} author={blog.author} image={blog.cardImage.url} title={blog.title} types={blog.types.items} description={blog.description} date={blog.date} />
                    ))}
                </Grid>
                <Grid item xl={6} md={8} xs={10} sx={styles(theme).pagination}>
                    <Pagination page={currentPage} count={numberOfPages} onChange={handlePageChange} />
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};
export default News;

export async function getStaticProps() {
    const newsData = await DataSourceAPI.getPosts();

    return {
        props: {
            newsData,
        },
    };
}
