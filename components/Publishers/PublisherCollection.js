import { Card, CardContent, CardMedia, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";

const styles = (theme) => ({
    card: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        padding: 0,
        margin: "3rem 0.6rem 3rem 0.6rem",
        [theme.breakpoints.down("lg")]: {
            margin: "1rem 0.4rem 1rem 0.4rem",
        },
        [theme.breakpoints.down("xl")]: {
            margin: "1rem 0.6rem 1rem 0.6rem",
        },
        boxShadow: theme.shadows[4],
        width: "100%",
    },
    title: {
        fontWeight: 700,
        fontSize: "19px",
        marginBottom: "0.5rem",
        height: "3rem",
        alignItems: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    info: {
        fontWeight: 700,
        fontSize: "12px",
        marginBottom: "0.3rem",
    },
    infoValues: {
        fontSize: "12px",
        marginBottom: "0.3rem",
        color: "#616161",
        paddingLeft: "0.2rem",
    },
    infoGrid: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    imageContainer: {
        position: "relative",
        width: "100%",
        height: "95%",
    },
    media: {
        width: "fill-available",
        maxWidth: "35%",
        minWidth: "35%",
        padding: "0.4rem 0 0.4rem 0.4rem",
        display: "flex",
        alignItems: "center",
    },
    content: {
        padding: "16px 0 16px 20px",
        width: "16rem",
    },
});
function PublisherCollection({ collection }) {
    const theme = useTheme();
    return (
        <Grid container item xs={12} md={6} lg={4} sx={styles(theme).collectionsGrid}>
            <Card sx={styles(theme).card}>
                <CardMedia sx={styles(theme).media}>
                    <Grid sx={styles(theme).imageContainer}>
                        <Image src={collection.coverPhoto.url} layout="fill" objectFit="cover" alt={collection.id} />
                    </Grid>
                </CardMedia>
                <CardContent sx={styles(theme).content}>
                    <Typography variant="body1" sx={styles(theme).title} aria-label={collection.name}>
                        {collection.name}
                    </Typography>
                    <Grid sx={styles(theme).infoGrid}>
                        <Typography variant="body1" sx={styles(theme).info}>
                            Release year:
                        </Typography>
                        <Typography sx={styles(theme).infoValues}>{collection.releaseYear}</Typography>
                    </Grid>
                    <Grid sx={styles(theme).infoGrid}>
                        <Typography variant="body1" sx={styles(theme).info}>
                            Number of stickers:
                        </Typography>
                        <Typography sx={styles(theme).infoValues}>{collection.numberOfStickers}</Typography>
                    </Grid>
                    <Grid sx={styles(theme).infoGrid}>
                        <Typography variant="body1" sx={styles(theme).info}>
                            Publisher:
                        </Typography>
                        <Typography sx={styles(theme).infoValues}>{collection.publisher}</Typography>
                    </Grid>
                    <Grid sx={styles(theme).infoGrid}>
                        <Typography variant="body1" sx={styles(theme).info}>
                            Category:{" "}
                        </Typography>
                        <Typography sx={styles(theme).infoValues}>{collection.categories.map((category) => category).join(", ")}</Typography>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}
export default PublisherCollection;
