import { Grid, Box, useTheme } from "@mui/material";
import Image from "next/image";
import avatar1 from "../../public/maradonaAvatar.jpg";
import avatar2 from "../../public/ronaldoAvatar.jpg";
import avatar3 from "../../public/berbatovAvatar.jpg";
import avatar4 from "../../public/bestAvatar.jpg";
import CollectorsCardHeader from "./CollectorsCardHeader";
import Link from "next/link";
import Glass from "../../components/Glass";

const styles = (theme) => ({
    card: {
        borderRadius: theme.shape.borderRadius + "px",
        overflow: "hidden",
        boxShadow: theme.shadows[1],
        position: "relative",
        height: "375px",
        width: "100%",
        transition: "all 0.3s ease",
        "&:hover": {
            transform: "scale(1.03)",
            cursor: "pointer",
        },
    },
    cardImage: {
        position: "relative",
        width: "100%",
        height: "55%",
    },
});

const CollectorCard = ({ user }) => {
    const theme = useTheme();

    let avatars = [avatar1, avatar2, avatar3, avatar4];

    return (
        <Grid item xl={4} md={6} xs={12}>
            <Link href={`/Collectors/${user.username}`} passHref>
                <Box sx={styles(theme).card}>
                    <Box sx={styles(theme).cardImage}>
                        <Image src={avatars[user.img - 1]} alt={"najs"} layout="fill" objectFit="cover" />
                    </Box>
                    <CollectorsCardHeader user={user} />
                    <Glass styling={{ position: "absolute", top: "40px", left: "0", width: "60px", height: "25px", background: "rgba(255, 152, 0, 0.9)", border: "3px solid #feb64d", fontSize: "15px", fontWeight: 700 }} color={3}>
                        {`- `}
                        {user.reviews.filter((review) => review.positive === 0).length}
                        {/*Broj NEGATIVNIH */}
                    </Glass>
                    <Glass styling={{ position: "absolute", top: "10px", left: "0", width: "60px", height: "25px", background: "rgba(15, 109, 202, 0.85)", border: "3px solid #71a5d7", fontSize: "15px", color: "white", fontWeight: 700 }} color={3}>
                        {`+ `}
                        {user.reviews.filter((review) => review.positive === 1).length}
                        {/*Broj POZITIVNIH */}
                    </Glass>
                </Box>
            </Link>
        </Grid>
    );
};

export default CollectorCard;
