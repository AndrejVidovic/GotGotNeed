import newsData from "../fakeData/News/News.json";

export const getNewsForHomePage = () => newsData.slice(0, 3);
