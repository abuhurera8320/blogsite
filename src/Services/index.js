import axios from "axios";

const baseURL = "https://61791a83aa7f3400174047a6.mockapi.io/v1";

export const Service = (url) =>
  axios.create({
    baseURL: baseURL + url,
    headers: {
      "Content-Type": "application/json",
    },
  });
