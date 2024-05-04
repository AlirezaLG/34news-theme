import Axios from "axios";
import getConfig from "next/config";
import https from "https";

const config = getConfig();
let axios;


// if (config) {
//   axios = Axios.create({
//     baseURL: config.publicRuntimeConfig.apiUrl,
//     headers: {},
//     withCredentials: true,
//     httpsAgent: new https.Agent({
//       rejectUnauthorized: false,
//     }),
//   });
// } else {
  axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
    headers: {},
    withCredentials: true,
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  });
// }
export default axios;
