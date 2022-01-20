import { Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import logo from "../public/GGNImage.png";
import Avatar from "../public/avatar.webp";
import StayInTouch from "../public/StayInTouch.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookSquare, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Layout/footer";
import GGNWhole from "../public/GGNWhole.png";
import Head from "next/head";
import Glass from "../components/Glass";
import Link from "next/link";

const styles = (theme) => ({
    gridContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "8vh",
        [theme.breakpoints.down("lg")]: {
            marginTop: "12vh",
        },
    },
    gridTitle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: 700,
        fontSize: "80px",
        [theme.breakpoints.down("md")]: {
            fontSize: "50px",
        },
    },
    subtitle: {
        fontWeight: 500,
        fontSize: "40px",
        color: "#616161",
        [theme.breakpoints.down("md")]: {
            fontSize: "25px",
        },
    },
    text: {
        fontWeight: 400,
        fontSize: "24px",
        textAlign: "justify",
        [theme.breakpoints.down("md")]: {
            fontSize: "16px",
            textAlign: "left",
            wordBreak: "break-all", //ovo jos razmisli
        },
        marginTop: "3rem",
    },
    iconContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        padding: "10px",
        width: "90px",
        height: "90px",
        cursor: "pointer",
    },
    glass: {
        margin: "10vh 0",
        [theme.breakpoints.down("md")]: {
            margin: "6vh 0",
        },
    },
    glassGrid: {
        marginTop: "5vh",
        marginBottom: "6vh",
        position: "relative",
        height: "auto",
        [theme.breakpoints.down("md")]: {
            marginBottom: "3vh",
        },
    },
    person: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "justify",
        [theme.breakpoints.down("md")]: {
            maeginBottom: "3vh",
        },
    },
    fullName: {
        fontWeight: 700,
        fontSize: "17px",
        margin: "2vh 0",
    },
    description: {
        fontWeight: 400,
        fontSize: "20px",
        marginBottom: "4vh",
        width: "250px",
        textAlign: "justify",
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
            width: "170px",
        },
    },
    GGNImage: {
        alignItems: "center",
        justifyContent: "center",
        padding: "4vh 0",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    logo: {
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    firstBlockOfIcons: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.up("sm")]: {
            justifyContent: "flex-end",
        },
    },
    secondBlockOfIcons: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.up("sm")]: {
            justifyContent: "flex-start",
        },
    },
    bold: {
        color: theme.palette.primary.dark,
    },
});

function AboutUs() {
    const theme = useTheme();
    return (
        <>
            <Head>
                <title>AboutUs</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Grid container sx={styles(theme).gridContainer}>
                <Grid container sx={styles(theme).gridTitle}>
                    <Grid item xl={3} lg={4} md={5} xs={10}>
                        <Typography variant="h1" sx={styles(theme).title}>
                            About Us
                        </Typography>
                        <Typography variant="h2" sx={styles(theme).subtitle}>
                            Find out who we are.
                        </Typography>
                    </Grid>
                    <Grid item xl={3} lg={4} md={5} xs={10} sx={styles(theme).logo}>
                        <Image src={logo} alt="GGN" layout="intrinsic" />
                    </Grid>
                </Grid>
                <Grid item xl={6} lg={8} xs={10}>
                    <Typography variant="body1" sx={styles(theme).text}>
                        Lorem ipsum dolor sit <b style={styles(theme).bold}>swap</b>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                        <Grid sx={styles(theme).GGNImage}>
                            <Image src={GGNWhole} alt="GotGotNeed" width={700} height={140} />
                        </Grid>
                        Duis aute irure dolor in reprehenderit in <b style={styles(theme).bold}>collectors</b> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <b style={styles(theme).bold}>news</b> mollit anim id est laborum.
                        Duis aute irure dolor in <b style={styles(theme).bold}>collections</b> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Grid>
                <Glass color={0} styling={styles(theme).glass}>
                    <Grid container justifyContent="center" item lg={12} xl={12} md={12} sm={12} xs={12} sx={styles(theme).glassGrid}>
                        <Grid sx={styles(theme).person} item xs={12} sm={5} lg={3}>
                            <Image src={Avatar} width="140px" height="140px" alt="Andrej" />
                            <Typography variant="body1" sx={styles(theme).fullName}>
                                Andrej Vidović
                            </Typography>
                            <Typography variant="body1" sx={styles(theme).description}>
                                Lorem ipsum dolor sit am-et, consectetur adipiscing elit, sed do eiusmod te-mpor inci-didunt ut labore et dolore magna aliqua. Ut enim culpa qui offi-cia deserunt mollit anim id est laborum.
                            </Typography>
                        </Grid>
                        <Grid sx={styles(theme).person} item xs={12} sm={5} lg={3}>
                            <Image src={Avatar} width="140px" height="140px" alt="Bruno" />
                            <Typography variant="body1" sx={styles(theme).fullName}>
                                Bruno Grbavac
                            </Typography>
                            <Typography variant="body1" sx={styles(theme).description}>
                                Lorem ipsum dolor sit am-et, consectetur adipiscing elit, sed do eiusmod te-mpor inci-didunt ut labore et dolore magna aliqua. Ut enim culpa qui offi-cia deserunt mollit anim id est laborum.
                            </Typography>
                        </Grid>
                    </Grid>
                </Glass>
                <Grid item xl={4} lg={5} xs={6}>
                    <Image alt="stayInTouch" src={StayInTouch} layout="intrinsic" />
                </Grid>
                <Grid item container sx={styles(theme).iconContainer} xs={12} sm={11} md={9}>
                    <Grid item xs={12} sm={6} sx={styles(theme).firstBlockOfIcons}>
                        <Link href="https://www.facebook.com/">
                            <FontAwesomeIcon icon={faFacebookSquare} size="7x" color="#3b5998" style={styles(theme).icon} />
                        </Link>
                        <Link href="https://www.twitter.com/">
                            <FontAwesomeIcon icon={faTwitter} size="7x" color="#00ACEE" style={styles(theme).icon} />
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={styles(theme).secondBlockOfIcons}>
                        <Link href="https://www.instagram.com/">
                            <FontAwesomeIcon icon={faInstagramSquare} size="7x" color="#1976d2" style={styles(theme).icon} />
                        </Link>
                        <Link href="https://www.linkedin.com/">
                            <FontAwesomeIcon icon={faLinkedin} size="7x" color="#007bb6" style={styles(theme).icon} />
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}
export default AboutUs;
