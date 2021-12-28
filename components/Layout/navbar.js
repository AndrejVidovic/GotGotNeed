import { AppBar, Box, Button, Toolbar, darken, useTheme } from "@mui/material";
import { style } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logoS.png";

const pages = [
  "About Us",
  "News",
  "Collections",
  "Collectors",
  "Publishers",
  "Chat",
  "Swap",
];

const styles = (theme) => ({
  loginButtonBox: {
    marginLeft: "auto",
    marginRight: "0",
  },
  loginButton: {
    backgroundColor: theme.palette.secondary.light,
    color: "black",
    fontWeight: 700,
    boxShadow: theme.shadows[2],
    width: "10vh",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  navbarButtons: {
    color: "white",
    backgroundColor: darken(theme.palette.primary.main, 0.1),
    width: "12vh",
    textAlign: "center",
    textTransform: "none",
    boxShadow: theme.shadows[1],
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  logoLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Navbar = () => {
  const theme = useTheme(); //dohvaćamo temu zadanu ThemeProviderom iz _app.js

  return (
    <>
      <AppBar position="fixed" elevation={10}>
        <Toolbar>
          <Box>
            <Link href="/" passHref>
              <a style={style(theme).logoLink}>
                <Image src={logo} layout="intrinsic" alt="GGN"></Image>
              </a>
            </Link>
          </Box>
          {pages.map((page) => (
            <Box ml={3} key={page} sx={styles(theme).navbarButtonBox}>
              <Link
                href={{ pathname: "/[page]" }}
                as={`/${page.replace(/\s+/g, "")}`}
                passHref
              >
                <Button sx={styles(theme).navbarButtons}>{page}</Button>
              </Link>
            </Box>
          ))}
          <Box sx={styles(theme).loginButtonBox}>
            <Button sx={styles(theme).loginButton}>Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
