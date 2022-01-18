import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, CardMedia, useTheme, Grid, Box, Typography, IconButton, Collapse } from "@mui/material";
import Image from "next/image";
import { ExpandCircleDown, StarRounded } from "@mui/icons-material";
import { useState } from "react";

const styles = (theme) => ({
    root: {
        borderRadius: theme.shape.borderRadius + "px",
        overflow: "hidden",
        boxShadow: theme.shadows[1],
        position: "relative",
        height: "400px",
        width: "100%",
        "&:hover": {
            cursor: "pointer",
        },
    },
    media: {
        width: "100%",
        height: "65%",
    },
    content: {
        width: "100%",
        padding: 0,
    },
    collapse: {
        borderRadius: theme.shape.borderRadius + "px",
        backgroundColor: "white",
        width: "100%",
        padding: "3rem",
        paddingBottom: "5rem",
        position: "absolute",
        bottom: 0,
    },
    title: {
        fontWeight: 700,
        fontSize: "22px",
        width: "70%",
        lineHeight: "26px",
        // overflow: "hidden",
        // whiteSpace: "nowrap",
        // textOverflow: "ellipsis",
    },
    titleOpen: {
        overflow: "unset",
        whiteSpace: "unset",
        textOverflow: "unset",
    },
    expandIcon: {
        color: theme.palette.primary.main,
        fontSize: "2.5rem",
    },
    titleGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "3rem",
        width: "100%",
        marginBottom: "2rem",
    },

    halfCircle: {
        position: "absolute",
        bottom: 30,
        right: -45,
        left: "auto",
        display: "flex",
        justifyContent: "flex-end",
        zIndex: 10,
    },
    triangleBottom: {
        position: "absolute",
        bottom: -60,
        left: "60%",
        display: "flex",
        justifyContent: "flex-start",
        zIndex: 10,
    },
    iconButton: {
        zIndex: 12,
        margin: "0 auto",
    },
    iconButtonBox: {
        width: "100%",
        backgroundColor: "white",
        position: "absolute",
        bottom: "0",
        height: "4rem",
        textAlign: "center",
    },
    moreInfo: {
        display: "flex",
        alignItems: "flex-start",
    },
    info: {
        fontWeight: 700,
        fontSize: "16px",
        marginBottom: "0.1rem",
    },
    infoValues: {
        fontSize: "16px",
        marginBottom: "0.1rem",
        color: "#616161",
        paddingLeft: "0.75rem",
    },
    star: {
        fontSize: "4rem",
        color: theme.palette.grey[200],
        stroke: theme.palette.grey[400],
        transition: "all 0.5s ease ",
        "&:hover": {
            transform: "scale(1.2)",
        },
    },
    starClicked: {
        color: theme.palette.secondary.light,
        stroke: theme.palette.secondary.main,
    },
});
function CollectionsCard({ collection, favorite, setFavorite }) {
    const theme = useTheme();
    const [collapse, setCollapse] = useState(false);

    const handleClickFavorite = (e) => {
        e.preventDefault();
        let tempFavorite = [];
        if (!favorite.includes(collection.id)) {
            tempFavorite = [...favorite, collection.id];
        } else {
            tempFavorite = favorite.filter((fav) => fav !== collection.id);
        }
        setFavorite(tempFavorite);
    };
    const handleCollapse = () => {
        setCollapse(!collapse);
    };
    return (
        <Grid item xl={4} md={6} xs={12}>
            <Card sx={styles(theme).root}>
                <CardMedia sx={styles(theme).media}>
                    <Image src={collection.coverPhoto.url} alt="collection" layout="fill" objectFit="cover" />
                </CardMedia>
                <CardContent sx={styles(theme).content}>
                    <Collapse in={collapse} collapsedSize={"130px"} sx={styles(theme).collapse}>
                        <Grid item sx={styles(theme).titleGrid}>
                            <Typography sx={collapse ? { ...styles(theme).title, ...styles(theme).titleOpen } : styles(theme).title}>{collection.name}</Typography>
                            <StarRounded sx={favorite.includes(collection.id) ? { ...styles(theme).star, ...styles(theme).starClicked } : styles(theme).star} onClick={(e) => handleClickFavorite(e)} />
                        </Grid>
                        <Grid item xs={12} sx={styles(theme).moreInfo}>
                            <Typography sx={styles(theme).info}>Release Year:</Typography>
                            <Typography sx={styles(theme).infoValues}>{collection.releaseYear}</Typography>
                        </Grid>
                        <Grid item xs={12} sx={styles(theme).moreInfo}>
                            <Typography sx={styles(theme).info}>Number of stickers:</Typography>
                            <Typography sx={styles(theme).infoValues}>{collection.numberOfStickers}</Typography>
                        </Grid>
                        <Grid item xs={12} sx={styles(theme).moreInfo}>
                            <Typography sx={styles(theme).info}>Publisher:</Typography>
                            <Typography sx={styles(theme).infoValues}>{collection.publisher}</Typography>
                        </Grid>
                        <Grid item xs={12} sx={styles(theme).moreInfo}>
                            <Typography sx={styles(theme).info}>Categories:</Typography>
                            <Typography sx={styles(theme).infoValues}>{collection.categories.map((category) => category).join(", ")}</Typography>
                        </Grid>
                    </Collapse>

                    <Grid container sx={styles(theme).halfCircle}>
                        <Image src="/decoCircle.png" width={75} height={75} alt="circle" />
                    </Grid>
                    <Grid container sx={styles(theme).triangleBottom}>
                        <Image src="/decoTriangle.png" width={95} height={95} alt="triangle" />
                    </Grid>
                    <Box sx={styles(theme).iconButtonBox}>
                        <IconButton sx={styles(theme).iconButton} onClick={handleCollapse}>
                            <ExpandCircleDown sx={collapse ? { ...styles(theme).expandIcon } : { ...styles(theme).expandIcon, transform: "rotate(180deg)" }} />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
}
export default CollectionsCard;
