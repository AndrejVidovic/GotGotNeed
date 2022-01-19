import { Grid, Typography, useTheme } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Layout/footer";
import DataSourceAPI from "../../helpers/contentful";
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
        height: "370px",
        marginRight: "4rem",
        [theme.breakpoints.down("lg")]: {
            marginRight: "1.3rem",
            height: "420px",
        },
        [theme.breakpoints.down("md")]: {
            marginRight: "1.3rem",
            height: "260px",
        },
        position: "relative",
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
    infoValues: {
        fontSize: "16px",
        color: "#616161",
        paddingLeft: "0.5rem",
    },
    infoGrid1: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
});

function Publisher({ id, name, location, categories, description, founded, locationIconUri, logo, collections }) {
    const theme = useTheme();

    const getTypes = () => {
        let temp = [];
        if (typeof categories === "string") {
            temp.push(categories);
        } else temp = categories;
        return temp;
    };
    return (
        <>
            <Head>
                <title>Publishers | {name}</title>
            </Head>
            <Grid container sx={styles(theme).container}>
                <Grid container sx={styles(theme).infoGrid}>
                    <Grid item lg={3} xl={2} md={3} sm={4} xs={4} sx={styles(theme).imageGrid}>
                        <Image src={logo} layout="fill" objectFit="contain" alt={name} />
                    </Grid>
                    <Grid item lg={4} xl={3} md={4} sm={4} xs={5}>
                        <Typography variant="h1" sx={styles(theme).title}>
                            {name}
                        </Typography>
                        <Grid item sx={styles(theme).infoGrid1}>
                            <Typography variant="body1" sx={styles(theme).info}>
                                Location: <Image src={`https://flagcdn.com/24x18/${locationIconUri}.png`} width="22" height="16" alt="CountryFlag" />
                            </Typography>
                            <Typography sx={styles(theme).infoValues}>{location}</Typography>
                        </Grid>
                        <Grid item sx={styles(theme).infoGrid1}>
                            <Typography variant="body1" sx={styles(theme).info}>
                                Categories:
                            </Typography>
                            <Typography sx={styles(theme).infoValues}>{categories.length}</Typography>
                        </Grid>
                        <Grid item sx={styles(theme).infoGrid1}>
                            <Typography variant="body1" sx={styles(theme).info}>
                                Collections:
                            </Typography>
                            <Typography sx={styles(theme).infoValues}>{collections.length}</Typography>
                        </Grid>
                        <Grid item sx={styles(theme).infoGrid1}>
                            <Typography variant="body1" sx={styles(theme).info}>
                                Founded:
                            </Typography>
                            <Typography sx={styles(theme).infoValues}>{founded}</Typography>
                        </Grid>
                        <Typography variant="body1" sx={styles(theme).description}>
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md={9} sm={9} xs={10} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <Typography variant="body1" sx={styles(theme).descriptionSmall}>
                        {description}
                    </Typography>
                </Grid>

                <Grid sx={styles(theme).categoriesGrid} item xl={7} lg={9} md={9} sm={10} xs={10}>
                    {getTypes().map((category) => (
                        <Grid key={category} sx={{ width: "100%" }}>
                            <Categories categories={category} collections={collections}></Categories>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Footer></Footer>
        </>
    );
}
export async function getServerSideProps(context) {
    const collectionsUnormated = await DataSourceAPI.getCollections();
    const collections = collectionsUnormated.map((col) => ({ ...col, publisher: col.publisher.name, categories: col.categories.items.map((item) => item.name) }));
    const collectionsFiltered = collections.filter((x) => x.publisher === context.query.name);
    return {
        props: {
            id: context.query.id,
            name: context.query.name,
            location: context.query.location,
            categories: context.query.collections,
            description: context.query.description,
            founded: context.query.founded,
            locationIconUri: context.query.locationIconUri,
            logo: context.query.logo,
            collections: collectionsFiltered,
        },
    };
}

export default Publisher;
