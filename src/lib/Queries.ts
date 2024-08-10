import { useQuery } from "@tanstack/react-query";
import { getData } from "./HTTPConnect";

export const getArticle = () => {
  const quer = useQuery({
    queryKey: ["makms"],
    queryFn: getData,
  });
};

export const article = async () => {
  try {
    const response = await getData();
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
