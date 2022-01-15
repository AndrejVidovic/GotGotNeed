import { useTheme } from "@mui/material";
import { SquareRounded } from "@mui/icons-material";

const styles = (theme) => ({});

export const Ul = (props) => <ul {...props} />;

export const Li = (props) => {
    const theme = useTheme();
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            <div style={{ display: "inline" }}>
                <SquareRounded sx={{ fontSize: "8px", margin: "6px 1rem 0 1rem", color: theme.palette.primary.main }} />
            </div>
            <span style={{ fontSize: "16px" }} {...props} />
        </div>
    );
};
