import { Box, Grid, Typography, useTheme } from "@mui/material";
import Glass from "./Glass";
import Image from "next/image";
import avatarImg from "../public/avatar.png";

const styles = (theme) => ({
    glassReview: {
        marginTop: "50px",
        borderRadius: theme.shape.borderRadius + "px",
        marginLeft: "50px",
        width: "fill-available",
        padding: "20px 40px 30px 100px",
        textShadow: "none",
        fontWeight: 400,
        [theme.breakpoints.between("sm", "md")]: {
            marginTop: "40px",
            marginLeft: "40px",
            padding: "20px 30px 30px 80px",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "30px",
            marginLeft: "30px",
            padding: "20px 20px 30px 50px",
        },
    },
    reviewUsername: {
        fontSize: "16px",
        fontWeight: 700,
        textShadow: theme.shadows[4],
        display: "inline",
        margin: 0,
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "13px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
        },
    },
    reviewDate: {
        fontSize: "14px",
        margin: "0 0 0 auto",
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "11px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "9px",
        },
    },
    reviewLocation: {
        fontSize: "14px",
        margin: "5px 0 15px 0",
        color: theme.palette.grey[500],
        fontWeight: 500,
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "11px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "9px",
            margin: "0 0 10px 0",
        },
    },
    reviewText: {
        margin: 0,
        fontSize: "12px",
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "10px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "8px",
        },
    },
    reviewProfilePictureContainer: {
        borderRadius: theme.shape.borderRadius + "px",
        position: "absolute",
        left: "-50px",
        width: "100px",
        height: "100px",
        boxShadow: theme.shadows[4],
        [theme.breakpoints.between("sm", "md")]: {
            left: "-40px",
            width: "80px",
            height: "80px",
        },
        [theme.breakpoints.down("sm")]: {
            left: "-30px",
            width: "60px",
            height: "60px",
        },
    },
});

const Review = () => {
    const theme = useTheme();

    return (
        <Glass color={0} styling={styles(theme).glassReview}>
            <Box sx={styles(theme).reviewProfilePictureContainer}>
                <Image
                    src={avatarImg}
                    alt={"'s profile picture."}
                    layout="fill"
                />
            </Box>
            <Grid container>
                <Grid item xs={12} container>
                    <Grid item xs={12} container>
                        <Typography sx={styles(theme).reviewUsername}>
                            Mate Matić
                        </Typography>
                        <Typography sx={styles(theme).reviewDate}>
                            27. lipnja 2021.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={styles(theme).reviewLocation}>
                            Split, Croatia{" "}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={styles(theme).reviewText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris. t enim ad minim veniam,
                        quis nostrud.
                    </Typography>
                </Grid>
            </Grid>
        </Glass>
    );
};

export default Review;
