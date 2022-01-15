//Shema preuzeta s: https://github.dev/mcagalj/next-app-prototype .

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useTheme, lighten } from "@mui/material";

const styles = (theme) => ({
    code: {
        backgroundColor: lighten(theme.palette.primary.main, 0.7),
        fontSize: "12px",
        borderRadius: theme.shape.borderRadius + "px",
        padding: "4px 8px",
    },
});

export const Code = (props) => {
    const theme = useTheme();
    const match = /language-(\w+)/.exec(props.className || ""); //ukoliko je specificiran jezik code bloka pali higlither inace samo blok obicni

    return match ? (
        <SyntaxHighlighter style={style} language={match[1]} showLineNumbers={true} PreTag="div" {...props}>
            {String(props.children).replace(/\n$/, "")}
        </SyntaxHighlighter>
    ) : (
        <code style={styles(theme).code}>{props.children}</code>
    );
};
