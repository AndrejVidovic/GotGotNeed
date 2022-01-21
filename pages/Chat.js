import { Grid, Typography, useTheme } from "@mui/material";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import Conversations from "../components/Chat/Conversations";
import Messages from "../components/Chat/Messages";
import Glass from "../components/Glass";
import dummyConversations from "../fakeData/Chat/Conversation.json";
import Footer from "../components/Layout/footer";
import { useAuth } from "../context/AuthContext";
import Error from "next/error";

const styles = (theme) => ({
    glass: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-around",
        padding: "3rem",
        marginBottom: "5rem",
        [theme.breakpoints.down("md")]: {
            padding: "3rem 1rem",
            marginBottom: "0",
        },
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingBottom: "15vh",
        [theme.breakpoints.down("lg")]: {
            marginTop: "7rem",
        },
    },
    containerConversations: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        marginTop: "1rem",
        [theme.breakpoints.down("md")]: {
            alignItems: "center",
            marginTop: "0",
        },
    },
    containerMessages: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "2.5rem",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            alignItems: "center",
            marginTop: "0",
            marginLeft: 0,
        },
    },
});
function Chat() {
    const theme = useTheme();
    const { currentUser } = useAuth();

    const [allConversations, setAllConversations] = useState(dummyConversations.sort((a, b) => b.unread - a.unread || new Date(b.time) - new Date(a.time)));
    const [archivedConversations, setArchivedConversations] = useState([]);
    const [activeConversation, setActiveConversation] = useState(null);
    const [index, setIndex] = useState(1); //određujemo jesu li otvoreni razgovori ili arhivirani
    const [ConversationIndex, setConversationIndex] = useState(0);

    const HandleArchive = (event, value) => {
        event.preventDefault();
        setAllConversations(allConversations.filter((x) => x.id !== value.id));
        setArchivedConversations([...archivedConversations, value]);
        setActiveConversation(null);
    };
    const HandleUnarchive = (event, value) => {
        event.preventDefault();
        setArchivedConversations(archivedConversations.filter((x) => x.id !== value.id));
        setAllConversations([...allConversations, value]);
        setActiveConversation(null);
    };
    const HandleDelete = (event, value) => {
        event.preventDefault();
        setAllConversations(allConversations.filter((x) => x.id !== value.id));
        setArchivedConversations(archivedConversations.filter((x) => x.id !== value.id));
        setActiveConversation(null);
    };
    const RefConversation = useRef();
    const RefMessage = useRef();
    useEffect(() => {
        if (ConversationIndex != 0 && window.innerWidth < 900) {
            if (RefConversation.current !== undefined && RefMessage.current !== undefined) {
                RefConversation.current.style.display = "none";
                RefMessage.current.style.display = "flex";
            }
        } else if (ConversationIndex == 0 && window.innerWidth < 900) {
            if (RefConversation.current !== undefined && RefMessage.current !== undefined) {
                RefConversation.current.style.display = "flex";
                RefMessage.current.style.display = "none";
            }
        }
    }, [ConversationIndex]);

    return (
        <>
            <Head>
                <title>Chat</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Grid container sx={styles(theme).container}>
                {!currentUser ? (
                    <Error statusCode={403} title="Please login to view your messages" />
                ) : (
                    <Grid item xl={8} lg={10} xs={11}>
                        <Glass color={0} styling={styles(theme).glass}>
                            <Grid item md={4} xs={12} sx={styles(theme).containerConversations} ref={RefConversation}>
                                {index === 1 ? (
                                    <Conversations
                                        activeConversation={activeConversation}
                                        setActiveConversation={setActiveConversation}
                                        conversations={allConversations}
                                        index={index}
                                        setIndex={setIndex}
                                        HandleFunction={HandleArchive}
                                        HandleDelete={HandleDelete}
                                        setConversationIndex={setConversationIndex}
                                    />
                                ) : null}
                                {index === 2 ? (
                                    <Conversations
                                        activeConversation={activeConversation}
                                        setActiveConversation={setActiveConversation}
                                        conversations={archivedConversations}
                                        index={index}
                                        setIndex={setIndex}
                                        HandleFunction={HandleUnarchive}
                                        HandleDelete={HandleDelete}
                                        setConversationIndex={setConversationIndex}
                                    />
                                ) : null}
                            </Grid>
                            <Grid item md={7} xs={11} sx={styles(theme).containerMessages} ref={RefMessage}>
                                {activeConversation ? <Messages conversation={activeConversation} setConversationIndex={setConversationIndex} /> : <Typography sx={{ paddingTop: "19rem" }}>Open conversation to view messages</Typography>}
                            </Grid>
                        </Glass>
                    </Grid>
                )}
            </Grid>
            <Footer></Footer>
        </>
    );
}
export default Chat;
