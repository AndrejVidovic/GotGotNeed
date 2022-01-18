import { useTheme } from "@mui/material";
import { SquareRounded } from "@mui/icons-material";

const styles = (theme) => ({
    ul: {
        "@media (min-width: 0px) and (max-width: 900px)": {
            padding: 0,
        },
    },
    li: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
    },
    liSquare: {
        fontSize: "8px",
        margin: "6px 1rem 0 1rem",
        color: theme.palette.primary.main,
    },
    liIcon: {
        display: "inline",
    },
    liText: {
        fontSize: "16px",
    },
});

export const Ul = (props) => {
    const theme = useTheme();
    return <ul style={styles(theme).ul} {...props} />;
};

export const Li = (props) => {
    const theme = useTheme();
    return (
        <div style={styles(theme).li}>
            <div style={styles(theme).liIcon}>
                <SquareRounded sx={styles(theme).liSquare} />
            </div>
            <span style={styles(theme).liText} {...props} />
        </div>
    );
};
