import { Grid, Typography, useTheme } from "@mui/material";
import Head from "next/head";
import Title from "../../components/Title";
import Glass from "../../components/Glass";
import FilterCollections from "../../components/Collections/FilterCollections";
const styles = (theme) => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "7rem",
        flexDirection: "column",
    },
    glassContainer: {
        width: "100%",
        marginTop: "4vh",
    },
    filterGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
    },
});
function Collections() {
    const theme = useTheme();
    return (
        <>
            <Head>
                <title>Collections</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Grid container sx={styles(theme).container}>
                <Title
                    title="Collections"
                    subtitle="Endless albums of stickers."
                />
                <Grid
                    item
                    xl={6}
                    lg={8}
                    md={8}
                    sm={10}
                    xs={10}
                    sx={styles(theme).glassContainer}
                >
                    <Glass color={0}>
                        <Grid sx={styles(theme).filterGrid}>
                            <FilterCollections></FilterCollections>
                        </Grid>
                    </Glass>
                </Grid>
            </Grid>
        </>
    );
}
export default Collections;
