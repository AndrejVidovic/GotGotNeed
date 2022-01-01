import { Box, Button, Grid, useTheme } from "@mui/material";
import Glass from "../components/glass.js";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    FormControl,
    IconButton,
    InputAdornment,
    TextField,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import ggnImage from "../public/GGNImage.png";
import Link from "next/link";

const styles = (theme) => ({
    root: {
        maxWidth: "450px",
        borderRadius: theme.shape.borderRadius + "px",
        [theme.breakpoints.between("xs", "sm")]: {
            width: "95%",
            padding: "3rem 3rem 5rem 3rem",
        },
        [theme.breakpoints.between("sm", "xl")]: {
            width: "80%",
            padding: "4.5rem",
        },
        [theme.breakpoints.up("xl")]: {
            width: "70%",
            padding: "6rem",
        },
    },
    buttons: {
        marginTop: "3rem",
        [theme.breakpoints.between("xs", "md")]: {
            marginTop: "1.5rem",
        },
    },
    button: {
        fontWeight: 700,
        boxShadow: theme.shadows[2],
        height: "55px",
        width: "90%",
        [theme.breakpoints.between("xs", "md")]: {
            height: "40px",
            fontSize: "0.8rem",
            paddingRight: 0,
            paddingLeft: 0,
        },
        [theme.breakpoints.between("md", "xl")]: {
            height: "50px",
        },
    },
    loginButton: {
        backgroundColor: theme.palette.secondary.light,
        color: "black",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
        },
    },
    signupButton: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    textfield: {
        marginBottom: "2.5rem",
        width: "100%",
        [theme.breakpoints.between("xs", "md")]: {
            marginBottom: "1.5rem",
        },
    },
    logo: {
        display: "none",
        [theme.breakpoints.down("lg")]: {
            display: "block",
            height: "75px",
            width: "150px",
            position: "relative",
            marginBottom: "1.5rem",
        },
    },
});

const SmallLogin = () => {
    const theme = useTheme();
    const [user, setUser] = useState({
        Username: "",
        Password: "",
        ShowPassword: false,
    });

    const handleChange = (props) => (event) => {
        setUser({ ...user, [props]: event.target.value });
    };
    const HandleClickShowPassword = () => {
        setUser({ ...user, ShowPassword: !user.ShowPassword });
    };
    const HandleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Glass color={2} styling={styles(theme).root}>
            <Box sx={styles(theme).logo}>
                <Image
                    alt="logo"
                    src={ggnImage}
                    layout="fill"
                    objectFit="contain"
                />
            </Box>
            <FormControl sx={styles(theme).textfield}>
                <TextField
                    variant="filled"
                    label="Username"
                    onChange={handleChange("Username")}
                    sx={styles(theme).textfield}
                    size="normal"
                />
                <TextField
                    variant="filled"
                    label="Password"
                    id="filled-adornment-password"
                    type={user.ShowPassword ? "text" : "password"}
                    value={user.Password}
                    onChange={handleChange("Password")}
                    size="normal"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="password visibility"
                                    onClick={HandleClickShowPassword}
                                    onMouseDown={HandleMouseDownPassword}
                                    edge="end"
                                >
                                    {user.ShowPassword ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </FormControl>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={styles(theme).buttons}
            >
                <Grid item xs={5.5}>
                    <Button
                        variant="contained"
                        sx={{
                            ...styles(theme).button,
                            ...styles(theme).loginButton,
                        }}
                    >
                        LOGIN
                    </Button>
                </Grid>
                <Grid item xs={5.5}>
                    <Link href="/Register" passHref passHref>
                        <Button
                            variant="contained"
                            sx={{
                                ...styles(theme).button,
                                ...styles(theme).signupButton,
                            }}
                        >
                            SIGN UP
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Glass>
    );
};

export default SmallLogin;
