import { post_method } from "domains";
import domainUrl from "domains/url";
import queryString from "query-string";

const routeFilter = (obj: any) => {
  let paramObject = queryString.stringify(obj, { sort: false });
  return `?${paramObject}`;
};

const handel_endPoint = (params: any, endPoint: string) => {
  let routeEndPoint: string;
  if (typeof params == "number" || typeof params == "string") {
    routeEndPoint = `${endPoint}/${params}`;
  } else if (typeof params == "object") {
    let result = routeFilter(params);
    routeEndPoint = `${endPoint}${result}`;
  } else {
    routeEndPoint = endPoint;
  }
  return routeEndPoint;
};

export const rest_service_operation = async (
  params: any,
  endPoint: string,
  method: string,
  data: any = {}
) => {
  let router_filter: string = handel_endPoint(params, endPoint);
  try {
    let responseData = await domainUrl(router_filter, {
      method: method,
      data: data,
    });
    console.log("Response is ", responseData.data);
    return "success";
  } catch (err) {
    throw err;
  }
};
