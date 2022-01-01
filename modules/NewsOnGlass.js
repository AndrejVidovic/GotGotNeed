import { useTheme } from "@mui/material";
import Glass from "../components/glass";
import BlogCard from "../components/blogCard";

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
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <p style={styles(theme).moreLink}>More posts &gt;</p>
        </Glass>
    );
};

export default NewsOnGlass;
