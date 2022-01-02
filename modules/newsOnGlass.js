import { useTheme, Grid } from "@mui/material";
import Glass from "../components/glass";
import BlogCard from "../components/News/BlogCard";
import newsData from "../fakeData/News/News.json";

const styles = (theme) => ({
    moreLink: {
        width: "100%",
        display: "block",
        textAlign: "center",
        margin: "6rem 0",
        [theme.breakpoints.between("xs", "md")]: {
            margin: "3rem 0",
        },
    },
    newsTitle: {
        fontSize: "80px",
        fontWeight: "700",
        textShadow: theme.shadows[2],
        display: "block",
        width: "100%",
        textAlign: "center",
        [theme.breakpoints.between("xs", "md")]: {
            fontSize: "50px",
        },
    },
    glass: {
        width: "100vw",
    },
});

const NewsOnGlass = () => {
    const theme = useTheme();

    return (
        <Glass color={0} styling={styles(theme).glass}>
            <h1 style={styles(theme).newsTitle}>NEWS</h1>
            <Grid
                xs={11}
                md={9}
                lg={7}
                xl={6}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                {newsData.slice(0, 3).map((newsItem) => (
                    <Grid item xs={12}>
                        <BlogCard
                            key={newsItem.id}
                            id={newsItem.id}
                            title={newsItem.title}
                            type={newsItem.type}
                            description={newsItem.description}
                            date={newsItem.date}
                        />
                    </Grid>
                ))}
            </Grid>

            <p style={styles(theme).moreLink}>More posts &gt;</p>
        </Glass>
    );
};

export default NewsOnGlass;
