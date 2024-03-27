import axios, { AxiosRequestConfig } from "axios";

export function getApiUrl() {
  const url =
    process.env.GEEK_SPACE_API_URL ||
    process.env.NEXT_PUBLIC_GEEK_SPACE_API_URL;

  return `${url}/api/`;
}

export function getApiUrlExternal() {

  console.log (process.env.API_URL_EXTERNAL);
  const url =
    process.env.API_URL_EXTERNAL ||
    process.env.NEXT_API_URL_EXTERNAL;

  return `${url}/api/`;
}

const getInstance = (config?: AxiosRequestConfig) => {
  return axios.create({
    baseURL: "/",
    headers: {
      "Content-Type": "application/json",
      "accept-language": "es",
    },
    ...config,
  });
};

export const httpClient = getInstance({
  baseURL: getApiUrl(),
});

export const httpClientExternal = getInstance({
  baseURL: getApiUrlExternal(),
});

