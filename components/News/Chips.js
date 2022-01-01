import { useTheme, Chip } from "@mui/material";
import { useState } from "react";
const styles = (theme) => ({
    chip: {
        margin: "1vh",
    },
    chipActive: {
        margin: "1vh",
        backgroundColor: "rgba(64, 63, 63, 0.5)",
    },
});
function Chips(props) {
    const theme = useTheme();
    const data = props.data;
    const news = props.news;

    const [active, setActive] = useState([]);

    const handleClickChip = (data) => {
        console.log(data);
        let temp = [];
        setActive([...active, data]);
        temp = news.filter((x) => x.type.some((r) => active.includes(r)));
        //props.setFilteredNews(temp);
        //props.setCurrentPage(1);
    };
    console.log(active);
    return (
        <Chip
            label={data}
            sx={
                active.includes(data)
                    ? styles(theme).chipActive
                    : styles(theme).chip
            }
            onClick={() => handleClickChip(data)}
        />
    );
}
export default Chips;
