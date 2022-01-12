import { AddBox, AddPhotoAlternate, PersonAdd, Send } from "@mui/icons-material";
import { Avatar, Grid, IconButton, Typography, useTheme, Paper, InputBase } from "@mui/material";
import { useState } from "react";
import dummyMessages from "../../fakeData/Chat/Messages.json";
const styles = (theme) => ({
    messagesHeader: {
        height: "70px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginBottom: "1rem",
    },
    messagesGrid: {
        height: "32rem",
        width: "100%",
        marginBottom: "10px",
    },
    paper: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        boxShadow: theme.shadows[2],
    },
    sendGrid: {
        height: "70px",
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
});
function Messages({ conversation }) {
    const theme = useTheme();
    const [messages, setMessages] = useState(dummyMessages);
    return (
        <>
            <Grid item sx={styles(theme).messagesHeader}>
                <Avatar src="/maradonaAvatar.jpg" sx={{ width: 60, height: 60 }}></Avatar>
                <Grid>
                    <Typography>{conversation.sender}</Typography>
                    <Typography>
                        {conversation.city}, {conversation.country}
                    </Typography>
                </Grid>
                <IconButton>
                    <PersonAdd></PersonAdd>
                </IconButton>
            </Grid>
            <Grid item sx={styles(theme).messagesGrid}>
                <Paper sx={styles(theme).paper}></Paper>
            </Grid>
            <Grid sx={styles(theme).sendGrid}>
                <IconButton>
                    <AddBox></AddBox>
                </IconButton>
                <IconButton>
                    <AddPhotoAlternate></AddPhotoAlternate>
                </IconButton>
                <InputBase placeholder="New message"></InputBase>
                <IconButton>
                    <Send></Send>
                </IconButton>
            </Grid>
        </>
    );
}
export default Messages;
