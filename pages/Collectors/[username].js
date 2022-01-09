import { Grid, useTheme, IconButton, Button } from "@mui/material";
import Head from "next/head";
import Footer from "../../components/Layout/footer";
import { useRouter } from "next/router";
import ProfileHeader from "../../modules/Profile/ProfileHeader";
import Reviews from "../../modules/Profile/Reviews";
import fakeProfiles from "../../fakeData/Profiles/Profiles.json";

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
    const username = router.query.username;
    const user = fakeProfiles[0];

    return (
        <>
            <Head>
                <title>Profile | {router.query.username}</title>
            </Head>
            <Grid container sx={styles(theme).container}>
                <Grid item container xs={10} lg={7}>
                    <ProfileHeader user={user} />
                    <Reviews reviews={user.reviews} />
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default Profile;
