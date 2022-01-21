import { Box, Grid, Typography, useTheme } from "@mui/material";
import Glass from "./Glass";
import Image from "next/image";
import Link from "next/link";
import avatar1 from "../public/maradonaAvatar.jpg";
import avatar2 from "../public/ronaldoAvatar.jpg";
import avatar3 from "../public/berbatovAvatar.jpg";
import avatar4 from "../public/bestAvatar.jpg";

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
        transition: "all 0.2s ease",
        "&:hover": {
            transform: "scale(1.03)",
            cursor: "pointer",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
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
        color: theme.palette.grey[700],
        fontWeight: 500,
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "12px",
        },
        [theme.breakpoints.down("sm")]: {
            margin: "0 0 10px 0",
        },
    },
    reviewText: {
        margin: 0,
        fontSize: "14px",
        [theme.breakpoints.down("md")]: {
            fontSize: "12px",
        },
    },
    reviewProfilePictureContainer: {
        borderRadius: theme.shape.borderRadius + "px",
        position: "absolute",
        left: "-50px",
        width: "100px",
        height: "100px",
        boxShadow: theme.shadows[4],
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer",
        },
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

const Review = ({ review }) => {
    const theme = useTheme();
    let avatars = [avatar1, avatar2, avatar3, avatar4];

    return (
        <Glass color={review.positive + 3} styling={styles(theme).glassReview}>
            <Link href={`/Collectors/${review.username}`} passHref style={{ textDecoration: "none", color: "black" }}>
                <Box sx={styles(theme).reviewProfilePictureContainer}>
                    <Image src={avatars[review.img - 1]} alt={review.username + "'s profile picture."} layout="fill" objectFit="cover" />
                </Box>
            </Link>
            <Grid container>
                <Grid item xs={12} container>
                    <Grid item xs={12} container>
                        <Link href={`/Collectors/${review.username}`} passHref style={{ textDecoration: "none", color: "black" }}>
                            <Typography sx={styles(theme).reviewUsername}>{review.username}</Typography>
                        </Link>
                        <Typography sx={styles(theme).reviewDate}>{review.date}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={styles(theme).reviewLocation}>{review.location}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={styles(theme).reviewText}>{review.description}</Typography>
                </Grid>
            </Grid>
        </Glass>
    );
};

export default Review;
