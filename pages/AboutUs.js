import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../public/GGNImage.png";
import HeadshotGlass from "../public/HeadshotsGlass.png";
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

function AboutUs() {
  return (
    <>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xl={3} l={2} md={5} sm={2}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "'Epilogue', sans-serif",
                fontWeight: 700,
                fontSize: "90px",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Epilogue', sans-serif",
                fontWeight: 500,
                fontSize: "44px",
              }}
            >
              Find out who we are.
            </Typography>
          </Grid>
          <Grid item xl={3} l={4} md={5} sm={2}>
            <Image src={logo} alt="GGN" layout="intrinsic" />
          </Grid>
        </Grid>
        <Grid item xl={6} sx={{ paddingTop: "4vh" }}>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Epilogue', sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              textAlign: "justify",
            }}
          >
            Lorem ipsum dolor sit <b>swap</b>, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in <b>collectors</b> cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt <b>news</b> mollit anim id est laborum.
            Duis aute irure dolor in <b>collections</b> reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
        <Grid sx={{ paddingTop: "12vh", paddingBottom: "5vh" }}>
          <Image
            alt="backgroundGlass"
            src={HeadshotGlass}
            layout="intrinsic"
          ></Image>
        </Grid>
        <Grid item xl={5}>
          <Image alt="stayInTouch" src={StayInTouch} layout="intrinsic" />
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid sx={{ padding: "2vh" }}>
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="5x"
              color="#3b5998"
            />
          </Grid>
          <Grid sx={{ padding: "2vh" }}>
            <FontAwesomeIcon
              icon={faTwitter}
              size="5x"
              color="#00ACEE"
              bacground="red"
            />
          </Grid>

          <Grid sx={{ padding: "2vh" }}>
            <FontAwesomeIcon icon={faInstagramSquare} size="5x" />
          </Grid>

          <Grid sx={{ padding: "2vh" }}>
            <FontAwesomeIcon icon={faLinkedin} size="5x" color="#007bb6" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutUs;
/*<Footer></Footer>*/
