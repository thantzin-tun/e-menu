//Only call get method various initial source route
import useSWR, { mutate } from "swr";
import { delete_method, post_method, put_method } from "domains";
import { rest_service_operation } from "./rest_services";

interface FetchingProps {
  endPoint: string;
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

const url: string = process.env.REACT_APP_DOMAIN_URL ?? "";

//Get Server Data
export const FetchApi = ({ endPoint }: FetchingProps) => {
  const { data, error, isLoading } = useSWR(`${url}${endPoint}`, fetcher, {
    onSuccess: () => {},
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
  });
  console.log("Process env domain url is", process.env.REACT_APP_DOMAIN_URL);
  return {
    isLoading,
    data,
    error,
  };
};

// //Remove Server Data
// export const remove = async (id: number) => {
//   await rest_service_operation(id, product, delete_method);
//   mutate(`${url}${product}`);
// };

// //Add Server Data
// export const add = async (data: any) => {
//   await rest_service_operation("", product, post_method, data);
//   mutate(`${url}${product}`);
// };

// //Update Server Data
// export const update = async (id: number, data: any) => {
//   await rest_service_operation(id, product, put_method, data);
//   mutate(`${url}${product}`);
// };
