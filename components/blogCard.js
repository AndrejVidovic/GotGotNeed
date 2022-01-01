import React, { useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  Chip,
  useTheme,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Avatar,
  Typography,
  MenuItem,
  Menu,
  CardActionArea,
} from "@mui/material";
import { Share as ShareIcon } from "@mui/icons-material";
import Image from "next/image";
import image from "../public/article3.png";

const styles = (theme) => ({
  root: {
    textAlign: "left",
    minHeight: "15rem",
    display: "flex",
    flexDirection: "row",
    margin: "1rem",
    [theme.breakpoints.between("sm", "md")]: {
      margin: "1.5rem",
      width: "85%",
    },
    [theme.breakpoints.between("md", "xl")]: {
      margin: "2rem",
      width: "60%",
    },
    [theme.breakpoints.up("xl")]: {
      margin: "2.5rem",
      width: "50%",
    },
  },
  media: {
    width: "fill-available",
    maxWidth: "50%",
    minWidth: "33%",
    backgroundPositionY: "top",
  },
  avatar: {
    alignSelf: "center",
    marginRight: "12px",
    height: "50px",
    width: "50px",
    [theme.breakpoints.between("xs", "md")]: {
      marginRight: "0",
      height: "30px",
      width: "30px",
    },
  },
  title: {
    fontSize: "20px",
    margin: 0,
    fontWeight: 600,
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "14px",
    },
  },
  subtitle: {
    fontSize: "16px",
    margin: 0,
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "10px",
    },
  },
  textPart: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.between("sm", "md")]: {
      padding: "0.5rem",
      fontSize: "1rem",
    },
    [theme.breakpoints.between("md", "xl")]: {
      padding: "1rem",
      fontSize: "1.1rem",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "1.5rem",
      fontSize: "1.25rem",
    },
  },
  article: {
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "0.75rem",
    },
    [theme.breakpoints.between("md", "xl")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.1rem",
    },
  },
  actions: {
    padding: "0 !important",
    marginBottom: "2rem",
    alignItems: "flex-start",
    [theme.breakpoints.between("xs", "md")]: {
      marginBottom: "1rem",
    },
  },
  header: {
    padding: "0 !important",
  },
  shareButton: {
    marginRight: 0,
    marginLeft: "auto",
  },
  shareIcon: {
    fontSize: "2.25rem",
    [theme.breakpoints.between("xs", "md")]: {
      fontSize: "14px",
    },
  },
  image: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  content: {
    padding: "2rem 3rem",
    [theme.breakpoints.between("xs", "md")]: {
      padding: "1.5'rem 2rem",
    },
  },
  chipsContainer: {
    marginTop: "1rem",
  },
});

//----------------------------------------------------------------------------------- Kartica koja predstavlja članak na home pageu

const BlogCard = (props) => {
  const theme = useTheme();
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);

  const shareMenuOpen = (event) => {
    setAnchor(event.currentTarget);
  };
  const shareMenuClose = () => {
    setAnchor(null);
  };

  let articleDescription =
    "Lorem ipsumsit dolo sitr sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur eiusmod . Lorem ipsumsit dolo sitr sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur eiusmod .";
  if (typeof window !== "undefined" && window.innerWidth < 1200) {
    if (articleDescription.length > 120) {
      articleDescription = articleDescription.slice(0, 120) + "...";
    }
  }

  return (
    <>
      <Card sx={styles(theme).root}>
        {/* Link */}
        <CardMedia sx={styles(theme).media} title="Opis slike">
          <div style={styles(theme).image}>
            <Image src={image} layout="fill" objectFit="cover" />
          </div>
        </CardMedia>
        <div style={styles(theme).textPart}>
          <CardActionArea>
            <CardContent sx={styles(theme).content}>
              <CardActions sx={styles(theme).actions} disableSpacing>
                <CardHeader
                  sx={styles(theme).header}
                  title={
                    <Typography sx={styles(theme).title}>Headline</Typography>
                  }
                  subheader={
                    <Typography sx={styles(theme).subtitle}>Body 2</Typography>
                  }
                  avatar={
                    <Avatar aria-label="Author" sx={styles(theme).avatar}>
                      <Image src={image} layout="fill" objectFit="cover" />
                    </Avatar>
                  }
                />
                <IconButton
                  aria-label="share"
                  style={styles(theme).shareButton}
                >
                  <ShareIcon
                    onClick={shareMenuOpen}
                    sx={styles(theme).shareIcon}
                  />
                </IconButton>
              </CardActions>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={styles(theme).article}
              >
                {articleDescription}
              </Typography>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={0.5}
                sx={styles(theme).chipsContainer}
              >
                <Grid item>
                  <Chip
                    sx={styles(theme).article}
                    size="small"
                    label="Clickable"
                    onClick={() => console.log("hehe")}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </div>
      </Card>
      <Menu
        anchorEl={anchor} // html element koji je lokacija -> klikon na taj element se i otvara
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }} // u odnosu na ANchorEl di ga displaya
        // id={menuId}
        keepMounted // uvik drži u DOM stablu ( i kad nije displayan) radi search engine optiizacije
        transformOrigin={{ vertical: "bottom", horizontal: "left" }} // u odnosu na ANchorEl di ga displaya
        open={open}
        onClose={shareMenuClose}
      >
        <MenuItem onClick={shareMenuClose}>
          <div
            class="fb-share-button"
            data-href="link"
            data-layout="button"
            data-size="large"
          >
            <a
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
              class="fb-xfbml-parse-ignore"
            >
              Share
            </a>
          </div>
        </MenuItem>
        <MenuItem onClick={shareMenuClose}>
          <a
            href="https://twitter.com/intent/tweet?button_hashtag=tweet&ref_src=twsrc%5Etfw"
            class="twitter-hashtag-button"
            data-size="large"
            data-text="Check out FootFeed, its great!"
            data-url="link"
            data-related="brunogrbavac,FootFeed"
            data-lang="en"
            data-show-count="false"
          >
            Tweet{" "}
          </a>
        </MenuItem>
      </Menu>
    </>
  );
};

export default BlogCard;
