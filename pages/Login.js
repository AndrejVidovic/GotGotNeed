import { useRef, useEffect } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Divider, FilledInput, FormControl, Grid, IconButton, InputAdornment, InputLabel, Paper, TextField, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import { useAuth } from "../context/AuthContext";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth } from "../helpers/firebase";
import firebase from "firebase/compat/app";
import Router from "next/router";

const styles = (theme) => ({
    loginButton: {
        backgroundColor: theme.palette.secondary.light,
        color: "black",
        fontWeight: 700,
        boxShadow: theme.shadows[2],
        width: "100%",
        height: "4rem",
        fontSize: "1.3rem",
        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
        },
        marginTop: "2rem",
        marginBottom: "1.5rem",
    },
    signUpButton: {
        backgroundColor: theme.palette.main,
        color: "white",
        fontWeight: 700,
        boxShadow: theme.shadows[2],
        width: "100%",
        height: "4rem",
        fontSize: "1.3rem",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
    },
    gridBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        display: "flex",
        padding: "3rem 6rem",
        alignItems: "center",
        flexDirection: "column",
        boxShadow: theme.shadows[2],
        width: "500px",
        height: "100%",
        marginBottom: "4rem",
        [theme.breakpoints.down("lg")]: {
            marginTop: "6rem",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            padding: "2rem 4rem",
        },
    },
    title: {
        fontWeight: 700,
        fontSize: "3rem",
        paddingTop: "2rem",
        paddingBottom: "5rem",
        [theme.breakpoints.down("sm")]: {
            paddingBottom: "3rem",
            fontSize: "2.5rem",
        },
    },
    divider: {
        borderWidth: "2px",
        width: "100%",
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
        marginBottom: "3vh",
        width: "100%",
    },
    caption: {
        fontSize: "10px",
        marginTop: "1.2vh",
        textDecoration: "underline",
    },
});

const uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
        signInSuccessWithAuthResult: () => false,
    },
};

function Login() {
    const theme = useTheme();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setLoading(true);
            await login(email, password);
            Router.push("/");
        } catch (error) {
            console.error(error.message);
        }
        setLoading(false);
    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Grid container sx={styles(theme).gridBox}>
                <Paper sx={styles(theme).paper}>
                    <Typography variant="body1" sx={styles(theme).title}>
                        Welcome back!
                    </Typography>
                    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
                        <TextField variant="filled" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} sx={styles(theme).textfield} />
                        <FormControl variant="filled" sx={styles(theme).textfield}>
                            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                            <FilledInput
                                id="filled-adornment-password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton aria-label="password visibility" onClick={() => setShowPassword(!showPassword)} onMouseDown={(e) => e.preventDefault()} edge="end">
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            ></FilledInput>
                        </FormControl>
                        <Button variant="contained" sx={styles(theme).loginButton} type="submit" disabled={loading}>
                            LOG IN
                        </Button>
                    </form>

                    <Typography variant="caption" sx={styles(theme).caption}>
                        Forgot Your Password?
                    </Typography>
                    <Divider sx={styles(theme).divider}>OR</Divider>
                    <Link href="/Register" passHref>
                        <Button variant="contained" sx={styles(theme).signUpButton}>
                            SIGN UP
                        </Button>
                    </Link>
                    <Divider sx={styles(theme).divider}>OR</Divider>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
                </Paper>
            </Grid>
        </>
    );
}
export default Login;
