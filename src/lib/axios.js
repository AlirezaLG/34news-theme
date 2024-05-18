import Axios from "axios";
// import getConfig from "next/config";
import https from "https";
// const config = getConfig();

let axiosGQL;
axiosGQL = Axios.create({
  method: "post",
  maxBodyLength: Infinity,
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// REST API URL
let axios;
axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  headers: {},
  withCredentials: true,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export { axios, axiosGQL };
