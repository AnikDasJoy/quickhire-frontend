import axios from "axios";

const API = axios.create({
  baseURL: "https://quickhire-backend-psh81k20h-anik1.vercel.app/api",
});

export default API;