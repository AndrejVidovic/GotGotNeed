import { AddBox, AddPhotoAlternate, PersonAdd, Send } from "@mui/icons-material";
import { Avatar, Grid, IconButton, Typography, useTheme, Paper, InputBase, Button, lighten } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import dummyMessages from "../../fakeData/Chat/Messages.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const styles = (theme) => ({
    messagesHeader: {
        height: "70px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginBottom: "1rem",
    },
    messagesGrid: {
        height: "39rem",
        width: "100%",
        marginBottom: "10px",
    },
    paper: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
        boxShadow: theme.shadows[2],
        overflow: "auto",
    },
    sendGrid: {
        height: "70px",
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
    newMessageBox: {
        backgroundColor: "white",
        width: "80%",
        height: "45px",
        borderRadius: theme.shape.borderRadius + "px",
        boxShadow: theme.shadows[4],
        paddingLeft: "1rem",
        [theme.breakpoints.down("md")]: {
            margin: "0 1rem",
            height: "35px",
        },
    },
    icons: {
        width: "40px",
        height: "40px",
        margin: "0.5rem 0.2rem 0.5rem 0.2rem",
        [theme.breakpoints.down("md")]: {
            margin: "0.5rem 0.1rem 0.5rem 0.1rem",
            width: "35px",
            height: "35px",
        },
    },
    username: {
        fontSize: "20px",
        fontWeight: 500,
        width: "15rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
        [theme.breakpoints.down("md")]: {
            width: "8rem",
            fontSize: "17px",
        },
    },
    country: {
        fontSize: "17px",
        fontWeight: 400,
        width: "15rem",
        [theme.breakpoints.down("md")]: {
            width: "8rem",
            fontSize: "14px",
        },
        paddingLeft: "0.5rem",
    },
    senderMessage: {
        width: "80%",
        margin: "1vh 0",
        backgroundColor: lighten(theme.palette.secondary.light, 0.6),
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "1vh",
        marginRight: "auto",
        padding: "0.6rem",
    },
    recipientMessage: {
        width: "80%",
        margin: "1vh 0",
        backgroundColor: lighten(theme.palette.primary.light, 0.6),
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: "auto",
        marginRight: "1vh",
        padding: "0.6rem",
    },
    iconButton: {
        padding: "4px",
        [theme.breakpoints.down("md")]: {
            padding: 0,
        },
    },
    playIcon: {
        margin: "0 0 5px 15px",
        [theme.breakpoints.between("md", "xl")]: {
            margin: "0 0 2px 10px",
        },
        transform: "rotate(180deg)",
    },
    backButton: {
        color: "white",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        fontSize: "15px",
        padding: "10px 15px 10px 5px",
        marginTop: "2rem",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
        width: "100%",
    },
});
//glumi usera koji je prijavljen to je primatelj ovih poruka
const DUMMYUSER = {
    id: 1,
    username: "PetarPetric",
};
function Messages({ conversation, setConversationIndex }) {
    const theme = useTheme();
    const [messages, setMessages] = useState(dummyMessages);
    const [user, setUser] = useState(DUMMYUSER);
    const [newMessage, setNewMessage] = useState({
        id: 11,
        text: "",
        user_id: user.id,
        date: new Date().toLocaleDateString(),
        conversation_id: conversation.id,
    });
    const ScrollRef = useRef();
    useEffect(() => {
        ScrollRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
    }, [messages]);

    const HandleChange = (prop) => (event) => {
        setNewMessage({ ...newMessage, [prop]: event.target.value });
    };

    const HandleSend = () => {
        if (newMessage.text !== "") {
            setMessages([...messages, newMessage]);
        }
        conversation.time = new Date();
    };
    const HandleBack = () => {
        setConversationIndex(0);
    };
    return (
        <>
            <Grid item sx={styles(theme).messagesHeader}>
                <Avatar src="/maradonaAvatar.jpg" sx={{ width: 60, height: 60 }}></Avatar>
                <Grid sx={{ marginLeft: "1rem" }}>
                    <Typography variant="body1" sx={styles(theme).username}>
                        {conversation.sender}
                    </Typography>
                    <Grid sx={{ display: "flex", alignItems: "center" }}>
                        <Image
                            src="https://flagcdn.com/20x15/hr.png"
                            srcset="https://flagcdn.com/40x30/hr.png 2x,
                             https://flagcdn.com/60x45/hr.png 3x"
                            width="20"
                            height="15"
                            alt="South Africa"
                        />
                        <Typography variant="body1" sx={styles(theme).country}>
                            {conversation.city}, {conversation.country}
                        </Typography>
                    </Grid>
                </Grid>
                <IconButton sx={{ marginRight: "0.5rem", marginLeft: "auto" }}>
                    <PersonAdd sx={{ width: "40px", height: "40px" }}></PersonAdd>
                </IconButton>
            </Grid>
            <Grid item sx={styles(theme).messagesGrid}>
                <Paper sx={styles(theme).paper}>
                    {messages.map((message) => (
                        <Grid key={message.id} ref={ScrollRef}>
                            <Paper sx={message.user_id === user.id ? styles(theme).recipientMessage : styles(theme).senderMessage}>
                                <Typography>{message.text}</Typography>
                                <Typography sx={{ fontSize: "11px", paddingTop: "0.5rem", marginLeft: "auto", marginRight: "1rem" }}>{message.date}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Paper>
            </Grid>
            <Grid sx={styles(theme).sendGrid}>
                <IconButton sx={styles(theme).iconButton}>
                    <AddBox sx={styles(theme).icons} />
                </IconButton>
                <IconButton sx={styles(theme).iconButton}>
                    <AddPhotoAlternate sx={styles(theme).icons} />
                </IconButton>
                <InputBase placeholder="New message" sx={styles(theme).newMessageBox} onChange={HandleChange("text")} />
                <IconButton sx={styles(theme).iconButton}>
                    <Send sx={styles(theme).icons} onClick={HandleSend} />
                </IconButton>
            </Grid>
            <Button variant="contained" sx={styles(theme).backButton} onClick={HandleBack}>
                <FontAwesomeIcon icon={faPlay} size="28px" color="white" style={styles(theme).playIcon} />
                back
            </Button>
        </>
    );
}
export default Messages;
