import Title from "../Title";
import { Avatar, Grid, Typography, useTheme } from "@mui/material";

const styles = (theme) => ({
    root: {
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        margin: "2rem 0 5rem 0",
        [theme.breakpoints.down("lg")]: {
            margin: "6rem 0 3rem 0",
        },
    },
    textPart: {
        alignSelf: "center",
        [theme.breakpoints.down("md")]: {
            paddingLeft: "2rem",
        },
    },
    title: {
        fontWeight: 700,
        fontSize: "60px",
        lineHeight: "60px",
        [theme.breakpoints.between("md", "lg")]: {
            fontSize: "40px",
            lineHeight: "40px",
        },
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "35px",
            lineHeight: "35px",
        },
        [theme.breakpoints.between("xs", "sm")]: {
            fontSize: "30px",
            lineHeight: "30px",
        },
    },
    subtitle: {
        fontSize: "20px",
        padding: "10px 0",
        color: theme.palette.grey[500],
        [theme.breakpoints.down("lg")]: {
            fontSize: "15px",
        },
    },
    author: {
        alignContent: "center",
        justifyContent: "center",
    },
    avatar: {
        height: "120px",
        width: "120px",
        flexDirection: "column",
        alignContent: "center",
        [theme.breakpoints.down("lg")]: {
            height: "90px",
            width: "90px",
        },
        [theme.breakpoints.down("sm")]: {
            height: "70px",
            width: "70px",
        },
    },
    authorName: {
        fontWeight: 400,
        fontSize: "20px",
        padding: "10px 0",
        textAlign: "center",
        color: theme.palette.grey[600],
        [theme.breakpoints.down("lg")]: {
            fontSize: "14px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
        },
    },
});

const BlogHeader = ({ author, date, title }) => {
    const theme = useTheme();

    return (
        <Grid container sx={styles(theme).root}>
            <Grid item xs={3} md={2.5} container sx={styles(theme).author}>
                <Avatar src={author.authorPhoto.url} alt={author.name} aria-label={author.name} sx={styles(theme).avatar} />
                <Typography variant="body1" sx={styles(theme).authorName}>
                    {" "}
                    {author.name}{" "}
                </Typography>
            </Grid>
            <Grid item xs={9} sx={styles(theme).textPart}>
                <Typography variant="body1" sx={styles(theme).title}>
                    {" "}
                    {title}{" "}
                </Typography>
                <Typography variant="body1" sx={styles(theme).subtitle}>
                    {" "}
                    {date.slice(0, 10)}{" "}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default BlogHeader;
