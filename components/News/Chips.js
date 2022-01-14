import { Chip } from "@mui/material";

const styles = () => ({
    chipActive: {
        background: "rgba(64, 63, 63, 0.2)",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(4px)",
    },
});

const Chips = ({ chipName, setFilteredNews, allNews, activeChips, setActiveChips }) => {
    const handleClickChip = (chipName) => {
        let tempNews = [];
        let tempChips = activeChips;

        if (!activeChips.includes(chipName)) {
            tempChips = [...activeChips, chipName];
        } else {
            tempChips = activeChips.filter((keyword) => keyword !== chipName);
        }

        if (tempChips.length > 0) {
            tempNews = allNews.filter((blog) => blog.types.items.some((keyword) => tempChips.includes(keyword.name)));
        } else {
            tempNews = allNews;
        }

        setActiveChips(tempChips);
        setFilteredNews(tempNews);
    };

    return <Chip label={chipName} sx={activeChips.includes(chipName) ? styles().chipActive : null} onClick={() => handleClickChip(chipName)} />;
};

export default Chips;
