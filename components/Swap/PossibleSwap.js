import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
const styles = (theme) => ({
    container: {
        height: "200px",
        backgroundColor: "#C4C4C426",
        borderRadius: "15px",
        padding: "3rem 1rem 1.5rem 1.5rem",
        width: "100%",
        [theme.breakpoints.down("lg")]: {
            height: "220px",
            padding: "2rem 1rem 1rem 1rem",
        },
        [theme.breakpoints.only("md")]: {
            height: "240px",
        },
        position: "relative",
    },
    collectionName: {
        fontWeight: 500,
        fontSize: "18px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
        },
    },
    needHave: {
        fontWeight: 500,
        fontSize: "15px",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
        },
    },
    swapContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginBottom: "1rem",
    },
    stickers: {
        fontWeight: 300,
        fontSize: "15px",
        width: "100%",
        wordBreak: "break-word",
        whiteSpace: "normal",
        [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
        },
    },
    buttonCopy: {
        position: "absolute",
        top: "-17px",
        right: "35px",
        size: "small",
        [theme.breakpoints.down("md")]: {
            top: "-12px",
            right: "10px",
        },
        backgroundColor: "rgba(15, 109, 202, 0.7)",
        boxShadow: theme.shadows[2],
    },
    negative: {
        backgroundColor: "rgba(237, 0, 0, 0.2)",
        height: "100%",
        width: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            width: "40px",
        },
    },
    positive: {
        backgroundColor: "rgba(47, 237, 0, 0.2)",
        height: "100%",
        width: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
            width: "40px",
        },
    },
    GradeGrid: {
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: "-14px",
        left: "50px",
        height: "30px",
        [theme.breakpoints.down("md")]: {
            top: "-10px",
            left: "10px",
            height: "20px",
        },
    },
    grade: {
        fontWeight: 500,
        fontSize: "18px",
        fontStyle: "italic",
        [theme.breakpoints.down("md")]: {
            fontSize: "14px",
        },
    },
});
function PossibleSwap({ user }) {
    const theme = useTheme();

    function copyToClipboard(e) {
        navigator.clipboard.writeText(JSON.stringify(user.swap));
    }
    return (
        <Box sx={styles(theme).container}>
            <Grid item sx={{ overflow: "auto", width: "100%", height: "100%" }}>
                {user.swap.map((swap) => (
                    <Grid container sx={styles(theme).swapContainer}>
                        <Typography variant="body1" sx={styles(theme).collectionName}>
                            {swap.collection}
                        </Typography>
                        <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <Typography variant="body1" sx={styles(theme).needHave}>
                                You Need:{" "}
                            </Typography>
                            <Typography sx={styles(theme).stickers}>{swap.need + "\n"}</Typography>
                        </Grid>
                        <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <Typography variant="body1" sx={styles(theme).needHave}>
                                You Have:{" "}
                            </Typography>
                            <Typography variant="body1" sx={styles(theme).stickers}>
                                {swap.have + "\n"}
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
            <Button variant="contained" size={window.innerWidth < 900 ? "small" : "medium"} onClick={copyToClipboard} sx={styles(theme).buttonCopy}>
                Copy
            </Button>
            <Grid sx={styles(theme).GradeGrid}>
                <Box sx={styles(theme).positive}>
                    <Typography sx={styles(theme).grade} flexWrap>
                        {user.reviews.filter((review) => review.positive === 1).length}
                    </Typography>
                </Box>
                <Box sx={styles(theme).negative}>
                    <Typography sx={styles(theme).grade} flexWrap>
                        {user.reviews.filter((review) => review.positive === 0).length}
                    </Typography>
                </Box>
            </Grid>
        </Box>
    );
}
export default PossibleSwap;
