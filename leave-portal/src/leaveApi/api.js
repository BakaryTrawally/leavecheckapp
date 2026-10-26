import axios from "axios";
const api = axios.create({
    baseURL:
        process.env.NODE_ENV === "production"
            ? "https://leavecheckapp.onrender.com/api"
            : "http://localhost:5000/api",

    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
