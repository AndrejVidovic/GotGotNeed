import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Card,
    CardContent,
    CardMedia,
    useTheme,
    Grid,
    Paper,
    Typography,
    IconButton,
    Collapse,
} from "@mui/material";
import Image from "next/image";
import PublisherCollection from "../../public/PublisherCollection.png";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSharp } from "@fortawesome/free-solid-svg-icons";
import { ExpandCircleDown } from "@mui/icons-material";
import { useState } from "react";

const styles = (theme) => ({
    root: {
        height: "25rem",
        width: "17rem",
        display: "flex",
        flexDirection: "column",
        margin: "1rem auto",
    },
    media: {
        width: "fill-available",
        height: "65%",
    },
    media1: {
        width: "fill-available",
        height: "35%",
    },
    imageContainer: {
        width: "100%",
        height: "100%",
    },
    content: {
        width: "100%",
        padding: 0,
        height: "35%",
        "&:last-child": {
            paddingBottom: 0,
        },
    },
    content1: {
        width: "100%",
        padding: 0,
        height: "65%",
        "&:last-child": {
            paddingBottom: 0,
        },
    },
    title: {
        fontWeight: 700,
        fontSize: "1.5rem",
        display: "flex",
        flexWrap: "wrap",
        width: "10rem",
        lineHeight: "1.5rem",
    },
    expandIcon: {
        transform: "rotate(180deg)",
        color: theme.palette.primary.main,
        fontSize: "2.2rem",
    },
    titleGrid: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-around",
        paddingLeft: "1rem",
    },
    paper: {
        height: "9rem",
        display: "flex",
        flexDirection: "column",
        padding: "2rem 1rem 0.5rem 1rem",
        position: "relative",
        justifyContent: "space-between",
    },
    paper1: {
        height: "16.5rem",
        display: "flex",
        flexDirection: "column",
        padding: "2rem 1rem 0.5rem 1rem",
        position: "relative",
        justifyContent: "space-between",
    },
    halfCircle: {
        position: "absolute",
        bottom: 20,
        right: 0,
        left: "auto",
        display: "flex",
        justifyContent: "flex-end",
    },
    triangle2: {
        position: "absolute",
        bottom: 0,
        left: 10,
        display: "flex",
        justifyContent: "flex-start",
        [theme.breakpoints.down("md")]: {
            left: 40,
        },
        zIndex: 0,
    },
    iconButton: {
        zIndex: 10,
        paddingBottom: 0,
    },
    iconButtonGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    collapseGrid: {
        paddingLeft: "1rem",
    },
    moreInfo: {
        display: "flex",
        alignItems: "center",
    },
    info: {
        fontWeight: 700,
        fontSize: "17px",
        marginBottom: "0.1rem",
    },
    infoValues: {
        fontSize: "17px",
        marginBottom: "0.1rem",
        color: "#616161",
        paddingLeft: "0.1rem",
    },
});
function CollectionsCard({ collection, favorite, setFavorite }) {
    const theme = useTheme();
    const image = PublisherCollection;
    const [collapse, setCollapse] = useState(false);

    const HandleClickFavorite = (e) => {
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
        <Card sx={styles(theme).root}>
            <CardMedia
                sx={collapse ? styles(theme).media1 : styles(theme).media}
            >
                <Grid sx={styles(theme).imageContainer}>
                    <Image src={image} alt="collection" layout="responsive" />
                </Grid>
            </CardMedia>
            <CardContent
                sx={collapse ? styles(theme).content1 : styles(theme).content}
            >
                <Paper
                    sx={collapse ? styles(theme).paper1 : styles(theme).paper}
                >
                    <Grid item sx={styles(theme).titleGrid}>
                        <Typography sx={styles(theme).title}>
                            {collection.title}
                        </Typography>
                        <FontAwesomeIcon
                            icon={
                                favorite.includes(collection.id)
                                    ? faStarSharp
                                    : faStar
                            }
                            size="2x"
                            color={
                                favorite.includes(collection.id)
                                    ? theme.palette.secondary.light
                                    : "#D0D0D0"
                            }
                            style={{
                                filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.4))",
                                zIndex: 10,
                            }}
                            onClick={(e) => HandleClickFavorite(e)}
                        />
                    </Grid>
                    <Grid sx={styles(theme).collapseGrid}>
                        <Collapse
                            in={collapse}
                            sx={{
                                position: "absolute",
                                bottom: 52,
                                paddingLeft: "0.5rem",
                            }}
                        >
                            <Grid sx={styles(theme).moreInfo}>
                                <Typography sx={styles(theme).info}>
                                    Release Year:
                                </Typography>
                                <Typography sx={styles(theme).infoValues}>
                                    {collection.releaseYear}
                                </Typography>
                            </Grid>
                            <Grid sx={styles(theme).moreInfo}>
                                <Typography sx={styles(theme).info}>
                                    Number of stickers:
                                </Typography>
                                <Typography sx={styles(theme).infoValues}>
                                    {collection.numberOfStickers}
                                </Typography>
                            </Grid>
                            <Grid sx={styles(theme).moreInfo}>
                                <Typography sx={styles(theme).info}>
                                    Publisher:
                                </Typography>
                                <Typography sx={styles(theme).infoValues}>
                                    {collection.publisher}
                                </Typography>
                            </Grid>
                            <Grid sx={styles(theme).moreInfo}>
                                <Typography sx={styles(theme).info}>
                                    Category:
                                </Typography>
                                <Typography sx={styles(theme).infoValues}>
                                    {collection.category}
                                </Typography>
                            </Grid>
                        </Collapse>
                    </Grid>
                    <Grid sx={styles(theme).iconButtonGrid}>
                        <IconButton
                            sx={styles(theme).iconButton}
                            onClick={handleCollapse}
                        >
                            <ExpandCircleDown sx={styles(theme).expandIcon} />
                        </IconButton>
                    </Grid>
                    <Grid container sx={styles(theme).halfCircle}>
                        <Image
                            src="/Circle.png"
                            width={30}
                            height={80}
                            alt="circle"
                        />
                    </Grid>
                    <Grid container sx={styles(theme).triangle2}>
                        <Image
                            src="/Triangle.png"
                            width={120}
                            height={40}
                            alt="triangle"
                        />
                    </Grid>
                </Paper>
            </CardContent>
        </Card>
    );
}
export default CollectionsCard;
