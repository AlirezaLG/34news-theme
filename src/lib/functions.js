import { cache } from "react";
import { axiosGQL } from "./axios";

// get data with Graph QL
const getHomePageGQL = cache(async (data) => {
  try {
    const response = await axiosGQL.post("/", data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return error + "Error with GetHOmePageGQL - sharks";
  }
});

/**
 * Retrieves widget data using GraphQL.
 * @param {Object} data - The data to be sent in the GraphQL request.
 * @returns {Promise<Object|null>} - The response data from the GraphQL request, or null if an error occurs.
 */
const getDataGQL = cache(async (data) => {
  try {
    const response = await axiosGQL.post("/", data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return error + "error with GetDataGQL - sharks";
  }
});

const getPostGQL = cache(async (data) => {
  try {
    const response = await axiosGQL.post("/", data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error + "error with getPostGQL - sharks";
  }
});

export { getHomePageGQL, getDataGQL, getPostGQL };
