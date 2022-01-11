import { Grid, useTheme } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import Conversations from "../components/Chat/Conversations";
import Glass from "../components/Glass";
import dummyConversations from "../fakeData/Chat/Conversation.json";

const styles = (theme) => ({
    glass: {
        height: "764px",
        width: "100%",
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
});
function Chat() {
    const theme = useTheme();
    const [allConversations, setAllConversations] = useState(
        dummyConversations.sort(
            (a, b) => b.unread - a.unread || new Date(b.time) - new Date(a.time)
        )
    );
    const [archivedConversations, setArchivedConversations] = useState([]);
    const [activeConversation, setActiveConversation] = useState(null);
    const [index, setIndex] = useState(1); //određujemo jesu li otvoreni razgovori ili arhivirani

    const HandleArchive = (event, value) => {
        event.preventDefault();
        setAllConversations(allConversations.filter((x) => x.id !== value.id));
        setArchivedConversations([...archivedConversations, value]);
        setActiveConversation(null);
    };
    const HandleUnarchive = (event, value) => {
        event.preventDefault();
        setArchivedConversations(
            archivedConversations.filter((x) => x.id !== value.id)
        );
        setAllConversations([...allConversations, value]);
        setActiveConversation(null);
    };
    const HandleDelete = (event, value) => {
        event.preventDefault();
        setAllConversations(allConversations.filter((x) => x.id !== value.id));
        setArchivedConversations(
            archivedConversations.filter((x) => x.id !== value.id)
        );
    };

    return (
        <>
            <Head>
                <title>Chat</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Grid container sx={styles(theme).container}>
                <Grid item xl={6} lg={8} md={8} sm={10} xs={10}>
                    <Glass color={0} styling={styles(theme).glass}>
                        {index === 1 ? (
                            <Conversations
                                activeConversation={activeConversation}
                                setActiveConversation={setActiveConversation}
                                conversations={allConversations}
                                index={index}
                                setIndex={setIndex}
                                HandleFunction={HandleArchive}
                                HandleDelete={HandleDelete}
                            ></Conversations>
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
                            ></Conversations>
                        ) : null}
                        <Grid item></Grid>
                    </Glass>
                </Grid>
            </Grid>
        </>
    );
}
export default Chat;
