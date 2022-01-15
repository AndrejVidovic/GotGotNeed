import { Typography, useTheme, lighten } from "@mui/material";

const styles = (theme) => ({
    quote: {
        backgroundColor: lighten(theme.palette.secondary.main, 0.8),
        fontSize: "16px",
        fontStyle: "italic",
        borderRadius: theme.shape.borderRadius + "px",
        border: theme.palette.secondary.main + " solid",
        margin: "1.5rem 0",
        borderWidth: "0 0 0 12px",
        padding: " 16px 32px",
    },
});

export const P = (props) => <Typography variant="body1" sx={{ fontSize: "16px", wordBreak: "break-word" }} {...props} />;
export const H1 = (props) => <Typography variant="h1" sx={{ fontSize: "36px", fontWeight: 700, margin: "4rem 0 2rem 0" }} {...props} />;
export const H2 = (props) => <Typography variant="h2" sx={{ fontSize: "24px", fontWeight: 600, margin: "3rem 0 1.5rem 0" }} {...props} />;
export const H3 = (props) => <Typography variant="h3" sx={{ fontSize: "20px", fontStyle: "italic", margin: "1.5rem 0 0.75rem 0", fontWeight: 100, color: "#747474" }} {...props} />;
export const Quote = (props) => {
    const theme = useTheme();
    return <Typography variant="body1" sx={styles(theme).quote} {...props} />;
};
export const Strong = (props) => {
    const theme = useTheme();
    return <Typography variant="body1" sx={{ display: "inline", fontSize: "16px", fontWeight: 700, color: theme.palette.primary.main }} {...props} />;
};
