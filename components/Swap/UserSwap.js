import { useTheme } from "@emotion/react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { AccessTime, Person, LocationOn } from "@mui/icons-material";
import Image from "next/image";
import avatar from "../../public/maradonaAvatar.jpg";
import Glass from "../Glass";
import PossibleSwap from "./PossibleSwap";
const styles = (theme) => ({
    profilePicture: {
        borderRadius: theme.shape.borderRadius + "px",
        width: "100%",
        height: "166px",
        position: "relative",
        [theme.breakpoints.down("lg")]: {
            width: "100px",
            height: "100px",
        },
        [theme.breakpoints.down("sm")]: {
            width: "80px",
            height: "80px",
        },
        overflow: "hidden",
    },
    profilePictureContainer: {
        borderRadius: theme.shape.borderRadius + "px",
        boxShadow: theme.shadows[4],
        position: "relative",
        [theme.breakpoints.down("lg")]: {
            marginBottom: "0.7rem",
        },
        [theme.breakpoints.only("md")]: {
            marginLeft: "1.7rem",
        },
    },
    container: {
        width: "fill-available",
        height: "282px",
        padding: "30px 0px 20px 35px",
        boxShadow: theme.shadows[1],
        display: "flex",
        flexDirection: "row",
        marginBottom: "4rem",
        justifyContent: "flex-start",
        [theme.breakpoints.down("lg")]: {
            padding: "15px 0px 15px 25px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "15px 0px 15px 10px",
        },
    },
    userInfo: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "1.7rem",
        [theme.breakpoints.down("md")]: {
            marginLeft: "0",
        },
        width: "100%",
    },
    username: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontWeight: 700,
        fontSize: "25px",
        marginBottom: "0.5rem",
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px",
        },
    },
    header: {
        display: "flex",
        alignItems: "center",
        marginBottom: "0.5rem",
    },
    typography: {
        fontWeight: 600,
        fontSize: "17px",
        color: "#616161",
        width: "100%",
        textOverflow: "ellipsis",
        overflow: "hidden",
        [theme.breakpoints.down("sm")]: {
            fontSize: "11px",
        },
        [theme.breakpoints.only("sm")]: {
            fontSize: "12px",
        },
    },
    icon: {
        fontSize: "x-large",
        display: "inline",
        color: theme.palette.grey[600],
        marginRight: "7px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "medium",
            marginRight: "5px",
        },
        [theme.breakpoints.only("sm")]: {
            fontSize: "large",
        },
    },
    statusBlob: {
        position: "absolute",
        borderRadius: "25px",
        background: theme.palette.primary.main,
        border: "2px solid",
        borderColor: theme.palette.primary.dark,
        zIndex: "100",
        height: "15px",
        width: "15px",
        top: "-6px",
        right: "-8px",
    },
    statusBlobOffline: {
        background: theme.palette.grey[500],
        borderColor: theme.palette.grey[700],
    },
    profileInfoContainer: {
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
            display: "flex",
            alignItems: "flex-start",
        },
    },
    PossibleSwapContainer: {
        display: "flex",
        alignItems: "center",
        marginLeft: "2rem",
        [theme.breakpoints.down("lg")]: {
            marginLeft: "1rem",
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: "0.5rem",
        },
    },
});
function UserSwap({ user }) {
    const theme = useTheme();
    return (
        <Glass color={0} styling={styles(theme).container}>
            <Grid xs={4} sm={3} md={4} lg={5} sx={styles(theme).profileInfoContainer}>
                <Grid item lg={5} sx={styles(theme).profilePictureContainer}>
                    <Box sx={user.online > 0 ? { ...styles(theme).statusBlob, ...styles(theme).statusBlobOffline } : styles(theme).statusBlob}></Box>
                    <Box sx={styles(theme).profilePicture}>
                        <Image src={avatar} alt={"UserPicture"} layout="fill" objectFit="cover"></Image>
                    </Box>
                </Grid>
                <Grid item lg={6} sx={styles(theme).userInfo}>
                    <Typography sx={styles(theme).username} variant="body1">
                        {user.username}
                    </Typography>
                    <Grid xs={12} sx={styles(theme).header}>
                        <AccessTime sx={styles(theme).icon} />
                        <Typography variant="body1" sx={styles(theme).typography} noWrap>
                            Last online: {user.online}
                        </Typography>
                    </Grid>
                    <Grid xs={12} sx={styles(theme).header}>
                        <Person sx={styles(theme).icon} />
                        <Typography variant="body1" sx={styles(theme).typography} noWrap>
                            {user.name}
                        </Typography>
                    </Grid>
                    <Grid xs={12} sx={styles(theme).header}>
                        <LocationOn sx={styles(theme).icon} />
                        <Typography variant="body1" sx={styles(theme).typography} noWrap>
                            {" "}
                            {user.location}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid container xs={7} sm={8} md={7} lg={6} sx={styles(theme).PossibleSwapContainer}>
                <PossibleSwap user={user} />
            </Grid>
        </Glass>
    );
}
export default UserSwap;
