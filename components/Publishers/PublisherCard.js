import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Typography,
    useTheme,
    Chip,
} from "@mui/material";
import Image from "next/image";
import publ1 from "../../public/KrašPublisher.png";
import publ2 from "../../public/PaniniPublisher.png";
import publ3 from "../../public/ToppsPublisher.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSharp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const styles = (theme) => ({
    root: {
        height: "24rem",
        display: "flex",
        flexDirection: "column",
        width: "17rem",
    },
    media: {
        width: "fill-available",
        height: "50%",
    },
    imageContainer: {
        position: "relative",
        width: "100%",
        height: "100%",
        background:
            "linear-gradient(180deg, rgba(97, 97, 97, 0.2) 0%, rgba(97, 97, 97, 0) 100%)",
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
        fontSize: "1.5rem",
    },
    publisherCountry: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        marginBottom: "0.4rem",
    },
    countryTitle: {
        fontSize: "1.1rem",
        color: "#616161",
        paddingLeft: "0.4rem",
    },
    paper: {
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "1rem 0rem 0rem 2rem",
        position: "relative",
    },
    chipsContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
    },
    triangleGrid: {
        position: "absolute",
        bottom: 0,
        left: 20,
    },
    circleGrid: {
        width: "auto",
        position: "absolute",
        right: 0,
        bottom: 24,
    },
});

function PublisherCard({ publisher, favorite, setFavorite }) {
    const theme = useTheme();

    const images = [publ1, publ2, publ3];

    const HandleClick = (e) => {
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
        <Link
            href={{
                pathname: "Publishers/[Publisher]",
                query: {
                    id: publisher.id,
                    title: publisher.title,
                    types: publisher.types,
                    collections: publisher.collections,
                    description: publisher.description,
                    founded: publisher.founded,
                },
            }}
            as={`/Publishers/${publisher.title}`}
            passHref
        >
            <Card sx={styles(theme).root}>
                <CardMedia sx={styles(theme).media}>
                    <Grid sx={styles(theme).imageContainer}>
                        <Image
                            src={images[publisher.id % 3]}
                            layout="responsive"
                            alt={publisher.title}
                        />
                    </Grid>
                </CardMedia>
                <CardContent sx={styles(theme).content}>
                    <Paper sx={styles(theme).paper}>
                        <Grid item sx={{ marginTop: "1rem" }}>
                            <FontAwesomeIcon
                                icon={
                                    favorite.includes(publisher.id)
                                        ? faStarSharp
                                        : faStar
                                }
                                size="3x"
                                color={
                                    favorite.includes(publisher.id)
                                        ? theme.palette.secondary.light
                                        : "#D0D0D0"
                                }
                                style={{
                                    filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.4))",
                                }}
                                onClick={(e) => HandleClick(e)}
                            />
                        </Grid>
                        <Grid item sx={{ margin: "0.7rem" }}>
                            <Typography
                                sx={styles(theme).title}
                                variant="body1"
                            >
                                {publisher.title}
                            </Typography>
                            <Grid sx={styles(theme).publisherCountry}>
                                <Image
                                    src="https://flagcdn.com/24x18/hr.png"
                                    srcset="https://flagcdn.com/48x36/hr.png 2x,
                                        https://flagcdn.com/72x54/hr.png 3x"
                                    width="24"
                                    height="18"
                                    alt="CountryFlag"
                                />
                                <Typography
                                    variant="body1"
                                    sx={styles(theme).countryTitle}
                                >
                                    {publisher.country}
                                </Typography>
                            </Grid>
                            <Grid container sx={styles(theme).chipsContainer}>
                                {publisher.types.map((typeName) => (
                                    <Chip
                                        key={typeName}
                                        size="small"
                                        label={typeName}
                                        sx={{ margin: "0.15rem" }}
                                    />
                                ))}
                            </Grid>
                        </Grid>
                        <Grid container sx={styles(theme).circleGrid}>
                            <Image
                                src="/Circle.png"
                                width={50}
                                height={100}
                                alt="circle"
                            />
                        </Grid>
                        <Grid container sx={styles(theme).triangleGrid}>
                            <Image
                                src="/Triangle.png"
                                width={100}
                                height={50}
                                alt="circle"
                            />
                        </Grid>
                    </Paper>
                </CardContent>
            </Card>
        </Link>
    );
}
export default PublisherCard;
