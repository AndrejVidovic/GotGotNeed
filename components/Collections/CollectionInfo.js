import { Grid, Typography, useTheme } from "@mui/material";
import UserCollectionList from "./UserCollectionList";
const styles = (theme) => ({
    infoValues: {
        fontSize: "16px",
        color: "#616161",
        paddingLeft: "0.5rem",
    },
    infoGrid1: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    info: {
        fontWeight: 700,
        fontSize: "16px",
        marginBottom: "0.1rem",
    },
    title: {
        fontWeight: 700,
        fontSize: "75px",
        [theme.breakpoints.between("sm", "lg")]: {
            fontSize: "60px",
        },
        [theme.breakpoints.between("xs", "sm")]: {
            fontSize: "40px",
        },
        marginBottom: "1.5rem",
        wordBreak: "break-word",
    },
    list: {
        fontWeight: 400,
        fontSize: "16px",
    },
    glass: {
        borderRadius: theme.shape.borderRadius + "px",
        boxShadow: theme.shadows[2],
        padding: "1rem",
        marginTop: "2rem",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    UserCollectionListBig: {
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
});
function CollectionInfo({ collection }) {
    const theme = useTheme();
    return (
        <>
            <Typography variant="h1" sx={styles(theme).title}>
                {collection.name}
            </Typography>
            <Grid item sx={styles(theme).infoGrid1}>
                <Typography variant="body1" sx={styles(theme).info}>
                    Publisher:
                </Typography>
                <Typography sx={styles(theme).infoValues}>{collection.publisher}</Typography>
            </Grid>
            <Grid item sx={styles(theme).infoGrid1}>
                <Typography variant="body1" sx={styles(theme).info}>
                    Number of stickers:
                </Typography>
                <Typography sx={styles(theme).infoValues}>{collection.numberOfStickers}</Typography>
            </Grid>
            <Grid item sx={styles(theme).infoGrid1}>
                <Typography variant="body1" sx={styles(theme).info}>
                    Release Year:
                </Typography>
                <Typography sx={styles(theme).infoValues}>{collection.releaseYear}</Typography>
            </Grid>
            <Grid item sx={styles(theme).infoGrid1}>
                <Typography variant="body1" sx={styles(theme).info}>
                    Categories:
                </Typography>
                <Grid item sx={{ display: "flex", flexWrap: "wrap" }}>
                    {collection.categories.map((category) => (
                        <Typography sx={styles(theme).infoValues} key={category}>
                            {category}
                        </Typography>
                    ))}
                </Grid>
            </Grid>
            <Grid sx={styles(theme).UserCollectionListBig}>
                <UserCollectionList></UserCollectionList>
            </Grid>
        </>
    );
}
export default CollectionInfo;
