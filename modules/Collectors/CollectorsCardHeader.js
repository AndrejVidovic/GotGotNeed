import { Grid, Box, useTheme, Typography, IconButton, Link } from "@mui/material";
import { Person, LocationOn, Badge, PersonAdd } from "@mui/icons-material";
import Image from "next/image";
import triangleImg from "../../public/decoTriangle.png";
import circleImg from "../../public/decoCircle.png";

const styles = (theme) => ({
    textField: {
        display: "inline",
        color: theme.palette.grey[700],
        fontSize: "14px",
        margin: "5px auto 5px 0",
    },
    username: {
        position: "relative",
        fontWeight: "700",
        textShadow: theme.shadows[4],
        fontSize: "25px",
        marginBottom: "5px",
        transition: "all 0.2s ease",
        "&:hover": {
            transform: "scale(1.03)",
        },
    },
    headerIcon: {
        display: "inline",
        color: theme.palette.grey[600],
        marginRight: "7px",
        fontSize: "12px",
    },
    statusBlob: {
        position: "absolute",
        borderRadius: "25px",
        background: theme.palette.primary.main,
        border: "2px solid",
        borderColor: theme.palette.primary.dark,
        zIndex: "100",
        height: "15px",
        width: "15px",
        top: "0px",
        right: "-10px",
    },
    statusBlobOffline: {
        background: theme.palette.grey[500],
        borderColor: theme.palette.grey[700],
    },
    mainHeaderAdd: {
        marginLeft: "auto",
        height: "fit-content",
        marginRight: "0",
    },
    mainHeaderSvg: {
        color: "black",
        fontWeight: "700",
        filter: "drop-shadow(" + theme.shadows[4] + ")",
        fontSize: "25px",
    },
    cardHeader: {
        padding: "25px 25px 35px 25px",
        position: "absolute",
        bottom: 0,
        height: "50%",
        width: "100%",
        backgroundColor: "white",
        boxShadow: theme.shadows[0],
        borderRadius: theme.shape.borderRadius + "px",
    },
    circle: {
        position: "absolute",
        top: "20%",
        right: "-50px",
        width: "100px",
        height: "100px",
    },
    triangle: {
        position: "absolute",
        bottom: "-50px",
        left: "50%",
        width: "100px",
        height: "100px",
    },
});

const CollectorsCardHeader = ({ user }) => {
    const theme = useTheme();

    return (
        <Box sx={styles(theme).cardHeader}>
            <Grid item xs={12} container direction="row">
                <Link href={`/Collectors/${user.username}`} passHref style={{ textDecoration: "none", color: "black" }}>
                    <Typography sx={styles(theme).username}>
                        <Box
                            sx={
                                user.online > 0
                                    ? {
                                          ...styles(theme).statusBlob,
                                          ...styles(theme).statusBlobOffline,
                                      }
                                    : styles(theme).statusBlob
                            }
                        ></Box>
                        {user.username}
                    </Typography>
                </Link>
                <IconButton sx={styles(theme).mainHeaderAdd}>
                    <PersonAdd sx={styles(theme).mainHeaderSvg} />
                </IconButton>
            </Grid>

            <Link href={`/Collectors/${user.username}`} passHref style={{ textDecoration: "none" }}>
                <Grid item xs={12} container justifyContent="flex-start" alignItems="center">
                    <Person sx={styles(theme).headerIcon} />
                    <Typography sx={styles(theme).textField}>{user.name}</Typography>
                </Grid>
                <Grid item xs={12} container justifyContent="flex-start" alignItems="center">
                    <LocationOn sx={styles(theme).headerIcon} />
                    <Typography sx={styles(theme).textField}>{user.location}</Typography>
                </Grid>
                <Grid item xs={12} container justifyContent="flex-start" alignItems="center">
                    <Badge sx={styles(theme).headerIcon} />
                    <Typography sx={styles(theme).textField}>{user.joined}</Typography>
                </Grid>
            </Link>
            <Box sx={styles(theme).circle}>
                <Image src={circleImg} alt="circle" layout="fill" objectFit="cover" />
            </Box>

            <Box sx={styles(theme).triangle}>
                <Image src={triangleImg} alt="circle" layout="fill" objectFit="cover" />
            </Box>
        </Box>
    );
};
export default CollectorsCardHeader;
