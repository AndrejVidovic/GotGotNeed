import { ExpandCircleDown } from "@mui/icons-material";
import { Collapse, Grid, IconButton, Paper, Typography, useTheme } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import PublisherCollection from "./PublisherCollection";

const styles = (theme) => ({
    container: {
        marginTop: "2rem",
    },
    paper: {
        height: "3.5rem",
        backgroundColor: "#1976D2",
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
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    iconButton: {
        margin: 0,
        padding: 0,
        bottom: "-17px",
    },
});

function Categories({ categories, collections }) {
    const theme = useTheme();
    const [collapse, setCollapse] = useState(false);
    const [height, setHeight] = useState(0);
    const ScrollRef = useRef();
    const handleCollapse = () => {
        setCollapse(!collapse);
    };
    useEffect(() => {
        setHeight(ScrollRef.current.clientHeight);
    }, []);

    const collectionsForCategory = () => {
        let temp = [];
        temp = collections.filter((x) => x.categories.includes(categories));
        return temp;
    };
    return (
        <Grid item sx={styles(theme).container}>
            <Paper sx={styles(theme).paper}>
                <Typography variant="body1" sx={styles(theme).title}>
                    {categories}
                </Typography>
            </Paper>
            <Paper>
                <Collapse in={collapse} collapsedSize={height}>
                    <Grid container sx={styles(theme).collectionsGrid} ref={ScrollRef}>
                        {collectionsForCategory().map((collection) => (
                            <PublisherCollection collection={collection} key={collection.id} />
                        ))}
                    </Grid>
                </Collapse>
                <Grid sx={styles(theme).expandIconGrid}>
                    <IconButton sx={styles(theme).iconButton} onClick={handleCollapse}>
                        {collapse ? <ExpandCircleDown sx={{ transform: "rotate(180deg)", color: theme.palette.primary.main, fontSize: "2.2rem" }} /> : <ExpandCircleDown sx={{ color: theme.palette.primary.main, fontSize: "2.2rem" }} />}
                    </IconButton>
                </Grid>
            </Paper>
        </Grid>
    );
}
export default Categories;
