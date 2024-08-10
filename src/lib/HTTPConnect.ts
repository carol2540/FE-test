import axios from "axios";

const BASE_URL = "https://pandooin.com/api/zamrood/";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getData = async () => {
  const response = await axiosInstance.get("article");
  return response;
};

export const getDatas = async () => {
  const response = await fetch(
    "https://pandooin.com/api/zamrood/itinerary?highlight=true#",
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data;
};

export const getArticle = async () => {
  const response = await fetch("https://pandooin.com/api/zamrood/article", {
    method: "GET",
  });
  const data = await response.json();
  return data;
};
