import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Button,
    Divider,
    FilledInput,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    Paper,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";

const styles = (theme) => ({
    loginButton: {
        backgroundColor: theme.palette.secondary.light,
        color: "black",
        fontWeight: 700,
        boxShadow: theme.shadows[2],
        width: "13vh",
        height: "5vh",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
        },
        margin: "1vh",
        [theme.breakpoints.down("sm")]: {
            height: "7vh",
        },
    },
    signUpButton: {
        backgroundColor: theme.palette.main,
        color: "white",
        fontWeight: 700,
        boxShadow: theme.shadows[2],
        width: "13vh",
        height: "5vh",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
        marginTop: "1vh",
        marginBottom: "4vh",
        [theme.breakpoints.down("sm")]: {
            height: "7vh",
            padding: 0,
        },
    },
    gridBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        boxShadow: theme.shadows[2],
        width: "47vh",
        height: "100%",
        [theme.breakpoints.between("xs", "sm")]: {
            marginTop: "5rem",
        },
        [theme.breakpoints.between("sm", "md")]: {
            marginTop: "6rem",
        },
    },
    title: {
        fontWeight: 700,
        fontSize: "30px",
        paddingTop: "6vh",
        paddingBottom: "4vh",
    },
    divider: {
        borderWidth: "2px",
        width: "75%",
        margin: "2vh",
        alignText: "center",
        "::before": {
            top: 0,
        },
        "::after": {
            top: 0,
        },
        fontSize: "10px",
    },
    textfield: {
        marginTop: "1vh",
        marginBottom: "3vh",
        width: "75%",
    },
    caption: {
        fontSize: "10px",
        marginTop: "1.2vh",
        textDecoration: "underline",
    },
});

function Login() {
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
        <>
            <Head>
                <title>Login</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Grid container sx={styles(theme).gridBox}>
                <Paper sx={styles(theme).paper}>
                    <Typography variant="body1" sx={styles(theme).title}>
                        Welcome Back!
                    </Typography>
                    <TextField
                        type="text"
                        variant="filled"
                        label="Username"
                        onChange={handleChange("Username")}
                        sx={styles(theme).textfield}
                    />
                    <FormControl variant="filled" sx={styles(theme).textfield}>
                        <InputLabel htmlFor="filled-adornment-password">
                            Password
                        </InputLabel>
                        <FilledInput
                            id="filled-adornment-password"
                            type={user.ShowPassword ? "text" : "password"}
                            value={user.Password}
                            onChange={handleChange("Password")}
                            endAdornment={
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
                            }
                        ></FilledInput>
                    </FormControl>
                    <Button
                        variant="contained"
                        sx={styles(theme).loginButton}
                        type="submit"
                    >
                        LOGIN
                    </Button>
                    <Typography variant="caption" sx={styles(theme).caption}>
                        Forgot Your Password?
                    </Typography>
                    <Divider sx={styles(theme).divider}>OR</Divider>
                    <Link href="/Register" passHref>
                        <Button
                            variant="contained"
                            sx={styles(theme).signUpButton}
                        >
                            SIGN UP
                        </Button>
                    </Link>
                </Paper>
            </Grid>
        </>
    );
}
export default Login;
