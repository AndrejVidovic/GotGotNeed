import { Grid, useTheme } from "@mui/material";
import Head from "next/head";
import Footer from "../components/Layout/footer";
import { useRouter } from "next/router";

const styles = (theme) => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "7rem",
        flexDirection: "column",
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
            <Grid container sx={styles(theme).container}></Grid>
            <Footer></Footer>
        </>
    );
};

export default Profile;
