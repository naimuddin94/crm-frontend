import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://crm-api-indol.vercel.app/api/v1",
  }),
  tagTypes: ["User", "Customer", "Project"],
  endpoints: () => ({}),
});

export default baseApi;
