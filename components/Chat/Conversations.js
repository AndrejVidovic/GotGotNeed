import { InputBase, Grid, Paper, useTheme, Typography, Button, Avatar, Icon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Archive, Unarchive } from "@mui/icons-material";
import { useEffect, useState } from "react";

const styles = (theme) => ({
    searchPaper: {
        borderRadius: theme.shape.borderRadius + "px",
        height: "45px",
        width: "90%",
        display: "flex",
        alignItems: "center",
        marginBottom: "1.9rem",
    },
    conversationPaper: {
        height: "52px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "0.8rem",
        marginTop: "0.5rem",
        boxShadow: theme.shadows[4],
        position: "relative",
    },
    name: {
        fontWeight: 700,
        fontSize: "19px",
        paddingLeft: "0.5rem",
    },
    conversationGrid: {
        height: "33rem",
        width: "90%",
        marginBottom: "15px",
    },
    deleteIcon: {
        marginRight: "0.5rem",
        color: theme.palette.secondary.light,
        "&:hover": {
            cursor: "pointer",
        },
    },
    archiveIcon: {
        marginRight: "0.7rem",
        marginLeft: "auto",
        color: theme.palette.primary.main,
        "&:hover": {
            cursor: "pointer",
        },
    },
    searchIcon: {
        margin: "0 0.5rem 0 0.5rem",
    },
    archivedButton: {
        width: "90%",
        padding: "0.7rem 0",
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    conversationActivePaper: {
        height: "50px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "0.8rem",
        marginTop: "0.5rem",
        boxShadow: theme.shadows[4],
        position: "relative",
        backgroundColor: theme.palette.primary.light,
    },
});
function Conversations({ activeConversation, setActiveConversation, conversations, index, setIndex, HandleFunction, HandleDelete }) {
    const theme = useTheme();
    const allconversations = conversations.sort((a, b) => b.unread - a.unread || new Date(b.time) - new Date(a.time));
    const [filteredConversations, setFilteredConversations] = useState(conversations.sort((a, b) => b.unread - a.unread || new Date(b.time) - new Date(a.time)));
    const HandleActive = (event, value) => {
        event.preventDefault();
        setActiveConversation(value);
    };

    const HandleArchived = (event) => {
        event.preventDefault();
        if (index === 1) {
            setIndex(2);
        } else setIndex(1);
    };

    const searchFilter = (event) => {
        let tempSearchWord = event.target.value;
        let searchWord = tempSearchWord.toLowerCase();
        let tempFilteredItems = [];

        if (searchWord != "") {
            tempFilteredItems = allconversations.filter((x) => x.sender.toLowerCase().includes(searchWord));
        } else {
            tempFilteredItems = allconversations;
        }
        setFilteredConversations(tempFilteredItems);
    };
    useEffect(() => {
        setFilteredConversations(allconversations);
    }, [allconversations]);

    return (
        <>
            <Paper sx={styles(theme).searchPaper}>
                <SearchIcon sx={styles(theme).searchIcon}></SearchIcon>
                <InputBase placeholder="Search" onChange={(event) => searchFilter(event)}></InputBase>
            </Paper>
            <Grid item sx={styles(theme).conversationGrid}>
                {filteredConversations.map((conversation) => (
                    <Paper sx={activeConversation === conversation.id ? styles(theme).conversationActivePaper : styles(theme).conversationPaper} onClick={(event) => HandleActive(event, conversation)} key={conversation.id}>
                        <Avatar src="/maradonaAvatar.jpg    " />
                        <Typography sx={styles(theme).name}>{conversation.sender}</Typography>
                        {conversation.unread ? <Icon sx={{ color: "#04C000" }}>chat_bubble_icon</Icon> : null}
                        {index === 1 ? (
                            <Icon sx={styles(theme).archiveIcon} onClick={(event) => HandleFunction(event, conversation)}>
                                archive_icon
                            </Icon>
                        ) : null}
                        {index === 2 ? (
                            <Icon sx={styles(theme).archiveIcon} onClick={(event) => HandleFunction(event, conversation)}>
                                unarchive_icon
                            </Icon>
                        ) : null}
                        <Icon sx={styles(theme).deleteIcon} onClick={(event) => HandleDelete(event, conversation)}>
                            delete_forever_icon
                        </Icon>
                    </Paper>
                ))}
            </Grid>
            {index === 1 ? (
                <Button variant="contained" sx={styles(theme).archivedButton} startIcon={<Archive />} onClick={(event) => HandleArchived(event)}>
                    Archived
                </Button>
            ) : null}
            {index === 2 ? (
                <Button variant="contained" sx={styles(theme).archivedButton} startIcon={<Unarchive />} onClick={(event) => HandleArchived(event)}>
                    Unarchived
                </Button>
            ) : null}
        </>
    );
}
export default Conversations;
