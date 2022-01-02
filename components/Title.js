import { useTheme, Grid, Typography } from "@mui/material";

const styles = (theme) => ({
    container: {
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.between("xs", "sm")]: {
            marginTop: "5rem",
        },
        [theme.breakpoints.between("sm", "md")]: {
            marginTop: "6rem",
        },
    },
    title: {
        fontWeight: 700,
        fontSize: "80px",
        [theme.breakpoints.between("sm", "lg")]: {
            fontSize: "60px",
        },
        [theme.breakpoints.between("xs", "sm")]: {
            fontSize: "50px",
        },
    },
    subtitle: {
        fontWeight: 500,
        fontSize: "40px",
        padding: "10px 0",
        color: "#616161",
        [theme.breakpoints.between("md", "lg")]: {
            fontSize: "30px",
        },
        [theme.breakpoints.between("xs", "md")]: {
            fontSize: "25px",
        },
    },
});

const Title = ({ title, subtitle }) => {
    const theme = useTheme();

    return (
        <Grid container sx={styles(theme).container}>
            <Grid item xl={6} lg={8} md={8} sm={10} xs={10}>
                <Typography variant="h1" sx={styles(theme).title}>
                    {title}
                </Typography>
                <Typography variant="h2" sx={styles(theme).subtitle}>
                    {subtitle}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Title;
