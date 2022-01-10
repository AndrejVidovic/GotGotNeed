import {
    Button,
    Checkbox,
    Collapse,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    Typography,
    useTheme,
} from "@mui/material";
import { useState } from "react";
import Search from "../Search";
import { ExpandCircleDown } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
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
        margin: "2rem 1rem 2rem 1rem",
        width: "14rem",
        [theme.breakpoints.down("md")]: {
            margin: "1rem 1rem 1rem 1rem",
        },
    },
    formControlGrid: {
        width: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "1rem",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
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
        padding: "0.5rem 4rem",
        fontWeight: 700,
        [theme.breakpoints.down("md")]: {
            margin: "1rem 1rem 0rem 1rem",
        },
        zIndex: 100,
    },
    expandGrid: {
        marginBottom: "0.7rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    expandIcon: {
        transform: "rotate(180deg)",
        color: theme.palette.primary.main,
        fontSize: "2.2rem",
    },
    halfCircle: {
        position: "absolute",
        top: 5,
        right: -45,
        left: "auto",
        display: "flex",
        justifyContent: "flex-end",
    },
    triangleTop: {
        position: "absolute",
        top: -15,
        left: 90,
        display: "flex",
        justifyContent: "flex-start",
        [theme.breakpoints.down("md")]: {
            left: 40,
            top: -25,
        },
    },
    fullCircle: {
        position: "absolute",
        bottom: 20,
        left: 50,
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        [theme.breakpoints.down("md")]: {
            left: 10,
            bottom: 10,
        },
        zIndex: 0,
    },
    titleGrid: {
        position: "relative",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        overflow: "hidden",
    },
});
function FilterCollections({
    setCategory,
    setPublisher,
    publisher,
    category,
    collections,
    setFilteredCollections,
}) {
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
        for (let i = 0; i < temp.length; i++) {
            tempCategory.push(temp[i].category);
        }
        let allUniqueCategory = [...new Set(tempCategory)]; // samo jedinstvene vrijednosti
        return allUniqueCategory;
    };
    const getPublisher = () => {
        let temp = allData;
        let tempPublisher = [];
        for (let i = 0; i < temp.length; i++) {
            tempPublisher.push(temp[i].publisher);
        }
        let allUniquePublisher = [...new Set(tempPublisher)]; // samo jedinstvene vrijednosti
        return allUniquePublisher;
    };

    const handleFilter = () => {
        let tempPublisher = [];
        let tempCategory = [];
        if (publisher.length != 0) {
            tempPublisher = allData.filter((x) =>
                publisher.includes(x.publisher)
            );
            if (category.length != 0) {
                tempCategory = tempPublisher.filter((x) =>
                    category.includes(x.category)
                );
                setFilteredCollections(tempCategory);
            } else {
                setFilteredCollections(tempPublisher);
            }
        } else {
            setFilteredCollections(allData);
        }
    };
    return (
        <>
            <Grid sx={styles(theme).titleGrid}>
                <Typography sx={styles(theme).title}>FILTER</Typography>
                <Grid container sx={styles(theme).halfCircle}>
                    <Image
                        src="/decoCircle.png"
                        width={90}
                        height={90}
                        alt="circle"
                    />
                </Grid>
                <Grid container sx={styles(theme).triangleTop}>
                    <Image
                        src="/decoTriangle.png"
                        width={120}
                        height={100}
                        alt="triangle"
                    />
                </Grid>
            </Grid>
            <Collapse in={expand} sx={{ width: "100%" }}>
                <Grid container sx={styles(theme).container}>
                    <Grid sx={styles(theme).searchGrid}>
                        <Search
                            itemsToFilter={allData}
                            setFilteredItems={setFilteredCollections}
                            propertiesToSearch={[
                                "title",
                                "publisher",
                                "category",
                            ]}
                        />
                    </Grid>
                    <Grid sx={styles(theme).formControlGrid}>
                        <FormControl sx={styles(theme).select}>
                            <InputLabel id="select-publisher-checkbox-label">
                                Publisher
                            </InputLabel>
                            <Select
                                labelId="select-publisher-checkbox-label"
                                id="publisher-checkbox"
                                multiple
                                multiline
                                value={publisher}
                                onChange={HandleChangePublisher}
                                input={<OutlinedInput label="Publisher" />}
                                renderValue={(selected) => selected.join(", ")}
                            >
                                {getPublisher().map((data) => (
                                    <MenuItem key={data} value={data}>
                                        <Checkbox
                                            checked={
                                                publisher.indexOf(data) > -1
                                            }
                                        />
                                        <ListItemText primary={data} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl sx={styles(theme).select}>
                            <InputLabel id="select-category-checkbox-label">
                                Category
                            </InputLabel>
                            <Select
                                labelId="select-category-checkbox-label"
                                id="category-checkbox"
                                multiple
                                multiline
                                value={category}
                                onChange={HandleChangeCategory}
                                input={<OutlinedInput label="Category" />}
                                renderValue={(selected) => selected.join(", ")}
                            >
                                {findCategory().map((data) => (
                                    <MenuItem key={data} value={data}>
                                        <Checkbox
                                            checked={
                                                category.indexOf(data) > -1
                                            }
                                        />
                                        <ListItemText primary={data} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid>
                        <Button
                            variant="contained"
                            type="button"
                            sx={styles(theme).filterButton}
                            onClick={handleFilter}
                        >
                            Filter
                        </Button>
                    </Grid>{" "}
                    <Grid container sx={styles(theme).fullCircle}>
                        <Image
                            src="/decoCircle.png"
                            width={70}
                            height={70}
                            alt="circle"
                        />
                    </Grid>
                </Grid>
            </Collapse>
            <Grid sx={styles(theme).expandGrid}>
                {expand ? (
                    <IconButton onClick={() => setExpand(false)}>
                        <ExpandCircleDown
                            sx={styles(theme).expandIcon}
                        ></ExpandCircleDown>
                    </IconButton>
                ) : (
                    <IconButton onClick={() => setExpand(true)}>
                        <FontAwesomeIcon
                            icon={faFilter}
                            color={theme.palette.primary.main}
                        ></FontAwesomeIcon>
                    </IconButton>
                )}
            </Grid>
        </>
    );
}
export default FilterCollections;
