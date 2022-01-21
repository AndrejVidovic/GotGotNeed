import { Grid, Box, useTheme } from "@mui/material";
import Image from "next/image";
import loader from "../../helpers/imageLoader";

const styles = (theme) => ({
    root: {
        padding: "3rem 0",
    },
    imgContainer: {
        position: "relative",
        margin: "auto",
        width: "85%",
        aspectRatio: "2",
        [theme.breakpoints.down("lg")]: {
            width: "90%",
        },
        [theme.breakpoints.down("md")]: {
            width: "95%",
        },
    },
});

export const ImageContainer = (props) => {
    const theme = useTheme();

    return (
        <Grid item xs={12} sx={styles(theme).root}>
            <Box sx={styles(theme).imgContainer}>
                <Image layout="fill" objectPosition="center" loader={loader} objectFit="contain" alt={props.alt} quality={70} {...props} />
            </Box>
        </Grid>
    );
};
