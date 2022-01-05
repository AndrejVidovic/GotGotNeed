import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    useTheme,
} from "@mui/material";
import Image from "next/image";

const styles = (theme) => ({
    card: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "rgba(219, 219, 219, 0.08)",
        padding: 0,
        margin: "3rem 0.5rem 3rem 0.5rem",
        boxShadow: theme.shadows[4],
        width: "100rem",
    },
    title: {
        fontWeight: 700,
        fontSize: "19px",
        marginBottom: "0.5rem",
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
        paddingLeft: "0.1rem",
    },
    infoGrid: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    imageContainer: {
        position: "relative",
        width: "100%",
        height: "100%",
    },
    media: {
        width: "fill-available",
        maxWidth: "35%",
        minWidth: "35%",
        padding: "0.4rem 0 0.4rem 0.4rem",
    },
    content: {
        padding: "16px 0 16px 20px",
    },
});
function PublisherCollection({ collection }) {
    const theme = useTheme();
    return (
        <Card sx={styles(theme).card}>
            <CardMedia sx={styles(theme).media}>
                <Grid sx={styles(theme).imageContainer}>
                    <Image
                        src="/PublisherCollection.png"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                        alt={collection.id}
                    />
                </Grid>
            </CardMedia>
            <CardContent sx={styles(theme).content}>
                <Typography variant="body1" sx={styles(theme).title}>
                    {collection.title}
                </Typography>
                <Grid sx={styles(theme).infoGrid}>
                    <Typography variant="body1" sx={styles(theme).info}>
                        Release year:
                    </Typography>
                    <Typography sx={styles(theme).infoValues}>
                        {collection.releaseYear}
                    </Typography>
                </Grid>
                <Grid sx={styles(theme).infoGrid}>
                    <Typography variant="body1" sx={styles(theme).info}>
                        Number of stickers:
                    </Typography>
                    <Typography sx={styles(theme).infoValues}>
                        {collection.numberOfSticker}
                    </Typography>
                </Grid>
                <Grid sx={styles(theme).infoGrid}>
                    <Typography variant="body1" sx={styles(theme).info}>
                        Publisher:{" "}
                    </Typography>
                    <Typography sx={styles(theme).infoValues}>
                        {collection.publisher}
                    </Typography>
                </Grid>
                <Grid sx={styles(theme).infoGrid}>
                    <Typography variant="body1" sx={styles(theme).info}>
                        Category:{" "}
                    </Typography>
                    <Typography sx={styles(theme).infoValues}>
                        {collection.category}
                    </Typography>
                </Grid>
            </CardContent>
        </Card>
    );
}
export default PublisherCollection;
