import { Collapse, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Select, Typography, useTheme, FilledInput, InputLabel, Button, IconButton } from "@mui/material";
import { useState } from "react";
import { Category, ExpandCircleDown, FilterAlt } from "@mui/icons-material";
const styles = (theme) => ({
    title: {
        fontWeight: 700,
        marginTop: "2.5rem",
        fontSize: "35px",
        marginBottom: "1rem",
        textShadow: theme.shadows[4],
    },
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: "1rem",
        marginTop: "1rem",
        position: "relative",
        overflow: "hidden",
        justifyContent: "flex-start",
        width: "70%",
        [theme.breakpoints.down("md")]: {
            width: "80%",
        },
    },
    countryContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            margin: "2rem 0 0 0",
        },
    },
    select: {
        marginBottom: "2rem",
        width: "80%",
        backgroundColor: "white",
        boxShadow: theme.shadows[1],
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
    expandGrid: {
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    expandIcon: {
        transform: "rotate(180deg)",
        color: theme.palette.primary.main,
        fontSize: "2.5rem",
        position: "relative",
    },
    filterButton: {
        paddingTop: "1rem",
        margin: "1rem 0",
        width: "70%",
        [theme.breakpoints.down("md")]: {
            width: "80%",
        },
        fontWeight: 700,
        zIndex: 100,
    },
    containerGrid: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    typography: {
        fontWeight: 600,
        fontSize: "18px",
        color: "black",
    },
    selectCollections: {
        width: "100%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
});
function SwapFilter() {
    const theme = useTheme();
    const [expand, setExpand] = useState(false);
    return (
        <>
            <Grid>
                <Typography sx={styles(theme).title}>FILTER</Typography>
            </Grid>
            <Collapse in={expand} sx={{ width: "100%", overflow: "hidden" }}>
                <Grid container sx={styles(theme).containerGrid}>
                    <Grid container sx={styles(theme).container}>
                        <Grid item md={3} xs={12}>
                            <FormControl sx={{ marginLeft: "0.5rem" }}>
                                <FormLabel id="radio-buttons-group-label" sx={styles(theme).typography}>
                                    Last Seen
                                </FormLabel>
                                <RadioGroup aria-labelledby="radio-buttons-group-label" defaultValue="Online" name="radio-buttons-group">
                                    <FormControlLabel value="Online" label="Online" control={<Radio />}></FormControlLabel>
                                    <FormControlLabel value="Today" label="Today" control={<Radio />}></FormControlLabel>
                                    <FormControlLabel value="7days" label="7 days ago" control={<Radio />}></FormControlLabel>
                                    <FormControlLabel value="1month" label="1 month ago" control={<Radio />}></FormControlLabel>
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item sx={styles(theme).countryContainer} md={5} xs={12}>
                            <FormControl variant="filled" sx={styles(theme).select}>
                                <InputLabel id="select-country-group-label">Country</InputLabel>
                                <Select labelId="select-country-group-label" id="country-checkbox" multiple multiline input={<FilledInput label="Region" />}></Select>
                            </FormControl>
                            <FormControl variant="filled" sx={styles(theme).select}>
                                <InputLabel id="select-region-group-label">Region</InputLabel>
                                <Select labelId="select-region-group-label" id="region-checkbox" multiple multiline input={<FilledInput label="Region" />}></Select>
                            </FormControl>
                            <FormControl variant="filled" sx={styles(theme).select}>
                                <InputLabel id="select-city-group-label">City</InputLabel>
                                <Select labelId="select-city-group-label" id="city-checkbox" multiple multiline></Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <FormControl sx={styles(theme).selectCollections}>
                                <FormLabel id="select-collections-group-label" sx={styles(theme).typography}>
                                    Select Collections
                                </FormLabel>
                                <Select labelId="select-collections-group-label" id="collections-checkbox" multiple multiline input={<FilledInput label="Region" />}></Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Button variant="contained" type="button" sx={styles(theme).filterButton}>
                        Filter
                    </Button>
                </Grid>
            </Collapse>
            <Grid sx={styles(theme).expandGrid}>
                {expand ? (
                    <IconButton onClick={() => setExpand(false)}>
                        <ExpandCircleDown sx={styles(theme).expandIcon}></ExpandCircleDown>
                    </IconButton>
                ) : (
                    <Button variant="contained" color="primary" sx={{ borderRadius: "25px", padding: 0, minWidth: 0, width: "30px", height: "30px" }} onClick={() => setExpand(true)}>
                        <FilterAlt />
                    </Button>
                )}
            </Grid>
        </>
    );
}
export default SwapFilter;
