import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
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
import { style } from "@mui/system";
import { useState } from "react";
import theme from "../src/theme";

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
    <Grid container>
      <Paper>
        <Typography variant="body1">Welcome Back!</Typography>
        <TextField
          variant="filled"
          label="Username"
          onChange={handleChange("Username")}
        ></TextField>
        <FormControl variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
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
                  {user.ShowPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          ></FilledInput>
        </FormControl>
        <Button variant="contained">LOGIN</Button>
        <Button varaint="contained">SIGN UP</Button>
      </Paper>
    </Grid>
  );
}
export default Login;
