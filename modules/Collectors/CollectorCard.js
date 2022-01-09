import { Grid, Box, useTheme } from "@mui/material";
import Image from "next/image";
import avatarImg from "../../public/maradonaAvatar.jpg";
import CollectorsCardHeader from "./CollectorsCardHeader";
import Link from "next/link";

const styles = (theme) => ({
    card: {
        borderRadius: theme.shape.borderRadius + "px",
        overflow: "hidden",
        boxShadow: theme.shadows[1],
        position: "relative",
        height: "350px",
        width: "100%",
    },
    cardImage: {
        position: "relative",
        width: "100%",
        height: "55%",
        "&:hover": {
            cursor: "pointer",
        },
    },
});

const CollectorCard = ({ user }) => {
    const theme = useTheme();

    return (
        <Grid item xl={4} md={6} xs={12}>
            <Box sx={styles(theme).card}>
                <Box sx={styles(theme).cardImage}>
                    <Link href={`/Collectors/${user.username}`} passHref>
                        <Image
                            src={avatarImg}
                            alt={"najs"}
                            layout="fill"
                            objectFit="cover"
                        />
                    </Link>
                </Box>
                <CollectorsCardHeader user={user} />
            </Box>
        </Grid>
    );
};

export default CollectorCard;
