import {
  Grid,
  TextField,
  Typography,
  useTheme,
  InputLabel,
  FilledInput,
  FormControl,
  InputAdornment,
  IconButton,
  Button,
  FormHelperText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";
import { ValidationPage1 } from "./Validation";

const styles = (theme) => ({
  containerGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  textfield: {
    marginBottom: "3vh",
    width: "75%",
  },
  title: {
    fontWeight: 700,
    fontSize: "3.2vh",
    paddingTop: "5vh",
    paddingBottom: "4vh",
  },
  buttonGrid: {
    marginBottom: "3vh",
    marginTop: "1vh",
    width: "75%",
    justifyContent: "space-evenly",
  },
  buttonNext: {
    backgroundColor: theme.palette.main,
    color: "white",
    fontWeight: 700,
    boxShadow: theme.shadows[2],
    width: "8vh",
    height: "4vh",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    marginTop: "1vh",
    [theme.breakpoints.down("sm")]: {
      height: "7vh",
      padding: 0,
    },
  },
  buttonBack: {
    backgroundColor: theme.palette.secondary.light,
    color: "black",
    fontWeight: 700,
    boxShadow: theme.shadows[2],
    width: "8vh",
    height: "4vh",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    marginTop: "1vh",
    [theme.breakpoints.down("sm")]: {
      height: "7vh",
      padding: 0,
    },
  },
});
function ProfileDetails(props) {
  const theme = useTheme();
  const user = props.user;
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [errors, setErrors] = useState({});
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
  const next = (event) => {
    event.preventDefault();
    if (ValidationPage1(user, setErrors)) {
      props.nextStep();
    }
  };
  return (
    <Grid container sx={styles(theme).containerGrid}>
      <Typography sx={styles(theme).title} variant="body1">
        Register for free!
      </Typography>
      <TextField
        variant="filled"
        type="text"
        label="Username"
        id="username"
        sx={styles(theme).textfield}
        onChange={props.handleChange("username")}
        value={user.username}
        error
        {...{ error: errors.usernameError, helperText: errors.username }}
      />
      <TextField
        variant="filled"
        type="email"
        label="Email"
        sx={styles(theme).textfield}
        id="email"
        onChange={props.handleChange("email")}
        value={user.email}
        error
        {...{ error: errors.emailError, helperText: errors.email }}
      />
      <FormControl variant="filled" sx={styles(theme).textfield}>
        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showPassword ? "text" : "password"}
          value={user.password}
          onChange={props.handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="password visibility"
                onClick={HandleClickShowPassword}
                onMouseDown={HandleMouseDownPassword}
                edge="end"
              >
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
        <InputLabel htmlFor="filled-adornment-password-check">
          Password
        </InputLabel>
        <FilledInput
          id="filled-adornment-password-check"
          type={showPasswordCheck ? "text" : "password"}
          value={user.passwordCheck}
          onChange={props.handleChange("passwordCheck")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="password visibility"
                onClick={HandleClickShowPasswordCheck}
                onMouseDown={HandleMouseDownPasswordCheck}
                edge="end"
              >
                {showPasswordCheck ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          error
          {...{ error: errors.passwordCheckError }}
        />
        <FormHelperText error>{errors.passwordCheck}</FormHelperText>
      </FormControl>
      <Grid container sx={styles(theme).buttonGrid}>
        <Link href="/Login" passHref>
          <Button variant="contained" sx={styles(theme).buttonBack}>
            Back
          </Button>
        </Link>
        <Button
          variant="contained"
          onClick={next}
          sx={styles(theme).buttonNext}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}
export default ProfileDetails;
