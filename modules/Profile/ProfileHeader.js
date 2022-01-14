import { Box, Grid, useTheme, IconButton, Typography } from "@mui/material";
import Glass from "../../components/Glass";
import { Person, LocationOn, Badge, Mail, PersonAdd } from "@mui/icons-material";
import Image from "next/image";
import avatarImg from "../../public/maradonaAvatar.jpg";

const styles = (theme) => ({
    textField: {
        display: "inline",
        fontSize: "18px",
        color: theme.palette.grey[600],
        margin: "9px 0",
        [theme.breakpoints.down("md")]: {
            fontSize: "12px",
            margin: "5px 0",
        },
    },
    username: {
        fontSize: "40px",
        fontWeight: "700",
        textShadow: theme.shadows[4],
        margin: "0 0 10px 0",
        [theme.breakpoints.down("md")]: {
            fontSize: "30px",
            margin: "0",
        },
        [theme.breakpoints.down("md")]: {
            fontSize: "20px",
        },
    },
    headerIcon: {
        display: "inline",
        fontSize: "18px",
        color: theme.palette.grey[600],
        marginRight: "7px",
        [theme.breakpoints.down("md")]: {
            fontSize: "12px",
        },
    },
    headerContainer: {
        paddingLeft: "150px",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        [theme.breakpoints.between("sm", "md")]: {
            paddingLeft: "90px",
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "40px",
        },
    },
    glass: {
        width: "fill-available",
        borderRadius: theme.shape.borderRadius + "px",
        padding: "50px",
        marginLeft: "100px",
        [theme.breakpoints.between("sm", "md")]: {
            padding: "20px 30px",
            marginLeft: "50px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "20px 15px",
            marginLeft: "50px",
        },
    },
    profilePictureContainer: {
        borderRadius: theme.shape.borderRadius + "px",
        position: "absolute",
        left: "-100px",
        boxShadow: theme.shadows[4],
        [theme.breakpoints.down("md")]: {
            left: "-50px",
        },
    },
    statusBlob: {
        position: "absolute",
        height: "30px",
        width: "30px",
        borderRadius: "25px",
        background: theme.palette.primary.main,
        border: "2px solid",
        borderColor: theme.palette.primary.dark,
        top: "-15px",
        right: "-15px",
        zIndex: "100",
        [theme.breakpoints.down("md")]: {
            height: "20px",
            width: "20px",
            top: "-10px",
            right: "-10px",
        },
    },
    statusBlobOffline: {
        background: theme.palette.grey[500],
        borderColor: theme.palette.grey[700],
    },
    profilePicture: {
        borderRadius: theme.shape.borderRadius + "px",
        width: "200px",
        height: "200px",
        position: "relative",
        overflow: "hidden",
        [theme.breakpoints.down("md")]: {
            width: "100px",
            height: "100px",
        },
        [theme.breakpoints.down("sm")]: {
            width: "80px",
            height: "80px",
        },
    },
    mainHeaderAdd: {
        marginLeft: "auto",
        marginRight: "15px",
        height: "fit-content",
        [theme.breakpoints.between("sm", "md")]: {
            marginRight: "7px",
        },
        [theme.breakpoints.down("sm")]: {
            marginRight: "0",
        },
    },
    mainHeaderMail: {
        height: "fit-content",
    },
    mainHeaderSvg: {
        color: "black",
        fontSize: "40px",
        fontWeight: "700",
        filter: "drop-shadow(" + theme.shadows[4] + ")",
        [theme.breakpoints.between("sm", "md")]: {
            fontSize: "30px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px",
        },
    },
});

const ProfileHeader = ({ user }) => {
    const theme = useTheme();

    return (
        <Glass color={0} styling={styles(theme).glass}>
            <Box sx={styles(theme).profilePictureContainer}>
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
                <Box sx={styles(theme).profilePicture}>
                    <Image src={avatarImg} alt={user.username + "'s profile picture."} layout="fill" objectFit="cover" />
                </Box>
            </Box>
            <Grid container sx={styles(theme).headerContainer}>
                <Grid item xs={12} container direction="row">
                    <Typography sx={styles(theme).username}>{user.username}</Typography>
                    <IconButton sx={styles(theme).mainHeaderAdd}>
                        <PersonAdd sx={styles(theme).mainHeaderSvg} />
                    </IconButton>
                    <IconButton sx={styles(theme).mainHeaderMail}>
                        <Mail sx={styles(theme).mainHeaderSvg} />
                    </IconButton>
                </Grid>
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
            </Grid>
        </Glass>
    );
};

export default ProfileHeader;
