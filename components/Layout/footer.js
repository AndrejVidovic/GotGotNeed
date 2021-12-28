import {
  AppBar,
  Grid,
  Icon,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logoFooter from "../../public/LogoS.png";
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
    alignItems: "center",
    justifyContent: "center",
    //
    paddingBottom: "2vh",
  },
  container: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: "4vh",
  },
});

function Footer() {
  const theme = useTheme();
  const date = new Date().getFullYear();
  return (
    <Grid sx={styles(theme).container}>
      <Toolbar sx={styles(theme).toolbar}>
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
            <Grid sx={styles(theme).socialNetworksGrid} xl={9} lg={9}>
              <Typography variant="body1" sx={styles(theme).socialNetworksText}>
                <Icon>email_icon</Icon>
                gotgotneed@fesb.hr
              </Typography>
              <Typography variant="body1" sx={styles(theme).socialNetworksText}>
                <Icon>call_icon</Icon>
                +385 021 508 302
              </Typography>
              <Typography variant="body1" sx={styles(theme).socialNetworksText}>
                <TwitterIcon />
                @GotGotNeed
              </Typography>
            </Grid>
            <Grid sx={styles(theme).socialNetworksGrid} xl={2} lg={2}>
              <Typography variant="body1" sx={styles(theme).socialNetworksText}>
                <FacebookIcon />
                @GotGotNeed
              </Typography>
              <Typography variant="body1" sx={styles(theme).socialNetworksText}>
                <InstagramIcon />
                @GotGotNeed
              </Typography>
              <Typography variant="body1" sx={styles(theme).socialNetworksText}>
                <LinkedInIcon />
                @GotGotNeed
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ display: "flex", flexDirection: "column" }}
          xl={1}
          lg={1}
        >
          <Typography variant="h3" sx={styles(theme).exploreText}>
            Explore
          </Typography>
          <Grid>
            <Link href={{ pathname: "/" }} passHref>
              <Typography sx={styles(theme).sites}>Home</Typography>
            </Link>
            {pages.map((page) => (
              <Link
                href={{ pathname: "/[page]" }}
                as={`/${page.replace(/\s+/g, "")}`}
                passHref
              >
                <Typography sx={styles(theme).sites}>{page}</Typography>
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
