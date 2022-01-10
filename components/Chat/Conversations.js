import {
    InputBase,
    Grid,
    Paper,
    useTheme,
    Typography,
    Button,
    Avatar,
    Icon,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import dummyConversations from "../../fakeData/Chat/Conversation.json";
const styles = (theme) => ({
    searchPaper: {
        borderRadius: theme.shape.borderRadius + "px",
        height: "45px",
        width: "90%",
        display: "flex",
        alignItems: "center",
        marginBottom: "2rem",
    },
    conversationPaper: {
        height: "50px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "0.8rem",
        marginTop: "0.5rem",
        boxShadow: theme.shadows[4],
        position: "relative",
    },
    name: {
        fontWeight: 700,
        fontSize: "20px",
        paddingLeft: "0.5rem",
    },
    container: {
        display: "flex",
        alignItem: "center",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginTop: "4rem",
    },
    conversationGrid: {
        height: "34rem",
        width: "90%",
    },
    deleteIcon: {
        marginRight: "0.5rem",
        color: theme.palette.secondary.light,
    },
    archiveIcon: {
        marginRight: "0.7rem",
        marginLeft: "auto",
        color: theme.palette.primary.main,
    },
    searchIcon: {
        margin: "0 0.5rem 0 0.5rem",
    },
});
function Conversations() {
    const theme = useTheme();
    const allConversations = dummyConversations.sort(
        (a, b) => b.unread - a.unread || new Date(b.time) - new Date(a.time)
    );

    return (
        <Grid item xl={4} sx={styles(theme).container}>
            <Paper sx={styles(theme).searchPaper}>
                <SearchIcon sx={styles(theme).searchIcon}></SearchIcon>
                <InputBase placeholder="Search"></InputBase>
            </Paper>
            <Grid item sx={styles(theme).conversationGrid}>
                {allConversations.map((conversation) => (
                    <Paper sx={styles(theme).conversationPaper}>
                        <Avatar src="/maradonaAvatar.jpg    " />
                        <Typography sx={styles(theme).name}>
                            {conversation.sender}
                        </Typography>
                        {conversation.unread ? (
                            <Icon sx={{ color: "green" }}>
                                chat_bubble_icon{" "}
                            </Icon>
                        ) : null}
                        <Icon sx={styles(theme).archiveIcon}>archive_icon</Icon>
                        <Icon sx={styles(theme).deleteIcon}>
                            delete_forever_icon
                        </Icon>
                    </Paper>
                ))}
            </Grid>
            <Button variant="contained" sx={{ width: "90%" }}>
                Archived
            </Button>
        </Grid>
    );
}
export default Conversations;
