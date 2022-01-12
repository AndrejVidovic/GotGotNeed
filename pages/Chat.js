import { Grid, Typography, useTheme } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import Conversations from "../components/Chat/Conversations";
import Messages from "../components/Chat/Messages";
import Glass from "../components/Glass";
import dummyConversations from "../fakeData/Chat/Conversation.json";
import Footer from "../components/Layout/footer";

const styles = (theme) => ({
    glass: {
        height: "764px",
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingBottom: "15vh",
    },
    containerConversations: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "4rem",
        width: "100%",
    },
});
function Chat() {
    const theme = useTheme();
    const [allConversations, setAllConversations] = useState(dummyConversations.sort((a, b) => b.unread - a.unread || new Date(b.time) - new Date(a.time)));
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

    return (
        <>
            <Head>
                <title>Chat</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Grid container sx={styles(theme).container}>
                <Grid item xl={7} lg={8} md={8} sm={10} xs={10}>
                    <Glass color={0} styling={styles(theme).glass}>
                        <Grid item xl={4} lg={4} sx={styles(theme).containerConversations}>
                            {index === 1 ? <Conversations activeConversation={activeConversation} setActiveConversation={setActiveConversation} conversations={allConversations} index={index} setIndex={setIndex} HandleFunction={HandleArchive} HandleDelete={HandleDelete}></Conversations> : null}
                            {index === 2 ? (
                                <Conversations activeConversation={activeConversation} setActiveConversation={setActiveConversation} conversations={archivedConversations} index={index} setIndex={setIndex} HandleFunction={HandleUnarchive} HandleDelete={HandleDelete}></Conversations>
                            ) : null}
                        </Grid>
                        <Grid item xl={7} lg={7} sx={styles(theme).containerConversations}>
                            {activeConversation ? <Messages conversation={activeConversation}></Messages> : <Typography>Open conversation to view messages</Typography>}
                        </Grid>
                    </Glass>
                </Grid>
            </Grid>
            <Footer></Footer>
        </>
    );
}
export default Chat;
