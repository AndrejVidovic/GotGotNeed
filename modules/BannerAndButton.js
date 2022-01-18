import homeBanner from "../public/homeBanner.png";
import { Button, Grid, useTheme, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = (theme) => ({
    bigBanner: {
        [theme.breakpoints.down("lg")]: {
            display: "none",
        },
    },
    bannerImage: {
        position: "relative",
        [theme.breakpoints.up("xl")]: {
            width: 770,
            height: 500,
        },
        [theme.breakpoints.between("md", "xl")]: {
            width: 560,
            height: 365,
        },
    },
    playIcon: {
        margin: "0 0 5px 15px",
        [theme.breakpoints.between("md", "xl")]: {
            margin: "0 0 2px 10px",
        },
    },
    tradeButton: {
        color: "white",
        backgroundColor: theme.palette.primary.main,
        width: "530px",
        textAlign: "center",
        textTransform: "none",
        fontSize: "28px",
        lineHeight: "28px",
        fontWeight: 700,
        padding: "25px 0",
        marginTop: "2rem",
        textShadow: theme.shadows[4],
        boxShadow: theme.shadows[1],
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
        [theme.breakpoints.between("md", "xl")]: {
            width: "380px",
            fontSize: "20px",
            lineHeight: "20px",
            padding: "15px 0",
            marginTop: "1.5rem",
        },
    },
});

const BannerAndButton = () => {
    const theme = useTheme();

    return (
        <Grid item container xs={6} direction="column" justifyContent="center" alignItems="center" sx={styles(theme).bigBanner}>
            <Grid item>
                <Box sx={styles(theme).bannerImage}>
                    <Image alt="banner" src={homeBanner} layout="fill" objectFit="contain" quality={60} />
                </Box>
            </Grid>
            <Grid item>
                <Link href="/Swap">
                    <Button sx={styles(theme).tradeButton}>
                        TRADE YOUR STICKERS
                        <FontAwesomeIcon icon={faPlay} size="28px" color="white" style={styles(theme).playIcon} />
                    </Button>
                </Link>
            </Grid>
        </Grid>
    );
};

export default BannerAndButton;
