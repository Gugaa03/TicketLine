import axios from "axios";
import https from "https";

// Create an HTTPS agent with `rejectUnauthorized` set to false
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const HttpUtilities = {
  get: (url, params) => {
    return axios.get(url, {
      params,
      httpsAgent: agent, // Add this line to use the custom agent
    });
  },
  post: (url, data) => {
    return axios.post(url, JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
      httpsAgent: agent, // Add this line to use the custom agent
    });
  },
  delete: (url) => {
    return axios.delete(url, {
      httpsAgent: agent, // Add this line to use the custom agent
    });
  },
};

export default HttpUtilities;
