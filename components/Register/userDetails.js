import {
  Autocomplete,
  Button,
  Grid,
  TextField,
  Box,
  useTheme,
  Typography,
} from "@mui/material";
import countries from "./countries.json";
import { ValidationPage2 } from "./Validation";
import { useState } from "react";

const styles = (theme) => ({
  containerGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  textfield: {
    marginBottom: "3vh",
    width: "75%",
  },
  buttonSubmit: {
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
  buttonGrid: {
    marginBottom: "3vh",
    marginTop: "1vh",
    width: "75%",
    justifyContent: "space-evenly",
  },
  title: {
    fontWeight: 700,
    fontSize: "3.2vh",
    paddingTop: "5vh",
    paddingBottom: "4vh",
  },
});
function UserDetails(props) {
  const theme = useTheme();
  const user = props.user;
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    //getting flag for nation
    if (ValidationPage2(user, setErrors)) {
      const temp = countries.find((x) => x.label === user.country);
      user.flagPath = `https://flagcdn.com/w20/${temp.code.toLowerCase()}.png`;
      console.log(user);
    }
  };
  return (
    <>
      <Grid sx={styles(theme).containerGrid}>
        <Typography variant="body1" sx={styles(theme).title}>
          Few more steps!
        </Typography>
        <TextField
          variant="filled"
          type="text"
          label="Name"
          id="name"
          value={user.name}
          sx={styles(theme).textfield}
          onChange={props.handleChange("name")}
          error
          {...{ error: errors.nameError, helperText: errors.name }}
        />
        <TextField
          variant="filled"
          type="text"
          label="Surname"
          id="surname"
          value={user.surname}
          sx={styles(theme).textfield}
          onChange={props.handleChange("surname")}
          error
          {...{ error: errors.surnameError, helperText: errors.surname }}
        />
        <TextField
          variant="filled"
          type="text"
          label="City"
          id="city"
          value={user.city}
          sx={styles(theme).textfield}
          onChange={props.handleChange("city")}
          error
          {...{ error: errors.cityError, helperText: errors.city }}
        />
        <Autocomplete
          id="country-select-demo"
          sx={styles(theme).textfield}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          onChange={(event, newValue) => (user.country = newValue.label)}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {option.label} ({option.code})
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              error
              {...{ error: errors.countryError, helperText: errors.country }}
              variant="filled"
              {...params}
              label="Choose a country"
              inputProps={{
                ...params.inputProps,
                autoComplete: "country", // disable autocomplete and autofill
              }}
            />
          )}
        />
        <Grid container sx={styles(theme).buttonGrid}>
          <Button
            onClick={props.prevStep}
            variant="contained"
            sx={styles(theme).buttonBack}
          >
            Back
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={styles(theme).buttonSubmit}
            onClick={handleSubmit}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
export default UserDetails;
