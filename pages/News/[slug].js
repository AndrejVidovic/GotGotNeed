//Shema preuzeta s: https://github.dev/mcagalj/next-app-prototype .

import { serialize } from "next-mdx-remote/serialize";
import remarkUnwrapImages from "remark-unwrap-images";
import { MDXRemote } from "next-mdx-remote";
import { P, H1, H2, H3, Quote, Strong } from "../../components/News/Text";
import { Ul, Li } from "../../components/News/List";
import { Code, Pre } from "../../components/News/Code";
import { ImageContainer } from "../../components/News/Image";
import Head from "next/head";
import DataSourceAPI from "../../helpers/contentful";
import { useTheme, Grid } from "@mui/material";
import BlogHeader from "../../components/News/BlogHeader";
import Footer from "../../components/Layout/footer";

const styles = (theme) => ({
    root: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "3rem",
    },
    mdx: {
        width: "100%",
        display: "block",
    },
});

const components = {
    h2: H2,
    h1: H1,
    h3: H3,
    ul: Ul,
    li: Li,
    p: P,
    pre: Pre,
    strong: Strong,
    code: Code,
    inlineCode: Code,
    blockquote: Quote,
    img: ImageContainer,
};

const BlogPost = ({ post }) => {
    const theme = useTheme();

    return (
        <>
            <Head>
                <title>Publishers</title>
            </Head>
            <Grid container sx={styles(theme).root}>
                <Grid item container xs={10} md={8} lg={6}>
                    <BlogHeader author={post.author} date={post.date} title={post.title} />
                    <div style={styles(theme).mdx}>
                        <MDXRemote {...post.mdxSource} components={components} lazy />
                    </div>
                </Grid>
            </Grid>
            <Footer />
        </>
    );
};

export default BlogPost;

export async function getStaticProps({ params }) {
    const post = await DataSourceAPI.getPost({ slug: params.slug });
    post.mdxSource = await serialize(post.text, { mdxOptions: { remarkPlugins: [remarkUnwrapImages] } });
    delete post.text;

    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const slugs = await DataSourceAPI.getSlugs();

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
