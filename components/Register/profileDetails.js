import { Grid, TextField, Typography, useTheme, InputLabel, FilledInput, FormControl, InputAdornment, IconButton, FormHelperText } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const styles = (theme) => ({
    containerGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    textfield: {
        marginBottom: "3vh",
        width: "100%",
    },
    title: {
        fontWeight: 700,
        fontSize: "3rem",
        paddingTop: "2rem",
        paddingBottom: "4rem",
        [theme.breakpoints.down("sm")]: {
            paddingBottom: "3rem",
            fontSize: "2.5rem",
        },
    },
});

const ProfileDetails = ({ errors, setEmail, setPassword, setPasswordCheck }) => {
    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordCheck, setShowPasswordCheck] = useState(false);

    const HandleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const HandleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const HandleClickShowPasswordCheck = () => {
        setShowPasswordCheck(!showPasswordCheck);
    };
    const HandleMouseDownPasswordCheck = (event) => {
        event.preventDefault();
    };

    return (
        <Grid container sx={styles(theme).containerGrid}>
            <Typography sx={styles(theme).title} variant="body1">
                Sign Up
            </Typography>
            <TextField variant="filled" type="email" label="Email" onChange={(e) => setEmail(e.target.value)} sx={styles(theme).textfield} error {...{ error: errors.emailError, helperText: errors.email }} />
            <FormControl variant="filled" sx={styles(theme).textfield}>
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                <FilledInput
                    id="filled-adornment-password"
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="password visibility" onClick={HandleClickShowPassword} onMouseDown={HandleMouseDownPassword} edge="end">
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    error
                    {...{ error: errors.passwordError }}
                />
                <FormHelperText error>{errors.password}</FormHelperText>
            </FormControl>
            <FormControl variant="filled" sx={styles(theme).textfield}>
                <InputLabel htmlFor="filled-adornment-password-check">Password</InputLabel>
                <FilledInput
                    id="filled-adornment-password-check"
                    type={showPasswordCheck ? "text" : "password"}
                    onChange={(e) => setPasswordCheck(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="password visibility" onClick={HandleClickShowPasswordCheck} onMouseDown={HandleMouseDownPasswordCheck} edge="end">
                                {showPasswordCheck ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                    error
                    {...{ error: errors.passwordCheckError }}
                />
                <FormHelperText error>{errors.passwordCheck}</FormHelperText>
            </FormControl>
        </Grid>
    );
};
export default ProfileDetails;
