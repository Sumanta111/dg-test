import axios from "axios";

const request = (options) => {
  const onSuccess = (response) => response.data;
  const onError = (error) => {
    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error("Error Message:", error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return axios(options).then(onSuccess).catch(onError);
};

export const requestParllel = async (collection) => {
  const requests = collection.map((options) =>
    request(options).catch((er) => er)
  );
  return axios.all(requests);
};

export default {
  ALL: axios.all,

  GET: ({ url, params, headers, options }) =>
    request({
      url,
      method: "GET",
      params,
      headers,
      ...options,
    }),
  POST: ({ url, params, headers, data, options }) =>
    request({
      url,
      method: "POST",
      params,
      headers,
      data,
      ...options,
    }),
  PATCH: ({ url, params, headers, data, options }) =>
    request({
      url,
      method: "PATCH",
      params,
      headers,
      data,
      ...options,
    }),
  DELETE: ({ url, params, headers, data, options }) =>
    request({
      url,
      method: "DELETE",
      params,
      headers,
      data,
      ...options,
    }),
  PUT: ({ url, params, headers, data, options }) =>
    request({
      url,
      method: "PUT",
      params,
      headers,
      data,
      ...options,
    }),
};
