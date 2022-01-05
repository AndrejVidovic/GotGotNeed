import { Grid, Paper, Typography, useTheme } from "@mui/material";
import dummyPublisherCollections from "../../fakeData/Publishers/PublisherCollections.json";
import PublisherCollection from "./PublisherCollection";

const styles = (theme) => ({
    container: {
        marginTop: "2rem",
        // marginBottom:"2rem"
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
});

function Categories({ categories }) {
    const theme = useTheme();
    const collections = dummyPublisherCollections;
    return (
        <Grid item sx={styles(theme).container}>
            <Paper sx={styles(theme).paper}>
                <Typography variant="body1" sx={styles(theme).title}>
                    {categories}
                </Typography>
            </Paper>
            <Paper>
                <Grid
                    container
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}
                >
                    {collections.map((collection) => (
                        <PublisherCollection
                            collection={collection}
                            key={collection.id}
                        />
                    ))}{" "}
                </Grid>
            </Paper>
        </Grid>
    );
}
export default Categories;
