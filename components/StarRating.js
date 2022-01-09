import { useTheme } from "@mui/material";
import {
    StarHalfRounded,
    StarRounded,
    StarBorderRounded,
} from "@mui/icons-material";

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
});

const StarRating = ({ gradeToFive }) => {
    const theme = useTheme();
    var countdownGrade = gradeToFive;
    let starElementsArray = [];

    for (let i = 0; i < 5; i++) {
        if (countdownGrade >= 1) {
            countdownGrade -= 1;
            starElementsArray.push(<StarRounded sx={styles(theme).star} />);
        } else if (countdownGrade >= 0.5) {
            countdownGrade -= 0.5;
            starElementsArray.push(<StarHalfRounded sx={styles(theme).star} />);
        } else {
            starElementsArray.push(
                <StarBorderRounded sx={styles(theme).star} />
            );
        }
    }

    return <>{starElementsArray}</>;
};

export default StarRating;
