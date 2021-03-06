import { ExpandCircleDown } from "@mui/icons-material";
import { Collapse, Grid, IconButton, Typography, useTheme, Box } from "@mui/material";
import { useState, useRef } from "react";
import PublisherCollection from "./PublisherCollection";

const styles = (theme) => ({
    container: {
        marginBottom: "6rem",
    },
    paper: {
        height: "4rem",
        backgroundColor: theme.palette.primary.main,
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: 700,
        fontSize: "22px",
    },
    expandIconGrid: {
        display: "flex",
        margin: 0,
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    collectionsGrid: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        padding: "0 2rem",
        [theme.breakpoints.down("md")]: {
            padding: "1rem 0",
        },
    },
    iconButton: {
        margin: 0,
        padding: 0,
        bottom: "-17px",
    },
    box: {
        boxShadow: theme.shadows[4],
        backgroundColor: "rgba(219, 219, 219, 0.08)",
        backdropFilter: "blur(10px)",
        borderRadius: "0 0 10px 10px",
    },
});

function Categories({ categories, collections }) {
    const theme = useTheme();
    const [collapse, setCollapse] = useState(false);
    const [height, setHeight] = useState(210); //namistit samo na velicnu vecu od kartice
    const ScrollRef = useRef();
    const handleCollapse = () => {
        setCollapse(!collapse);
    };

    const collectionsForCategory = () => {
        let temp = [];
        temp = collections.filter((x) => x.categories.includes(categories));
        return temp;
    };
    return (
        <Grid item sx={styles(theme).container}>
            <Box sx={styles(theme).paper}>
                <Typography variant="body1" sx={styles(theme).title}>
                    {categories}
                </Typography>
            </Box>
            <Box sx={styles(theme).box}>
                <Collapse in={collapse} collapsedSize={height}>
                    <Grid container spacing={3} sx={styles(theme).collectionsGrid}>
                        {collectionsForCategory().map((collection) => (
                            <PublisherCollection collection={collection} key={collection.id} />
                        ))}
                    </Grid>
                </Collapse>
                <Grid sx={styles(theme).expandIconGrid}>
                    <IconButton sx={styles(theme).iconButton} onClick={handleCollapse}>
                        {collapse ? (
                            <ExpandCircleDown sx={{ transform: "rotate(180deg)", color: theme.palette.primary.main, filter: "drop-shadow(2px 4px 6px white)", fontSize: "3rem" }} />
                        ) : (
                            <ExpandCircleDown sx={{ color: theme.palette.primary.main, fontSize: "3rem", filter: "drop-shadow(2px 4px 6px white)" }} />
                        )}
                    </IconButton>
                </Grid>
            </Box>
        </Grid>
    );
}
export default Categories;
