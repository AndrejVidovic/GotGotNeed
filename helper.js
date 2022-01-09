import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.npoint.io",
});

export const getNewsForHomePage = () =>
    instance.get("/a9192f26afbee177f219").then((response) => response.data);
