import { useTheme, Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const styles = (theme) => ({
    bluePaper: {
        padding: "15px", //bilo 20px
        margin: "4rem 0",
        display: "flex",
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.shape.borderRadius + "px",
        [theme.breakpoints.down("lg")]: {
            padding: "12.5px",
            margin: "2.5rem 0 3rem 0",
        },
    },
    inputPaper: {
        borderRadius: theme.shape.borderRadius + "px",
        height: "44px", //bilo 40px
        width: "100%",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.down("lg")]: {
            height: "35px",
        },
    },
    input: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        fontSize: "1.2rem",
        [theme.breakpoints.down("lg")]: {
            fontSize: "0.9rem",
        },
    },
    icon: {
        margin: "10px 20px",
        [theme.breakpoints.down("lg")]: {
            margin: "8px 12px",
        },
    },
});

const Search = ({ itemsToFilter, setFilteredItems, propertiesToSearch, children }) => {
    const theme = useTheme();

    const searchFilter = (event) => {
        let tempSearchWord = event.target.value;
        let searchWord = tempSearchWord.toLowerCase();
        let tempFilteredItems = [];

        if (searchWord != "") {
            tempFilteredItems = itemsToFilter.filter((itemOfSearch) => {
                let indicator = false;
                for (let i = 0; i < propertiesToSearch.length; i++) {
                    if (itemOfSearch[propertiesToSearch[i]].toLowerCase().includes(searchWord.toLowerCase())) indicator = true;
                }
                return indicator;
            });
        } else {
            tempFilteredItems = itemsToFilter;
        }

        setFilteredItems(tempFilteredItems);
    };

    return (
        <Paper sx={styles(theme).bluePaper}>
            <Paper sx={styles(theme).inputPaper} component="form">
                <SearchIcon sx={styles(theme).icon} />
                <InputBase sx={styles(theme).input} placeholder="Search" onChange={(e) => searchFilter(e)} />
            </Paper>
            {children}
        </Paper>
    );
};

export default Search;
