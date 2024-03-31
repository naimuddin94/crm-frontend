import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// https://crm-api-indol.vercel.app/api/v1
// http://localhost:5000/api/v1
// Define a service using a base URL and expected endpoints
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://crm-api-indol.vercel.app/api/v1",
    credentials: "include",
  }),
  tagTypes: ["User", "Customer", "Project", "Task", "Expense"],
  endpoints: () => ({}),
});

export default baseApi;
