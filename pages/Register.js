import { Paper, useTheme } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import ProfileDetails from "../components/Register/profileDetails";
import UserDetails from "../components/Register/userDetails";

const styles = (theme) => ({
    containerGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: theme.shadows[2],
        width: "47vh",
        height: "auto",
        flexDirection: "column",
        [theme.breakpoints.between("xs", "sm")]: {
            marginTop: "5rem",
        },
        [theme.breakpoints.between("sm", "md")]: {
            marginTop: "6rem",
        },
    },
});
function Register() {
    const theme = useTheme();
    const [user, setUser] = useState({
        name: "",
        surname: "",
        username: "",
        email: "",
        password: "",
        passwordCheck: "",
        city: "",
        country: "",
        flagPath: "",
    });
    const [step, setStep] = useState(1);
    const handleChange = (props) => (event) => {
        setUser({ ...user, [props]: event.target.value });
    };
    const nextStep = () => {
        setStep(step + 1);
    };
    const prevStep = () => {
        setStep(step - 1);
    };
    return (
        <>
            <Head>
                <title>Register</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <form
                autoComplete="off"
                noValidate
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Paper sx={styles(theme).paper}>
                    {step === 1 ? (
                        <ProfileDetails
                            nextStep={nextStep}
                            handleChange={handleChange}
                            user={user}
                        />
                    ) : null}
                    {step === 2 ? (
                        <UserDetails
                            prevStep={prevStep}
                            handleChange={handleChange}
                            user={user}
                        />
                    ) : null}
                </Paper>
            </form>
        </>
    );
}
export default Register;
