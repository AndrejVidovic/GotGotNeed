import { AppBar, Grid, Icon, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logoFooter from "../../public/LogoS.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const pages = ["About Us", "Collectors", "Collections", "Publishers", "Blog"];
const styles = {
  ExploreText: {
    fontFamily: "'Epilogue', sans-serif",
    fontWeight: 700,
    fontSize: "40px",
  },
  sites: {
    fontFamily: "'Epilogue', sans-serif",
    fontWeight: 600,
    fontSize: "1.7vh",
    ":hover": {
      cursor: "pointer",
    },
    padding: "2px 0 2px 10px",
  },
  socialNetworksGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  socialNetworksText: {
    fontFamily: "'Epilogue', sans-serif",
    fontWeight: 400,
    fontSize: "1.4vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5vh",
  },
  Copyright: {
    fontFamily: "'Epilogue', sans-serif",
    fontWeight: 400,
    fontSize: "1vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

function Footer() {
  const date = new Date().getFullYear();
  return (
    <>
      <AppBar sx={{ bottom: 0, top: "auto", zIndex: 0 }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "2vh",
            paddingBottom: "2vh",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
            xl={3}
            lg={3}
          >
            <Image src={logoFooter} alt="GGN" layout="intrinsic" />

            <Grid sx={{ display: "flex" }}>
              <Grid sx={styles.socialNetworksGrid} xl={9} lg={9}>
                <Typography variant="body1" sx={styles.socialNetworksText}>
                  <Icon>email_icon</Icon>
                  gotgotneed@fesb.hr
                </Typography>
                <Typography variant="body1" sx={styles.socialNetworksText}>
                  <Icon>call_icon</Icon>
                  +385 021 508 302
                </Typography>
                <Typography variant="body1" sx={styles.socialNetworksText}>
                  <TwitterIcon />
                  @GotGotNeed
                </Typography>
              </Grid>
              <Grid sx={styles.socialNetworksGrid} xl={2} lg={2}>
                <Typography variant="body1" sx={styles.socialNetworksText}>
                  <FacebookIcon />
                  @GotGotNeed
                </Typography>
                <Typography variant="body1" sx={styles.socialNetworksText}>
                  <InstagramIcon />
                  @GotGotNeed
                </Typography>
                <Typography variant="body1" sx={styles.socialNetworksText}>
                  <LinkedInIcon />
                  @GotGotNeed
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            container
            sx={{ display: "flex", flexDirection: "column" }}
            xl={1}
            lg={1}
          >
            <Typography variant="h3" sx={styles.ExploreText}>
              Explore
            </Typography>
            <Grid>
              <Link href={{ pathname: "/" }} passHref>
                <Typography sx={styles.sites}>Home</Typography>
              </Link>
              {pages.map((page) => (
                <Link
                  href={{ pathname: "/[page]" }}
                  as={`/${page.replace(/\s+/g, "")}`}
                  passHref
                >
                  <Typography sx={styles.sites}>{page}</Typography>
                </Link>
              ))}
            </Grid>
          </Grid>
        </Toolbar>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" sx={styles.Copyright}>
            Copyright @ {date} GotGotNeed. All rights reserved.
          </Typography>
        </Grid>
      </AppBar>
    </>
  );
}
export default Footer;
