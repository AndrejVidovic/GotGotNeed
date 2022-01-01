import { Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import logo from "../public/GGNImage.png";
import AndrejImg from "../public/AndrejImg.png";
import BrunoImg from "../public/BrunoImg.png";
import StayInTouch from "../public/StayInTouch.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../components/Layout/footer";
import GGNWhole from "../public/GGNWhole.png";
import Head from "next/head";

const styles = (theme) => ({
  gridContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "8vh",
  },
  gridTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 700,
    fontSize: "10vh",
  },
  subtitle: {
    fontWeight: 500,
    fontSize: "5vh",
    paddingBottom: "1vh",
  },
  text: {
    fontWeight: 400,
    fontSize: "2.7vh",
    textAlign: "justify",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    padding: "2vh",
  },
  glass: {
    filter: "blur(1px)",
    boxShadow: "0px 10px 15px 10px rgb(0 0 0 / 15%)",
    backgroundColor: " rgba(219, 219, 219, 0.09)",
    width: "100%",
    height: "70vh",
  },
  glassGrid: {
    marginTop: "10vh",
    marginBottom: "6vh",
    position: "relative",
    height: "auto",
  },
  user1: {
    position: "absolute",
    top: 0,
    left: "7%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "justify",
    marginTop: "5vh",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      left: "1%",
    },
  },
  user2: {
    position: "absolute",
    top: 0,
    left: "40%",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "50%",
    marginTop: "5vh",
    [theme.breakpoints.down("sm")]: {
      left: "50%",
    },
  },
  fullName: {
    fontWeight: 700,
    fontSize: "17px",
    marginTop: "2vh",
    marginBottom: "1vh",
  },
  description: {
    fontWeight: 400,
    fontSize: "1.8vh",
    marginBottom: "4vh",
    width: "25vh",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      width: "18vh",
    },
  },
  GGNImage: {
    alignItems: "center",
    justifyContent: "center",
    padding: "2vh",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
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
          <Grid item xl={3} lg={5} md={5} sm={6} xs={10}>
            <Typography variant="h1" sx={styles(theme).title}>
              About Us
            </Typography>
            <Typography variant="h2" sx={styles(theme).subtitle}>
              Find out who we are.
            </Typography>
          </Grid>
          <Grid item xl={3} l={4} md={3} sm={5} sx={styles(theme).logo}>
            <Image src={logo} alt="GGN" layout="intrinsic" />
          </Grid>
        </Grid>
        <Grid
          item
          xl={6}
          lg={8}
          md={8}
          sm={11}
          xs={10}
          sx={{ paddingTop: "4vh" }}
        >
          <Typography variant="body1" sx={styles(theme).text}>
            Lorem ipsum dolor sit <b>swap</b>, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.{" "}
            <Grid sx={styles(theme).GGNImage}>
              <Image src={GGNWhole} alt="GotGotNeed" width={500} height={150} />
            </Grid>
            Duis aute irure dolor in reprehenderit in <b>collectors</b> cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt <b>news</b> mollit
            anim id est laborum. Duis aute irure dolor in <b>collections</b>{" "}
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
        <Grid
          item
          lg={12}
          xl={12}
          md={12}
          sm={12}
          xs={12}
          sx={styles(theme).glassGrid}
        >
          <Grid sx={styles(theme).glass}></Grid>
          <Grid sx={styles(theme).user1}>
            <Image src={AndrejImg} width="150vh" height="150vh" alt="Andrej" />
            <Typography variant="body1" sx={styles(theme).fullName}>
              Andrej Vidović
            </Typography>
            <Typography variant="body1" sx={styles(theme).description}>
              Lorem ipsum dolor sit am-et, consectetur adipiscing elit, sed do
              eiusmod te-mpor inci-didunt ut labore et dolore magna aliqua. Ut
              enim culpa qui offi-cia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
          <Grid sx={styles(theme).user2}>
            <Image src={BrunoImg} width="150vh" height="150vh" alt="Bruno" />
            <Typography variant="body1" sx={styles(theme).fullName}>
              Bruno Grbavac
            </Typography>
            <Typography variant="body1" sx={styles(theme).description}>
              Lorem ipsum dolor sit am-et, consectetur adipiscing elit, sed do
              eiusmod te-mpor inci-didunt ut labore et dolore magna aliqua. Ut
              enim culpa qui offi-cia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xl={5} lg={8} md={8} sm={11} xs={10}>
          <Image alt="stayInTouch" src={StayInTouch} layout="intrinsic" />
        </Grid>
        <Grid
          container
          sx={styles(theme).iconContainer}
          xs={12}
          sm={11}
          md={9}
          lg={9}
          xl={10}
        >
          <Grid sx={styles(theme).icon} xs={3} sm={2} md={2} lg={2} xl={1}>
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="5x"
              color="#3b5998"
            />
          </Grid>
          <Grid sx={styles(theme).icon} xs={3} sm={2} md={2} lg={2} xl={1}>
            <FontAwesomeIcon icon={faTwitter} size="5x" color="#00ACEE" />
          </Grid>
          <Grid sx={styles(theme).icon} xs={3} sm={2} md={2} lg={2} xl={1}>
            <FontAwesomeIcon
              icon={faInstagramSquare}
              size="5x"
              color="#1976d2"
            />
          </Grid>
          <Grid sx={styles(theme).icon} xs={3} sm={2} md={2} lg={2} xl={1}>
            <FontAwesomeIcon icon={faLinkedin} size="5x" color="#007bb6" />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
export default AboutUs;
