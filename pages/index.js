import { Grid, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import mobileHomeBanner from "../public/mobileHomeBanner.png";
import SmallLogin from "../modules/SmallLogin";
import Glass from "../components/glass";
import BannerAndButton from "../modules/BannerAndButton";
import Footer from "../components/Layout/footer";
import NewsOnGlass from "../modules/NewsOnGlass";

const styles = (theme) => ({
    gridContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "8vh",
        minHeight: "0",
    },
    downIcon: {
        height: "1.3rem",
        width: "1.3rem",
    },
    backBanner: {
        [theme.breakpoints.down("lg")]: {
            paddingTop: "5vh",
            backgroundImage: `url(${mobileHomeBanner.src})`,
        },
    },
    glass: {
        borderRadius: "50%",
        height: "4rem",
        width: "4rem",
        margin: "10rem 0",
        cursor: "pointer",
        transition: "transform .2s",
        [theme.breakpoints.down("lg")]: {
            visibility: "hidden",
            margin: "5rem 0",
        },
        "&:hover": {
            transform: "scale(1.2)",
        },
    },
});

function Home() {
    const theme = useTheme();

    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={styles(theme).gridContainer}
            >
                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={styles(theme).backBanner}
                >
                    <BannerAndButton />
                    <Grid
                        item
                        container
                        xs={12}
                        md={6}
                        lg={4}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <SmallLogin />
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Glass
                            color={0}
                            styling={styles(theme).glass}
                            onClickFunction={() => {
                                var element =
                                    document.getElementById(
                                        "smoothScrollTarget"
                                    );
                                element.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faChevronDown}
                                size="40px"
                                color="grey"
                                style={styles(theme).downIcon}
                            />
                        </Glass>
                    </Grid>
                </Grid>
                <Grid item xs={12} id="smoothScrollTarget">
                    <NewsOnGlass />
                </Grid>
            </Grid>
            <Footer />
        </>
    );
}

export default Home;
