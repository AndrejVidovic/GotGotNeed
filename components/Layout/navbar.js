import {
  AppBar,
  Box,
  Button,
  containerClasses,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
    backgroundColor: "rgba(255, 152, 0, 0.51)", //51% boje umjesto 100%
    color: "black",
    fontFamily: "'Epilogue', sans-serif",
    fontSize: "14px",
    fontWeight: 700,
    boxShadow:
      "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12)",
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
      <AppBar position="fixed" elevation={10}>
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
              <Link
                href={{ pathname: "/[page]" }}
                as={`/${page.replace(/\s+/g, "")}`}
                passHref
              >
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
