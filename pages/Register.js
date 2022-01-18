import { Paper, useTheme, Divider, Button } from "@mui/material";
import Head from "next/head";
import { useState, useRef } from "react";
import ProfileDetails from "../components/Register/profileDetails";
import { useAuth } from "../context/AuthContext";
import SignInWithGoogle from "../components/SignInWithGoogle";
import Validation from "../components/Register/Validation";

const styles = (theme) => ({
    containerGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        padding: "3rem 6rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: theme.shadows[2],
        width: "500px",
        height: "auto",
        flexDirection: "column",
        marginBottom: "4rem",
        [theme.breakpoints.down("lg")]: {
            marginTop: "6rem",
        },
        [theme.breakpoints.down("sm")]: {
            width: "90%",
            padding: "2rem 3.5rem",
        },
    },
    buttonSignup: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        fontWeight: 700,
        boxShadow: theme.shadows[2],
        width: "100%",
        height: "4rem",
        fontSize: "1.3rem",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
    },
    divider: {
        borderWidth: "2px",
        width: "100%",
        margin: "1rem",
        alignText: "center",
        "::before": {
            top: 0,
        },
        "::after": {
            top: 0,
        },
        fontSize: "10px",
    },
});

function Register() {
    const theme = useTheme();
    const { signup } = useAuth();
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        if (Validation({ email: email, password: password, passwordCheck: passwordCheck }, setErrors)) {
            try {
                setError("");
                setLoading(true);
                await signup(email, password);
            } catch (error) {
                console.error(error.message);
                setError("Failed to log in.");
            }
            setLoading(false);
        }
    }

    return (
        <>
            <Head>
                <title>Register</title>
            </Head>
            <form autoComplete="off" noValidate onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Paper sx={styles(theme).paper}>
                    <ProfileDetails errors={errors} setEmail={setEmail} setPassword={setPassword} setPasswordCheck={setPasswordCheck} />

                    <Button variant="contained" sx={styles(theme).buttonSignup} type="submit" disabled={loading}>
                        {/* Next */}
                        Register
                    </Button>
                    <Divider sx={styles(theme).divider}>OR</Divider>
                    <SignInWithGoogle />
                </Paper>
            </form>
        </>
    );
}
export default Register;
