import { Grid, Box, useTheme } from "@mui/material";
import Image from "next/image";

const styles = (theme) => ({
    root: {
        padding: "3rem 0",
    },
    imgContainer: {
        position: "relative",
        margin: "auto",
        height: "400px",
        width: "80%",
        [theme.breakpoints.down("lg")]: {
            height: "300px",
        },
        [theme.breakpoints.down("md")]: {
            height: "200px",
        },
    },
});

export const ImageContainer = (props) => {
    const theme = useTheme();

    return (
        <Grid item xs={12} sx={styles(theme).root}>
            <Box sx={styles(theme).imgContainer}>
                <Image layout="fill" objectFit="contain" objectPosition="top" alt={props.alt} quality={70} {...props} />
            </Box>
        </Grid>
    );
};
