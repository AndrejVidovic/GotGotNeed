import {
  Grid,
  Typography,
  useTheme,
  Chip,
  Pagination,
  ListItem,
} from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import DUMMY from "../fakeData/News/News.json";
import Footer from "../components/Layout/footer";
import SearchNews from "../components/News/SearchNews";
import CardNews from "../components/News/CardNews";

const styles = (theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10vh",
    flexDirection: "column",
  },
  title: {
    fontWeight: 700,
    fontSize: "8vh",
  },
  subtitle: {
    fontWeight: 500,
    fontSize: "4vh",
    paddingBottom: "1vh",
    color: "#616161",
  },
  gridTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  searchGrid: {
    marginTop: "4vh",
    marginBottom: "6vh",
    width: "100%",
  },
  chipGrid: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "2vh",
    flexWrap: "wrap",
  },
  chip: {
    margin: "1vh",
  },
  chipActive: {
    margin: "1vh",
    backgroundColor: "rgba(64, 63, 63, 0.5)",
  },
  pagination: {
    marginTop: "5vh",
  },
});
function News() {
  const theme = useTheme();
  const [news, setNews] = useState(() => {
    return DUMMY;
  }); // send them into search
  const [filteredNews, setFilteredNews] = useState(() => {
    return DUMMY;
  }); //using for search and chip filtering
  const temp = news;
  const dataLimit = 3; //items per page
  const pages = useState(Math.ceil(filteredNews.length / dataLimit)); //number of pages
  const [currentPage, setCurrentPage] = useState(1);
  const [active, setActive] = useState({});

  const result = temp.reduce((accumulator, currentValue) => {
    const type = accumulator.type.concat(currentValue.type);
    accumulator.type = type.filter((item, pos) => type.indexOf(item) === pos);
    return accumulator;
  });

  const getPaginatedData = () => {
    const startIndex = dataLimit * currentPage - dataLimit;
    const endIndex = dataLimit + startIndex;
    return filteredNews.slice(startIndex, endIndex);
  };
  const handleChange = (event, value) => {
    event.preventDefault();
    setCurrentPage(value);
  };
  const handleClickChip = (data, index) => {
    setActive({ ...active, index });
    console.log(data + index);
    console.log(active);
  };

  return (
    <>
      <Head>
        <title>News</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Grid container sx={styles(theme).container}>
        <Grid container sx={styles(theme).gridTitle}>
          <Grid item xl={6} lg={8} md={8} sm={10} xs={10}>
            <Typography variant="h1" sx={styles(theme).title}>
              News
            </Typography>
            <Typography variant="h2" sx={styles(theme).subtitle}>
              News from world of stickers.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xl={6}
          lg={8}
          md={8}
          sm={10}
          xs={10}
          sx={styles(theme).searchGrid}
        >
          <SearchNews
            news={news}
            setFilteredNews={setFilteredNews}
            setCurrentPage={setCurrentPage}
          />
        </Grid>
        <Grid
          item
          xl={6}
          lg={8}
          md={8}
          sm={10}
          xs={10}
          sx={styles(theme).chipGrid}
        >
          {result.type.map((data, index) => {
            return (
              <Chip
                label={data}
                sx={
                  index === active
                    ? styles(theme).chipActive
                    : styles(theme).chip
                }
                key={index}
                onClick={() => handleClickChip(data, index)}
              ></Chip>
            );
          })}
        </Grid>
        <Grid item xl={6} lg={8} md={8} sm={10} xs={10}>
          {getPaginatedData().map((blog, index) => (
            <CardNews blog={blog} key={index}></CardNews>
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
            count={pages[0]}
            onChange={handleChange}
          ></Pagination>
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  );
}
export default News;
