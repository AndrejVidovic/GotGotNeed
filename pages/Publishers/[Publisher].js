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
        [theme.breakpoints.down("sm")]: {
            marginRight: 0,
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
function Publisher(props) {
    const { id, title, types, collections, description, founded } = props;
    const theme = useTheme();
    const images = [publi1, publi2, publi3];

    return (
        <>
            <Head>
                <title>Publishers/{title}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Grid container sx={styles(theme).container}>
                <Grid item sx={styles(theme).infoGrid}>
                    <Grid
                        item
                        lg={3}
                        xl={2}
                        md={3}
                        sm={4}
                        xs={10}
                        sx={styles(theme).imageGrid}
                    >
                        <Image
                            src={images[id % 3]}
                            layout="responsive"
                            width={100}
                            height={60}
                        />
                    </Grid>
                    <Grid item lg={4} xl={3} md={5} sm={4} xs={10}>
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
                        <Typography
                            variant="body1"
                            sx={styles(theme).description}
                        >
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    sx={styles(theme).categoriesGrid}
                    item
                    xl={6}
                    lg={9}
                    md={9}
                    sm={10}
                    xs={10}
                >
                    {types.map((categories) => (
                        <Grid key={categories.id}>
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
