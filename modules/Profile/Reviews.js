import { Grid, useTheme, Button } from "@mui/material";
import {
    StarHalfRounded,
    StarRounded,
    StarBorderRounded,
    KeyboardArrowDownRounded,
} from "@mui/icons-material";
import Glass from "../../components/Glass";
import Review from "../../components/Review";

const styles = (theme) => ({
    star: {
        fontSize: "50px",
        color: theme.palette.secondary.main,
        textShadow: theme.shadows[4],
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "35px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "23px",
        },
    },
    glass: {
        marginTop: "50px",
        borderRadius: theme.shape.borderRadius + "px",
        padding: "50px 50px 100px 50px",
        [theme.breakpoints.between("sm", "md")]: {
            marginTop: "40px",
            padding: "40px 40px 100px 40px",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "30px",
            padding: "30px 30px 70px 30px",
        },
    },
    reviewsTitle: {
        fontSize: "40px",
        textShadow: theme.shadows[4],
        fontWeight: 700,
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "25px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "18px",
        },
    },
    expandButton: {
        position: "absolute",
        bottom: "-20px",
        left: "48%",
        borderRadius: "25px",
        padding: 0,
        minWidth: "0px",
        width: "40px",
        height: "40px",
        [theme.breakpoints.down("sm")]: {
            bottom: "-15px",
            width: "30px",
            height: "30px",
        },
    },
});
const StarRating = () => {
    const theme = useTheme();

    return (
        <>
            <StarRounded sx={styles(theme).star} />
            <StarRounded sx={styles(theme).star} />
            <StarRounded sx={styles(theme).star} />
            <StarHalfRounded sx={styles(theme).star} />
            <StarBorderRounded sx={styles(theme).star} />
        </>
    );
};
const Reviews = () => {
    const theme = useTheme();

    return (
        <Glass color={0} styling={styles(theme).glass}>
            <Grid container direction="row" justifyContent="space-evenly">
                <Grid item>
                    <StarRating />
                </Grid>
                <Grid item sx={styles(theme).reviewsTitle}>
                    REVIEWS
                </Grid>
                <Grid item xs={12}>
                    <Review />
                </Grid>
                <Grid item xs={12}>
                    <Review />
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    sx={styles(theme).expandButton}
                >
                    <KeyboardArrowDownRounded />
                </Button>
            </Grid>
        </Glass>
    );
};

export default Reviews;
