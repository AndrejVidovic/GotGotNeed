import React, { useState } from "react";
import { Grid, Card, CardHeader, Chip, useTheme, CardMedia, CardContent, IconButton, Avatar, Typography, MenuItem, Menu } from "@mui/material";
import { Share as ShareIcon } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const styles = (theme) => ({
    root: {
        textAlign: "left",
        minHeight: "10rem",
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem",
        minWidth: "100%",
        transition: "all 0.5s ease",
        [theme.breakpoints.between("sm", "md")]: {
            marginBottom: "2rem",
            flexDirection: "row",
        },
        [theme.breakpoints.between("md", "xl")]: {
            marginBottom: "2.5rem",
            flexDirection: "row",
        },
        [theme.breakpoints.up("xl")]: {
            flexDirection: "row",
            marginBottom: "3rem",
        },
        "&:hover": {
            cursor: "pointer",
            transform: "scale(1.02)",
        },
    },
    media: {
        width: "fill-available",
        maxWidth: "33%",
        minWidth: "33%",
        [theme.breakpoints.between("xs", "sm")]: {
            width: "100%",
            maxWidth: "none",
            minWidth: "none",
            height: "200px",
        },
    },
    avatar: {
        alignSelf: "center",
        marginRight: "12px",
        height: "50px",
        width: "50px",
        [theme.breakpoints.between("xs", "md")]: {
            marginRight: "0",
            height: "35px",
            width: "35px",
        },
        [theme.breakpoints.between("md", "xl")]: {
            marginRight: "6px",
            height: "40px",
            width: "40px",
        },
    },
    title: {
        fontSize: "18px",
        margin: 0,
        fontWeight: 600,
        [theme.breakpoints.between("xs", "md")]: {
            fontSize: "16px",
        },
        [theme.breakpoints.between("md", "xl")]: {
            fontSize: "16px",
        },
    },
    subtitle: {
        fontSize: "14px",
        margin: 0,
        [theme.breakpoints.between("xs", "md")]: {
            fontSize: "10px",
        },
        [theme.breakpoints.between("md", "xl")]: {
            fontSize: "12px",
        },
    },
    textPart: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
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
        [theme.breakpoints.between("xs", "xl")]: {
            fontSize: "1rem",
        },
        [theme.breakpoints.up("xl")]: {
            fontSize: "1.1rem",
        },
    },
    header: {
        padding: "0 !important",
        marginBottom: "2rem",
        alignItems: "flex-start",
        [theme.breakpoints.between("xs", "md")]: {
            marginBottom: "1.3rem",
        },
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
    imageContainer: {
        position: "relative",
        width: "100%",
        height: "100%",
    },
    content: {
        padding: "2.5rem 3rem",
        [theme.breakpoints.between("xs", "md")]: {
            padding: "2rem",
        },
    },
    chipsContainer: {
        marginTop: "1rem",
    },
    chip: {
        border: "1px solid " + theme.palette.grey[200],
        background: "rgba(219, 219, 219, 0.35)",
    },
});

const BlogCard = ({ id, title, types, description, date, author, image, slug }) => {
    const theme = useTheme();
    const [anchor, setAnchor] = useState(null);
    const open = Boolean(anchor);

    const shareMenuOpen = (event) => {
        event.preventDefault();
        setAnchor(event.currentTarget);
    };
    const shareMenuClose = () => {
        setAnchor(null);
    };

    return (
        <>
            <Link href={`/News/${slug}`} passHref>
                <Card sx={styles(theme).root}>
                    <CardMedia sx={styles(theme).media} title={title}>
                        <div style={styles(theme).imageContainer}>
                            <Image src={image} layout="fill" objectFit="cover" objectPosition="top" alt={title} quality={60} />
                        </div>
                    </CardMedia>
                    <div style={styles(theme).textPart}>
                        <CardContent sx={styles(theme).content}>
                            <CardHeader
                                sx={styles(theme).header}
                                title={<Typography sx={styles(theme).title}>{title}</Typography>}
                                subheader={<Typography sx={styles(theme).subtitle}>{date.slice(0, 10)}</Typography>}
                                avatar={
                                    <Avatar aria-label="Author" sx={styles(theme).avatar}>
                                        <Image src={author.authorPhoto.url} layout="fill" objectFit="cover" alt={author.name} />
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="share" style={styles(theme).shareButton}>
                                        <ShareIcon onClick={shareMenuOpen} sx={styles(theme).shareIcon} />
                                    </IconButton>
                                }
                            />
                            <Typography variant="body2" color="textSecondary" component="p" sx={styles(theme).article}>
                                {description}
                            </Typography>
                            <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1.3} sx={styles(theme).chipsContainer}>
                                {types.map((type) => (
                                    <Grid item key={type.name}>
                                        <Chip size="small" label={type.name} sx={styles(theme).chip} />
                                    </Grid>
                                ))}
                            </Grid>
                        </CardContent>
                    </div>
                </Card>
            </Link>
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
                    <div className="fb-share-button" data-href="https://gotgotneed-lpce94hu6-andrejvidovic.vercel.app/" data-layout="button" data-size="large">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgotgotneed-lpce94hu6-andrejvidovic.vercel.app%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">
                            Share on Facebook
                        </a>
                    </div>
                </MenuItem>
                <MenuItem onClick={shareMenuClose}>
                    <a
                        href="https://twitter.com/intent/tweet?text=Checkout%20this%20amazing%20blog%20piece%20on%20%23GotGotNeed%20"
                        className="twitter-hashtag-button"
                        data-size="large"
                        data-text="Check out GotGotNeed, its great!"
                        data-url="link"
                        data-related="avidovic,brunogrbavac,GotGotNeed"
                        data-lang="en"
                        data-show-count="false"
                    >
                        Tweet #GotGotNeed
                    </a>
                </MenuItem>
            </Menu>
        </>
    );
};

export default BlogCard;
