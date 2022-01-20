import { Box, Grid, Icon, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logoFooter from "../../public/GGNImage.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const pages = ["About Us", "Collectors", "Collections", "Publishers", "News"];
const styles = (theme) => ({
    exploreText: {
        fontWeight: 700,
        fontSize: "50px",
        color: "white",
        marginBottom: "15px",
        [theme.breakpoints.down("md")]: {
            marginBottom: "40px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "30px",
            marginBottom: "35px",
        },
    },
    sites: {
        fontWeight: 600,
        fontSize: "14px",
        paddingRight: "10px",
        color: "white",
        marginBottom: "15px",
        [theme.breakpoints.down("md")]: {
            marginBottom: "20px",
        },
        "&:hover": {
            cursor: "pointer",
        },
    },
    socialNetworksGrid: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    socialNetworksText: {
        fontWeight: 400,
        fontSize: "14px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        color: "white",
        marginBottom: "20px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
        },
    },
    copyright: {
        fontWeight: 400,
        fontSize: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },
    copyrightGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
    },

    container: {
        backgroundColor: theme.palette.primary.main,
        paddingTop: "40px",
        width: "100%",
        padding: "40px",
    },
    grid: {
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
            alignItems: "flex-start",
        },
    },

    socialMediaIcon: {
        marginRight: "7px",
    },
    logo: {
        position: "relative",
        marginTop: 0,
        marginBottom: "55px",
        height: "130px",
        width: "220px",
        [theme.breakpoints.down("md")]: {
            height: "110px",
            width: "170px",
            marginBottom: "20px",
        },
        [theme.breakpoints.down("sm")]: {
            height: "80px",
            width: "130px",
        },
    },
});

function Footer() {
    const theme = useTheme();
    const date = new Date().getFullYear();
    return (
        <Grid sx={styles(theme).container} container justifyContent="center" alignItems="flex-end">
            <Grid //prvi lijevi blok
                item
                container
                sx={styles(theme).grid}
                xl={3}
                lg={4}
                sm={5}
                xs={7}
            >
                <Box sx={styles(theme).logo}>
                    <Image src={logoFooter} alt="GGN" layout="fill" objectFit="contain" />
                </Box>
                <Grid container direction="row">
                    <Grid item sx={styles(theme).socialNetworksGrid} md={6} xs={12}>
                        <Typography variant="body1" sx={styles(theme).socialNetworksText}>
                            <Icon sx={styles(theme).socialMediaIcon}>email_icon</Icon>
                            gotgotneed@fesb.hr
                        </Typography>
                        <Typography variant="body1" sx={styles(theme).socialNetworksText}>
                            <Icon sx={styles(theme).socialMediaIcon}>call_icon</Icon>
                            +385 21 508 302
                        </Typography>
                        <Typography variant="body1" sx={styles(theme).socialNetworksText}>
                            <TwitterIcon sx={styles(theme).socialMediaIcon} />
                            @GotGotNeed
                        </Typography>
                    </Grid>
                    <Grid item sx={styles(theme).socialNetworksGrid} md={6} xs={12}>
                        <Typography variant="body1" sx={styles(theme).socialNetworksText}>
                            <FacebookIcon sx={styles(theme).socialMediaIcon} />
                            @GotGotNeed
                        </Typography>
                        <Typography variant="body1" sx={styles(theme).socialNetworksText}>
                            <InstagramIcon sx={styles(theme).socialMediaIcon} />
                            @GotGotNeed
                        </Typography>
                        <Typography variant="body1" sx={styles(theme).socialNetworksText}>
                            <LinkedInIcon sx={styles(theme).socialMediaIcon} />
                            @GotGotNeed
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container sx={styles(theme).grid} xl={1} md={2} xs={4}>
                <Typography variant="h3" sx={styles(theme).exploreText}>
                    Explore
                </Typography>
                <Grid>
                    <Link href={{ pathname: "/" }} passHref>
                        <Typography sx={styles(theme).sites}>Home</Typography>
                    </Link>
                    {pages.map((page, index) => (
                        <Link href={{ pathname: "/[page]" }} as={`/${page.replace(/\s+/g, "")}`} passHref key={index}>
                            <Typography sx={styles(theme).sites}>{page}</Typography>
                        </Link>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12} sx={styles(theme).copyrightGrid}>
                <Typography variant="caption" sx={styles(theme).copyright}>
                    Copyright @ {date} GotGotNeed. All rights reserved.
                </Typography>
            </Grid>
        </Grid>
    );
}
export default Footer;
