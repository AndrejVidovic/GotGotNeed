import { Grid, Typography, useTheme } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import publi2 from "../../public/PaniniPublisher.png";
import publi1 from "../../public/KrašPublisher.png";
import publi3 from "../../public/ToppsPublisher.png";
import Footer from "../../components/Layout/footer";
import Categories from "../../components/Publishers/PublisherCategories";
import { useState } from "react";

const styles = (theme) => ({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "7rem",
        flexDirection: "column",
    },
    infoGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
        [theme.breakpoints.between("xs", "sm")]: {
            marginTop: "4rem",
        },
        [theme.breakpoints.between("sm", "lg")]: {
            marginTop: "4rem",
        },
    },
    info: {
        fontWeight: 700,
        fontSize: "16px",
        marginBottom: "0.1rem",
    },
    description: {
        fontWeight: 400,
        fontSize: "16px",
        textAlign: "justify",
        marginTop: "1rem",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    descriptionSmall: {
        fontWeight: 400,
        fontSize: "15px",
        textAlign: "justify",
        marginTop: "1rem",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    title: {
        fontWeight: 700,
        fontSize: "80px",
        [theme.breakpoints.between("sm", "lg")]: {
            fontSize: "60px",
        },
        [theme.breakpoints.between("xs", "sm")]: {
            fontSize: "50px",
        },
        marginBottom: "1.5rem",
    },
    imageGrid: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        marginRight: "4rem",
        [theme.breakpoints.down("md")]: {
            marginRight: "1.3rem",
        },
    },
    categoriesGrid: {
        width: "100%",
        padding: "3rem",
        [theme.breakpoints.down("sm")]: {
            padding: 0,
        },
        [theme.breakpoints.between("sm", "lg")]: {
            padding: "1.4rem",
        },
    },
});

function Publisher({ id, title, types, collections, description, founded }) {
    const theme = useTheme();
    const images = [publi1, publi2, publi3];

    const getTypes = () => {
        let temp = [];
        if (typeof types === "string") {
            temp.push(types);
        } else temp = types;
        return temp;
    };

    return (
        <>
            <Head>
                <title>Publishers | {title}</title>
            </Head>
            <Grid container sx={styles(theme).container}>
                <Grid container sx={styles(theme).infoGrid}>
                    <Grid item lg={3} xl={2} md={3} sm={4} xs={4} sx={styles(theme).imageGrid}>
                        <Image src={images[id % 3]} layout="intrinsic" alt={title} />
                    </Grid>
                    <Grid item lg={3} xl={2} md={4} sm={4} xs={5}>
                        <Typography variant="h1" sx={styles(theme).title}>
                            {title}
                        </Typography>
                        <Typography variant="body1" sx={styles(theme).info}>
                            Collections: {collections}
                        </Typography>
                        <Typography variant="body1" sx={styles(theme).info}>
                            Categories: {types.length}
                        </Typography>
                        <Typography variant="body1" sx={styles(theme).info}>
                            Founded: {founded}.
                        </Typography>
                        <Typography variant="body1" sx={styles(theme).description}>
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    md={9}
                    sm={9}
                    xs={10}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                    }}
                >
                    <Typography variant="body1" sx={styles(theme).descriptionSmall}>
                        {description}
                    </Typography>
                </Grid>

                <Grid sx={styles(theme).categoriesGrid} item xl={7} lg={9} md={9} sm={10} xs={10}>
                    {getTypes().map((categories) => (
                        <Grid key={categories.id} sx={{ width: "100%" }}>
                            <Categories categories={categories}></Categories>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Footer></Footer>
        </>
    );
}
export async function getServerSideProps(context) {
    return {
        props: {
            id: context.query.id,
            title: context.query.title,
            types: context.query.types, //odavde izlacimo broj kategorija
            collections: context.query.collections,
            description: context.query.description,
            founded: context.query.founded,
        },
    };
}

export default Publisher;
