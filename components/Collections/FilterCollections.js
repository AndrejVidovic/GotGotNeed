import {
    FormControl,
    Grid,
    InputLabel,
    Select,
    Typography,
    useTheme,
} from "@mui/material";
import Search from "../Search";
const styles = (theme) => ({
    searchGrid: {
        width: "70%",
    },
    title: {
        fontWeight: 700,
        marginTop: "2.5rem",
        fontSize: "35px",
        marginBottom: "2rem",
        textShadow: theme.shadows[4],
    },
});
function FilterCollections() {
    const theme = useTheme();
    return (
        <>
            <Typography sx={styles(theme).title}>FILTER</Typography>
            <Grid sx={styles(theme).searchGrid}>
                <Search />
            </Grid>
            <Grid>
                <FormControl>
                    <InputLabel id="select-publisher-checkbox-label">
                        Publisher
                    </InputLabel>
                    <Select
                        labelId="select-publisher-checkbox-label"
                        id="publisher-checkbox"
                    ></Select>
                </FormControl>
            </Grid>
        </>
    );
}
export default FilterCollections;
