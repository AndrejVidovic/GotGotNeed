import { useTheme, Paper, Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const styles = (theme) => ({
    paper: {
        padding: "1.5vh",
        backgroundColor: theme.palette.primary.main,
    },
    input: {
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        borderRadius: theme.shape.borderRadius,
        paddingLeft: "2vh",
    },
    textfiledInput: {
        borderRadius: theme.shape.borderRadius,
        marginLeft: "2vh",
    },
});
function SearchNews(props) {
    var news = props.news;
    const theme = useTheme();

    const handleChange = (event) => {
        let target = event.target.value;
        let temp = [];
        console.log(target);
        if (target != "") {
            temp = news.filter(
                (x) =>
                    x.title.toLowerCase().includes(target) ||
                    x.description.toLowerCase().includes(target) ||
                    x.date.toLowerCase().includes(target)
            );
        } else {
            temp = news;
        }
        props.setFilteredNews(temp);
        props.setCurrentPage(1);
        console.log(temp);
    };
    return (
        <Paper sx={styles(theme).paper}>
            <Box sx={styles(theme).input}>
                <SearchIcon />
                <TextField
                    id="search-news"
                    type="text"
                    label="Search for news here..."
                    variant="standard"
                    sx={styles(theme).textfiledInput}
                    fullWidth
                    /*value={text} */ onChange={handleChange}
                    autoComplete="off"
                />
            </Box>
        </Paper>
    );
}
export default SearchNews;
