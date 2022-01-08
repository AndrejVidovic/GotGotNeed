import { Box, Grid, useTheme, IconButton, Button } from "@mui/material";
import Head from "next/head";
import Footer from "../../components/Layout/footer";
import { useRouter } from "next/router";
import ProfileHeader from "../../modules/Profile/ProfileHeader";
import {
    StarHalfRounded,
    StarRounded,
    StarBorderRounded,
    KeyboardArrowDownRounded,
} from "@mui/icons-material";
import Glass from "../../components/Glass";
import Image from "next/image";
import avatarImg from "../../public/avatar.png";
import Reviews from "../../modules/Profile/Reviews";

const styles = (theme) => ({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "7rem",
        flexDirection: "column",
        width: "100%",
        [theme.breakpoints.down("lg")]: {
            marginTop: "100px",
            marginBottom: "7rem",
        },
    },
});

const Profile = () => {
    const theme = useTheme();
    const router = useRouter();
    const username = router.query.Profile;

    return (
        <>
            <Head>
                <title>Profile</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Grid container sx={styles(theme).container}>
                <Grid item container xs={10} lg={7}>
                    <ProfileHeader user={{ username: username }} />
                    <Reviews />
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default Profile;
