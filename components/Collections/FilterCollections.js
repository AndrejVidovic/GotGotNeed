import { Button, Checkbox, Collapse, FormControl, Grid, IconButton, InputLabel, ListItemText, MenuItem, FilledInput, Select, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import Search from "../Search";
import { Category, ExpandCircleDown, FilterAlt } from "@mui/icons-material";

const styles = (theme) => ({
    searchGrid: {
        width: "70%",
        [theme.breakpoints.down("md")]: {
            width: "80%",
        },
    },
    title: {
        fontWeight: 700,
        marginTop: "2.5rem",
        fontSize: "35px",
        marginBottom: "1rem",
        textShadow: theme.shadows[4],
    },
    select: {
        marginBottom: "2rem",
        width: "45%",
        backgroundColor: "white",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
    formControlGrid: {
        width: "70%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 0,
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            width: "80%",
        },
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "1rem",
        marginTop: "1rem",
        position: "relative",
        overflow: "hidden",
    },
    filterButton: {
        paddingTop: "1rem",
        margin: "1rem 0",
        width: "70%",
        [theme.breakpoints.down("md")]: {
            width: "80%",
        },
        fontWeight: 700,
        // [theme.breakpoints.down("md")]: {
        // },
        zIndex: 100,
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
});
function FilterCollections({ setCategory, setPublisher, publisher, category, collections, setFilteredCollections }) {
    const theme = useTheme();
    const allData = collections;
    const [expand, setExpand] = useState(false);

    const HandleChangePublisher = (event) => {
        let value = event.target.value;
        setPublisher(value);
    };
    const HandleChangeCategory = (event) => {
        let value = event.target.value;
        setCategory(value);
    };

    const findCategory = () => {
        //iz odabranih izdavaća dohvaćamo samo njihove kategorije
        let temp = []; //sprema samo one odabrane publishere
        let tempCategory = []; // iz odabranih uzimamo samo kategorije
        temp = allData.filter((x) => publisher.includes(x.publisher));
        if (publisher.length === 0) temp = allData;
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].categories.length; j++) {
                tempCategory.push(temp[i].categories[j]);
            }
        }

        let allUniqueCategory = [...new Set(tempCategory)];
        return allUniqueCategory;
    };
    const getPublisher = () => {
        let temp = allData;
        let tempPublisher = [];
        for (let i = 0; i < temp.length; i++) {
            tempPublisher.push(temp[i].publisher);
        }
        let allUniquePublisher = [...new Set(tempPublisher)];
        return allUniquePublisher;
    };

    const handleFilter = () => {
        let tempPublisher = [];
        let tempCategory = [];
        if (publisher.length > 0) {
            tempPublisher = allData.filter((x) => publisher.includes(x.publisher));
            if (category.length > 0) {
                tempCategory = tempPublisher.filter((x) => {
                    let returnValue = false;
                    for (let i = 0; i < x.categories.length; i++) {
                        if (category.includes(x.categories[i])) {
                            returnValue = true;
                        }
                    }
                    return returnValue;
                });
                setFilteredCollections(tempCategory);
            } else {
                setFilteredCollections(tempPublisher);
            }
        } else {
            tempPublisher = allData;
            if (category.length > 0) {
                tempCategory = tempPublisher.filter((x) => {
                    let returnValue = false;
                    for (let i = 0; i < x.categories.length; i++) {
                        if (category.includes(x.categories[i])) {
                            returnValue = true;
                        }
                    }
                    return returnValue;
                });
                setFilteredCollections(tempCategory);
            } else {
                setFilteredCollections(allData);
            }
        }
    };

    return (
        <>
            <Grid sx={styles(theme).titleGrid}>
                <Typography sx={styles(theme).title}>FILTER</Typography>
            </Grid>
            <Collapse in={expand} sx={{ width: "100%", overflow: "hidden" }}>
                <Grid item container sx={styles(theme).container}>
                    <Grid sx={styles(theme).searchGrid}>
                        <Search itemsToFilter={allData} setFilteredItems={setFilteredCollections} propertiesToSearch={["name", "publisher"]} />
                    </Grid>
                    <Grid container item spacing={6} sx={styles(theme).formControlGrid} xs={12}>
                        <FormControl variant="filled" sx={styles(theme).select}>
                            <InputLabel id="select-publisher-checkbox-label">Publisher</InputLabel>
                            <Select labelId="select-publisher-checkbox-label" id="publisher-checkbox" multiple multiline value={publisher} onChange={HandleChangePublisher} input={<FilledInput label="Publisher" />} renderValue={(selected) => selected.join(", ")}>
                                {getPublisher().map((data) => (
                                    <MenuItem key={data} value={data}>
                                        <Checkbox checked={publisher.indexOf(data) > -1} />
                                        <ListItemText primary={data} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl variant="filled" color="primary" sx={styles(theme).select}>
                            <InputLabel id="select-category-checkbox-label">Category</InputLabel>
                            <Select labelId="select-category-checkbox-label" id="category-checkbox" multiple multiline value={category} onChange={HandleChangeCategory} input={<FilledInput label="Category" />} renderValue={(selected) => selected.join(", ")}>
                                {findCategory().map((data) => (
                                    <MenuItem key={data} value={data}>
                                        <Checkbox checked={category.indexOf(data) > -1} />
                                        <ListItemText primary={data} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Button variant="contained" type="button" sx={styles(theme).filterButton} onClick={handleFilter}>
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
export default FilterCollections;
