import { Grid, Typography, useTheme, Button } from "@mui/material";
import Glass from "../Glass";
import Image from "next/image";
const styles = (theme) => ({
    infoValues: {
        fontSize: "16px",
        color: "#616161",
        paddingLeft: "0.5rem",
    },
    infoGrid1: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexWrap: "wrap",
    },
    info: {
        fontWeight: 700,
        fontSize: "16px",
        marginBottom: "0.1rem",
    },
    glass: {
        borderRadius: theme.shape.borderRadius + "px",
        boxShadow: theme.shadows[2],
        padding: "1rem",
        marginTop: "2rem",
        position: "relative",
    },
    halfCircle: {
        position: "absolute",
        top: 30,
        right: 70,
        display: "flex",
        justifyContent: "flex-end",
        zIndex: 1,
        [theme.breakpoints.down("md")]: {
            top: 45,
            right: 30,
        },
        width: "auto",
    },
    triangleBottom: {
        position: "absolute",
        bottom: 15,
        left: 150,
        zIndex: 1,
        display: "flex",
        justifyContent: "flex-start",
        [theme.breakpoints.down("md")]: {
            bottom: 55,
            left: 10,
        },
        width: "auto",
    },
    editButton: {
        marginTop: "0.7rem",
        color: "black",
        backgroundColor: theme.palette.secondary.light,
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
        },
        fontWeight: 700,
    },
});
function UserCollectionList() {
    const theme = useTheme();
    return (
        <Glass color={0} styling={styles(theme).glass}>
            <Typography variant="body1" sx={styles(theme).info}>
                Your list:
            </Typography>
            <Grid sx={styles(theme).infoGrid1}>
                <Typography variant="body1" sx={styles(theme).info}>
                    You need(15):
                </Typography>
                <Typography sx={styles(theme).infoValues}>1, 2, 14, 15, 17, 18, 20, 23, 25, 27, 28, 30, 35, 40, 50, 57, 68, 888, 5555, 777, 4, 5, 7, 8, 8, 8, 9, 89, 7, 9, 79, 7, 9</Typography>
            </Grid>
            <Grid sx={styles(theme).infoGrid1}>
                <Typography variant="body1" sx={styles(theme).info}>
                    You have(15666):
                </Typography>
                <Typography sx={styles(theme).infoValues}>1, 2, 14, 15, 17, 18, 20, 23, 25, 27, 28, 30, 35, 40, 50, 57, 68, 888, 5555, 777, 4, 5, 7, 8, 8, 8, 9, 89, 7, 9, 79, 7, 9</Typography>
            </Grid>
            <Button variant="contained" type="button" sx={styles(theme).editButton}>
                Edit list
            </Button>
            <Grid container sx={styles(theme).halfCircle}>
                <Image src="/decoCircle.png" width={75} height={75} alt="circle" />
            </Grid>
            <Grid container sx={styles(theme).triangleBottom}>
                <Image src="/decoTriangle.png" width={95} height={95} alt="triangle" />
            </Grid>
        </Glass>
    );
}
export default UserCollectionList;
