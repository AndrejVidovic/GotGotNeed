import Head from "next/head";
import DataSourceAPI from "../../helpers/contentful";
import { Grid, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Image from "next/image";
import Footer from "../../components/Layout/footer";
import CollectionInfo from "../../components/Collections/CollectionInfo";
import UserCollectionList from "../../components/Collections/UserCollectionList";

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
            marginBottom: "1.5rem",
        },
        marginBottom: "6rem",
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
            height: "350px",
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
    glass: {
        borderRadius: theme.shape.borderRadius + "px",
        boxShadow: theme.shadows[2],
        padding: "1rem",
        marginTop: "2rem",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    },
    info: {
        fontWeight: 700,
        fontSize: "16px",
        marginBottom: "0.1rem",
    },
    infoValues: {
        fontSize: "16px",
        color: "#616161",
        paddingLeft: "0.5rem",
    },
    UserCollectionListSmall: {
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
        marginBottom: "3rem",
    },
    dataGrid: {
        width: "100%",
        fontSize: "15px",
        borderRadius: theme.shape.borderRadius,
        "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.primary.main,
            color: "white",
            borderRadius: "10px 10px 0 0",
        },
    },
});
const columns = [
    { field: "number", headerName: "Number", width: 105 },
    { field: "title", headerName: "Title", width: 350 },
    { field: "section", headerName: "Section", width: 220 },
    { field: "type", headerName: "Type", width: 160 },
    { field: "have", headerName: "Have", width: 105 },
    { field: "need", headerName: "Need", width: 105 },
    { field: "coefficient", headerName: "Coefficient", width: 130 },
];
function Collection({ collectionFiltered }) {
    const collection = collectionFiltered[0];
    const theme = useTheme();
    const rows = collection.stickers;

    return (
        <>
            <Head>Collections | {collection.name}</Head>
            <Grid container sx={styles(theme).container}>
                <Grid container sx={styles(theme).infoGrid} item xl={7} md={9} xs={10}>
                    <Grid item xs={5} sm={4} sx={styles(theme).imageGrid}>
                        <Image src={collection.coverPhoto.url} layout="fill" objectFit="contain" alt="collection picture" />
                    </Grid>
                    <Grid item xs={6} sm={7}>
                        <CollectionInfo collection={collection}></CollectionInfo>
                    </Grid>
                </Grid>
                <Grid item xl={7} md={9} xs={10} sx={styles(theme).UserCollectionListSmall}>
                    <UserCollectionList></UserCollectionList>
                </Grid>
                <Grid container item xl={7} md={9} xs={10}>
                    <DataGrid rows={rows} columns={columns} sx={styles(theme).dataGrid} autoHeight hideFooter />
                </Grid>
            </Grid>
            <Footer></Footer>
        </>
    );
}
export default Collection;

export async function getServerSideProps({ params }) {
    const collectionsUnormated = await DataSourceAPI.getCollections();
    const collections = collectionsUnormated.map((col) => ({ ...col, publisher: col.publisher.name, categories: col.categories.items.map((item) => item.name) }));
    const collectionFiltered = collections.filter((x) => x.slug === params.collection);

    return {
        props: {
            collectionFiltered,
        },
    };
}
