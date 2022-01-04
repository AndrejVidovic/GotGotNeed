import { Grid, Icon, Toolbar, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logoFooter from "../../public/logoS.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const pages = ["About Us", "Collectors", "Collections", "Publishers", "Blog"];
const styles = (theme) => ({
    exploreText: {
        fontWeight: 700,
        fontSize: "40px",
        color: "white",
    },
    sites: {
        fontWeight: 600,
        fontSize: "1.7vh",
        ":hover": {
            cursor: "pointer",
        },
        padding: "2px 0 2px 10px",
        color: "white",
    },
    socialNetworksGrid: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    socialNetworksText: {
        fontWeight: 400,
        fontSize: "1.4vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5vh",
        color: "white",
    },
    copyright: {
        fontWeight: 400,
        fontSize: "1vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },
    copyrightGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    toolbar: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingBottom: "2vh",
    },
    container: {
        backgroundColor: theme.palette.primary.main,
        paddingTop: "4vh",
        width: "100%",
    },
    grid: {
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
            alignItems: "flex-start",
        },
    },
    gridSM: {
        display: "flex",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
});

function Footer() {
    const theme = useTheme();
    const date = new Date().getFullYear();
    return (
        <Grid sx={styles(theme).container}>
            <Toolbar sx={styles(theme).toolbar}>
                <Grid
                    item
                    container
                    sx={styles(theme).grid}
                    xl={3}
                    lg={4}
                    md={5}
                    sm={7}
                    xs={7}
                >
                    <Image src={logoFooter} alt="GGN" layout="fixed" />
                    <Grid sx={styles(theme).gridSM}>
                        <Grid
                            item
                            sx={styles(theme).socialNetworksGrid}
                            xl={6}
                            lg={6}
                            md={7}
                            sm={9}
                            xs={12}
                        >
                            <Typography
                                variant="body1"
                                sx={styles(theme).socialNetworksText}
                            >
                                <Icon>email_icon</Icon>
                                gotgotneed@fesb.hr
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={styles(theme).socialNetworksText}
                            >
                                <Icon>call_icon</Icon>
                                +385 021 508 302
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={styles(theme).socialNetworksText}
                            >
                                <TwitterIcon />
                                @GotGotNeed
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            sx={styles(theme).socialNetworksGrid}
                            xl={4}
                            lg={3}
                            md={3}
                            sm={8}
                            xs={4}
                        >
                            <Typography
                                variant="body1"
                                sx={styles(theme).socialNetworksText}
                            >
                                <FacebookIcon />
                                @GotGotNeed
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={styles(theme).socialNetworksText}
                            >
                                <InstagramIcon />
                                @GotGotNeed
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={styles(theme).socialNetworksText}
                            >
                                <LinkedInIcon />
                                @GotGotNeed
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    sx={styles(theme).grid}
                    xl={1}
                    lg={2}
                    md={2}
                    sm={2}
                    xs={5}
                >
                    <Typography variant="h3" sx={styles(theme).exploreText}>
                        Explore
                    </Typography>
                    <Grid>
                        <Link href={{ pathname: "/" }} passHref>
                            <Typography sx={styles(theme).sites}>
                                Home
                            </Typography>
                        </Link>
                        {pages.map((page, index) => (
                            <Link
                                href={{ pathname: "/[page]" }}
                                as={`/${page.replace(/\s+/g, "")}`}
                                passHref
                                key={index}
                            >
                                <Typography sx={styles(theme).sites}>
                                    {page}
                                </Typography>
                            </Link>
                        ))}
                    </Grid>
                </Grid>
            </Toolbar>
            <Grid sx={styles(theme).copyrightGrid}>
                <Typography variant="caption" sx={styles(theme).copyright}>
                    Copyright @ {date} GotGotNeed. All rights reserved.
                </Typography>
            </Grid>
        </Grid>
    );
}
export default Footer;
