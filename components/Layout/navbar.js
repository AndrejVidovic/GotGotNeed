import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
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

const styles = {
  loginButtonBox: {
    marginLeft: "auto",
    marginRight: "0",
    backgroundColor: "white", //stavljena bijela pozadina izad login button da dobijemo tocno željenu boju butuna
    borderRadius: "4px",
  },
  loginButton: {
    backgroundColor: "rgba(255, 152, 0, 0.51)",
    color: "black",
  },
  navbarButtons: {
    color: "white",
    backgroundColor: "#0F6DCA",
    width: "12vh",
    fontSize: "14px",
    fontFamily: "'Epilogue', sans-serif",
    textAlign: "center",
    textTransform: "none",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  },
};
function Navbar() {
  return (
    <>
      <AppBar position="fixed" elevation={6}>
        <Toolbar>
          <Box>
            <Link href="/" passHref>
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={logo} layout="intrinsic" alt="GGN"></Image>
              </a>
            </Link>
          </Box>
          {pages.map((page) => (
            <Box ml={3} key={page}>
              <Link href={{ pathname: "/[page]" }} as={`/${page}`} passHref>
                <Button sx={styles.navbarButtons}>{page}</Button>
              </Link>
            </Box>
          ))}
          <Box sx={styles.loginButtonBox}>
            <Button sx={styles.loginButton}>Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
