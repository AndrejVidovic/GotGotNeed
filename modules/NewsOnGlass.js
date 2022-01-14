import { useTheme, Grid, Typography } from "@mui/material";
import Glass from "../components/Glass";
import BlogCard from "../components/News/BlogCard";
import Link from "next/link";

const styles = (theme) => ({
    moreLink: {
        display: "flex",
        justifyContent: "center",
        fontSize: "1.2rem",
        margin: "6rem 0",
        color: "grey",
        [theme.breakpoints.between("xs", "md")]: {
            margin: "3rem 0",
        },
        cursor: "pointer",
        transition: "transform .2s",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },
    newsTitle: {
        fontSize: "65px", //prije 80px
        fontWeight: "700",
        padding: "55px",
        textShadow: theme.shadows[2],
        display: "block",
        width: "100%",
        textAlign: "center",
        [theme.breakpoints.between("xs", "md")]: {
            fontSize: "35px",
            padding: "30px",
        },
    },
    glass: {
        width: "100%",
    },
});

const NewsOnGlass = ({ newsData }) => {
    const theme = useTheme();

    return (
        <Glass color={0} styling={styles(theme).glass}>
            <Typography variant="h1" sx={styles(theme).newsTitle}>
                NEWS
            </Typography>
            <Grid xs={11} md={9} lg={7} xl={6} container direction="column" justifyContent="center" alignItems="center">
                {newsData.slice(0, 3).map((newsItem) => (
                    <Grid item xs={12}>
                        <BlogCard key={newsItem.sys.id} id={newsItem.sys.id} title={newsItem.title} types={newsItem.types.items} description={newsItem.description} date={newsItem.date} />
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={7} sx={styles(theme).moreLink}>
                {" "}
                {/*7 jer ce uvik bit u zasebnom redu a da ima mista za transformaciju tj. skaliranje*/}
                <Link href="/News">More posts &gt;</Link>
            </Grid>
        </Glass>
    );
};

export default NewsOnGlass;
