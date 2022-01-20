import { Card, CardContent, CardMedia, Grid, Paper, Typography, useTheme, Chip, Box } from "@mui/material";
import Image from "next/image";
import { StarRounded } from "@mui/icons-material";
import Link from "next/link";

const styles = (theme) => ({
    root: {
        borderRadius: theme.shape.borderRadius + "px",
        boxShadow: theme.shadows[1],
        position: "relative",
        height: "350px",
        width: "100%",
        transition: "all 0.3s ease",
        "&:hover": {
            transform: "scale(1.03)",
            cursor: "pointer",
        },
    },
    media: {
        width: "fill-available",
        height: "50%",
    },
    imageContainer: {
        position: "relative",
        width: "100%",
        height: "100%",
        background: "linear-gradient(180deg, rgba(140, 140, 140, 0.2) 0%, rgba(97, 97, 97, 0) 100%)",
    },
    content: {
        width: "100%",
        padding: 0,
        height: "50%",
        "&:last-child": {
            paddingBottom: 0,
        },
    },
    title: {
        fontWeight: 700,
        fontSize: "20px",
        textShadow: theme.shadows[4],
    },
    publisherCountry: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        margin: "0.5rem 0 1rem 0",
    },
    countryTitle: {
        fontSize: "1.1rem",
        color: theme.palette.grey[700],
        paddingLeft: "0.5rem",
    },
    paper: {
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "1rem 1.1rem 0rem 1.1rem",
        position: "relative",
        overflow: "hidden",
        [theme.breakpoints.between("sm", "md")]: {
            padding: "1rem 0rem 0rem 0rem",
        },
    },
    chipsContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
    },
    triangleGrid: {
        position: "absolute",
        bottom: -60,
        left: 20,
    },
    circleGrid: {
        width: "auto",
        position: "absolute",
        right: -40,
        bottom: 50,
    },
    chip: {
        background: "rgba(219, 219, 219, 0.25)",
        border: "1px solid " + theme.palette.grey[200],
        margin: "0.2rem",
    },
    star: {
        fontSize: "5rem",
        color: theme.palette.grey[200],
        stroke: theme.palette.grey[400],
        transition: "all 0.5s ease ",
        "&:hover": {
            transform: "scale(1.2)",
        },
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "4rem",
        },
        [theme.breakpoints.up("md")]: {
            margin: "0 1rem 0 0.5rem",
        },
    },
    starClicked: {
        color: theme.palette.secondary.light,
        stroke: theme.palette.secondary.main,
    },
});

function PublisherCard({ publisher, favorite, setFavorite }) {
    const theme = useTheme();
    //izvlačimo jedinstvene vrijednosti kategorija pripadajućih kolekcija/albuma
    let categories = [];
    for (let i = 0; i < publisher.collections.items.length; i++) {
        for (let j = 0; j < publisher.collections.items[i].categories.items.length; j++) {
            categories.push(publisher.collections.items[i].categories.items[j].name);
        }
    }
    let allUniqueCategories = [...new Set(categories)]; // samo jedinstvene vrijednosti
    let allCategories = [...new Set(categories)];
    if (allUniqueCategories.length > 4) {
        allUniqueCategories = [...allUniqueCategories.slice(0, 3), "Other..."];
    } else if (allUniqueCategories.length === 0) {
        allUniqueCategories = ["No categories."];
        allCategories = null;
    }

    const handleClick = (e) => {
        e.preventDefault();
        let tempFavorite = [];
        if (!favorite.includes(publisher.id)) {
            tempFavorite = [...favorite, publisher.id];
        } else {
            tempFavorite = favorite.filter((fav) => fav !== publisher.id);
        }
        setFavorite(tempFavorite);
    };
    return (
        <Grid item xl={4} sm={6} xs={12}>
            <Link href={`/Publishers/${publisher.slug}`} passHref>
                <Card sx={styles(theme).root}>
                    <CardMedia sx={styles(theme).media}>
                        <Grid sx={styles(theme).imageContainer}>
                            <Image src={publisher.logo.url} layout="fill" objectFit="contain" alt={publisher.name} />
                        </Grid>
                    </CardMedia>
                    <CardContent sx={styles(theme).content}>
                        <Paper sx={styles(theme).paper}>
                            <Grid item container sx={{ justifyContent: "center", marginTop: "1rem" }} xl={4} md={4} sm={4} xs={4}>
                                <StarRounded sx={favorite.includes(publisher.id) ? { ...styles(theme).star, ...styles(theme).starClicked } : styles(theme).star} onClick={(e) => handleClick(e)} />
                            </Grid>
                            <Grid item sx={{ marginTop: "1rem" }} xl={8} md={8} sm={8} xs={8}>
                                <Typography sx={styles(theme).title} variant="body1">
                                    {publisher.name}
                                </Typography>
                                <Grid sx={styles(theme).publisherCountry}>
                                    <Image src={`https://flagcdn.com/24x18/${publisher.locationIconUri}.png`} width="22" height="16" alt="CountryFlag" />
                                    <Typography variant="body1" sx={styles(theme).countryTitle}>
                                        {publisher.location}
                                    </Typography>
                                </Grid>
                                <Grid container sx={styles(theme).chipsContainer}>
                                    {allUniqueCategories.map((typeName) => (
                                        <Chip key={typeName} size="small" label={typeName} sx={styles(theme).chip} />
                                    ))}
                                </Grid>
                            </Grid>
                            <Box container sx={styles(theme).circleGrid}>
                                <Image src="/decoCircle.png" width={80} height={80} alt="circle" />
                            </Box>
                            <Box container sx={styles(theme).triangleGrid}>
                                <Image src="/decoTriangle.png" width={100} height={100} alt="triangle" />
                            </Box>
                        </Paper>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    );
}
export default PublisherCard;
