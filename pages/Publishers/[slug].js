import { Grid, Typography, useTheme } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/Layout/footer";
import DataSourceAPI from "../../helpers/contentful";
import Categories from "../../components/Publishers/PublisherCategories";
import PublisherInfo from "../../components/Publishers/PublisherInfo";

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
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        [theme.breakpoints.between("xs", "lg")]: {
            marginTop: "3rem",
        },
    },
    descriptionSmall: {
        fontWeight: 400,
        fontSize: "15px",
        textAlign: "justify",
        marginBottom: "3rem",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
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
        padding: "3rem 0",
        [theme.breakpoints.down("sm")]: {
            padding: 0,
        },
        [theme.breakpoints.between("sm", "lg")]: {
            padding: "1.4rem 0",
        },
    },
});

function Publisher({ id, name, location, categories, description, founded, locationIconUri, logo, collections }) {
    const theme = useTheme();

    return (
        <>
            <Head>
                <title>Publishers | {name}</title>
            </Head>
            <Grid container sx={styles(theme).container}>
                <Grid container sx={styles(theme).infoGrid} item xl={7} md={9} xs={10}>
                    <Grid item xs={5} sm={4} sx={styles(theme).imageGrid}>
                        <Image src={logo} layout="fill" objectFit="contain" alt={name} />
                    </Grid>
                    <Grid item xs={6} sm={7}>
                        <PublisherInfo name={name} collections={collections} categories={categories} founded={founded} location={location} locationIconUri={locationIconUri} description={description} />
                    </Grid>
                </Grid>
                <Grid item xs={10} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <Typography variant="body1" sx={styles(theme).descriptionSmall}>
                        {description}
                    </Typography>
                </Grid>
                <Grid sx={styles(theme).categoriesGrid} item xl={7} md={9} xs={10}>
                    {categories.map((category) => (
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

export default Publisher;

export async function getStaticProps({ params }) {
    const publisher = await DataSourceAPI.getPublisher({ slug: params.slug });
    const collectionsUnformated = await DataSourceAPI.getCollections();

    const collections = collectionsUnformated.map((col) => ({ ...col, publisher: col.publisher.name, categories: col.categories.items.map((item) => item.name) }));
    const collectionsFiltered = collections.filter((x) => x.publisher === publisher.name);

    //izvlačimo jedinstvene vrijednosti kategorija pripadajućih kolekcija/albuma
    let categories = [];
    for (let i = 0; i < publisher.collections.items.length; i++) {
        for (let j = 0; j < publisher.collections.items[i].categories.items.length; j++) {
            categories.push(publisher.collections.items[i].categories.items[j].name);
        }
    }
    let allUniqueCategories = [...new Set(categories)]; // samo jedinstvene vrijednosti

    return {
        props: {
            id: publisher.id,
            name: publisher.name,
            location: publisher.location,
            categories: allUniqueCategories,
            description: publisher.description,
            founded: publisher.founded,
            locationIconUri: publisher.locationIconUri,
            logo: publisher.logo.url,
            collections: collectionsFiltered,
        },
    };
}

export async function getStaticPaths() {
    const slugs = await DataSourceAPI.getPublisherSlugs();

    const paths = slugs.map((slug) => ({
        params: {
            slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}
