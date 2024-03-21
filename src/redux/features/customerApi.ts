import { ICustomer } from "../../types/type";
import baseApi from "./baseApi";

const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query<ICustomer[], string>({
      query: () => "/customers",
      providesTags: ["Customer"],
    }),
    getSingleCustomer: builder.query<ICustomer, string>({
      query: (id) => `/customers/${id}`,
    }),
    deleteCustomer: builder.mutation<void, string>({
      query: (id) => ({
        url: `/customers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Customer"],
    }),
    createCustomer: builder.mutation<ICustomer, Partial<ICustomer>>({
      query: (newCustomer) => ({
        url: "/customers",
        method: "POST",
        body: newCustomer,
      }),
      invalidatesTags: ["Customer"],
    }),
    updateCustomer: builder.mutation({
      query: ({ id, newCustomer }) => ({
        url: `/customers/${id}`,
        method: "PUT",
        body: newCustomer,
      }),
      invalidatesTags: ["Customer"],
    }),
  }),
});

export const {
  useGetCustomersQuery,
  useGetSingleCustomerQuery,
  useDeleteCustomerMutation,
  useCreateCustomerMutation,
  useUpdateCustomerMutation,
} = customerApi;
