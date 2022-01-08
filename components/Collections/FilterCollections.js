import {
    Button,
    Checkbox,
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
    },
    filterButton: {
        padding: "0.5rem 4rem",
        fontWeight: 700,
        [theme.breakpoints.down("md")]: {
            margin: "1rem 1rem 0rem 1rem",
        },
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
        top: 0,
        right: 0,
        left: "auto",
        display: "flex",
        justifyContent: "flex-end",
    },
    triangle2: {
        position: "absolute",
        top: 0,
        left: 90,
        display: "flex",
        justifyContent: "flex-start",
        [theme.breakpoints.down("md")]: {
            left: 40,
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
            left: 40,
            bottom: -60,
        },
    },
});
function FilterCollections({
    setCategory,
    setPublisher,
    publisher,
    category,
    collections,
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
            tempCategory = [...tempCategory, ...temp[i].category];
        }
        let allUniqueCategory = [...new Set(tempCategory)]; // samo jedinstvene vrijednosti
        return allUniqueCategory;
    };
    return (
        <>
            <Grid
                sx={{
                    position: "relative",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                }}
            >
                <Typography sx={styles(theme).title}>FILTER</Typography>
                <Grid container sx={styles(theme).halfCircle}>
                    <Image
                        src="/Circle.png"
                        width={50}
                        height={100}
                        alt="circle"
                    />
                </Grid>
                <Grid container sx={styles(theme).triangle2}>
                    <Image
                        src="/Triangle2.png"
                        width={70}
                        height={70}
                        alt="triangle"
                    />
                </Grid>
            </Grid>
            {expand ? (
                <Grid container sx={styles(theme).container}>
                    <Grid sx={styles(theme).searchGrid}>
                        <Search />
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
                                {allData.map((data) => (
                                    <MenuItem
                                        key={data.id}
                                        value={data.publisher}
                                    >
                                        <Checkbox
                                            checked={
                                                publisher.indexOf(
                                                    data.publisher
                                                ) > -1
                                            }
                                        />
                                        <ListItemText
                                            primary={data.publisher}
                                        />
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
                        >
                            Filter
                        </Button>
                    </Grid>{" "}
                    <Grid container sx={styles(theme).fullCircle}>
                        <Image
                            src="/FullCircle.png"
                            width={70}
                            height={70}
                            alt="triangle"
                        />
                    </Grid>
                </Grid>
            ) : null}
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
