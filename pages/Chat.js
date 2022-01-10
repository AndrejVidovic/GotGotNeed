import { Grid, useTheme } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import Conversations from "../components/Chat/Conversations";
import Glass from "../components/Glass";
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
    const [conversation, setConversation] = useState();
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
                        <Conversations></Conversations>
                        <Grid item></Grid>
                    </Glass>
                </Grid>
            </Grid>
        </>
    );
}
export default Chat;
