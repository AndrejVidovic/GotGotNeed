import { useState } from "react";
import { Grid, useTheme, Button, Collapse } from "@mui/material";
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from "@mui/icons-material";
import Glass from "../../components/Glass";
import Review from "../../components/Review";
import StarRating from "../../components/StarRating";

const styles = (theme) => ({
    glass: {
        marginTop: "50px",
        borderRadius: theme.shape.borderRadius + "px",
        padding: "50px",
        [theme.breakpoints.between("sm", "md")]: {
            marginTop: "40px",
            padding: "40px",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "30px",
            padding: "30px",
        },
    },
    expandedGlass: {
        paddingBottom: "100px",
        [theme.breakpoints.down("sm")]: {
            padding: "30px 20px 70px 10px ",
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

const Reviews = ({ reviews }) => {
    const theme = useTheme();
    const [displayReviewsStatus, setDisplayReviewsStatus] = useState(() => true);

    const gradeToFive = (reviews.filter((review) => review.positive === 1).length / reviews.length) * 5;

    return (
        <Glass color={0} styling={displayReviewsStatus ? { ...styles(theme).glass, ...styles(theme).expandedGlass } : { ...styles(theme).glass }}>
            <Grid container direction="row" justifyContent="space-evenly">
                <Grid item>
                    <StarRating gradeToFive={gradeToFive} />
                </Grid>
                <Grid item sx={styles(theme).reviewsTitle}>
                    REVIEWS
                </Grid>
                <Collapse in={displayReviewsStatus}>
                    {reviews.map((review) => (
                        <Grid item xs={12} key={review.id}>
                            <Review review={review} />
                        </Grid>
                    ))}
                </Collapse>
                <Button
                    variant="contained"
                    color="primary"
                    sx={styles(theme).expandButton}
                    onClick={() => {
                        setDisplayReviewsStatus(!displayReviewsStatus);
                    }}
                >
                    {displayReviewsStatus ? <KeyboardArrowUpRounded /> : <KeyboardArrowDownRounded />}
                </Button>
            </Grid>
        </Glass>
    );
};

export default Reviews;
