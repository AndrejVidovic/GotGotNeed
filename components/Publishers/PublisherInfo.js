import { Grid, Typography, useTheme } from "@mui/material";
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
    },
    info: {
        fontWeight: 700,
        fontSize: "16px",
        marginBottom: "0.1rem",
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
        marginBottom: "1.5rem",
    },
    description: {
        fontWeight: 400,
        fontSize: "16px",
        textAlign: "justify",
        marginTop: "1rem",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
});
function PublisherInfo({ name, collections, categories, founded, location, locationIconUri, description }) {
    const theme = useTheme();
    return (
        <>
            {" "}
            <Typography variant="h1" sx={styles(theme).title}>
                {name}
            </Typography>
            <Grid item sx={styles(theme).infoGrid1}>
                <Typography variant="body1" sx={styles(theme).info}>
                    Location: <Image src={`https://flagcdn.com/24x18/${locationIconUri}.png`} width="22" height="16" alt="CountryFlag" />
                </Typography>
                <Typography sx={styles(theme).infoValues}>{location}</Typography>
            </Grid>
            <Grid item sx={styles(theme).infoGrid1}>
                <Typography variant="body1" sx={styles(theme).info}>
                    Categories:
                </Typography>
                <Typography sx={styles(theme).infoValues}>{categories.length}</Typography>
            </Grid>
            <Grid item sx={styles(theme).infoGrid1}>
                <Typography variant="body1" sx={styles(theme).info}>
                    Collections:
                </Typography>
                <Typography sx={styles(theme).infoValues}>{collections.length}</Typography>
            </Grid>
            <Grid item sx={styles(theme).infoGrid1}>
                <Typography variant="body1" sx={styles(theme).info}>
                    Founded:
                </Typography>
                <Typography sx={styles(theme).infoValues}>{founded}</Typography>
            </Grid>
            <Typography variant="body1" sx={styles(theme).description}>
                {description}
            </Typography>
        </>
    );
}
export default PublisherInfo;
