import { useTheme, Grid } from "@mui/material";

const styles = (theme) => ({
    glass: {
        backdropFilter: "blur(10px)",
        boxShadow: theme.shadows[1],
    },
});

const Glass = ({ children, styling, color, onClickFunction }) => {
    //onClick je isključivo zbog scrolla na news sa Home pagea
    const theme = useTheme();
    let background = [
        "rgba(219, 219, 219, 0.08)" /*0 sivo*/,
        "rgba(255, 255, 255, 0.42)" /*1 svijetlo bijela*/,
        "rgba(255, 255, 255, 0.7)" /*2 bijela*/,
    ];

    const allStyles = {
        glass: {
            ...styling,
            ...styles(theme).glass,
            background: background[color],
        },
    };

    return (
        <Grid
            sx={allStyles.glass}
            container
            alignItems="center"
            justifyContent="center"
            onClick={() => onClickFunction}
        >
            {children}
        </Grid>
    );
};

export default Glass;
