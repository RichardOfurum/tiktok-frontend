import axios from "axios";

const instance = axios.create({
    baseURL: "https://mearn-tiktok-backend.herokuapp.com/",
});

export default instance;