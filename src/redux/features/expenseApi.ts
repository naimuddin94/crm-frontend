import { IExpense } from "../../types/type";
import baseApi from "./baseApi";

const expenseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getExpenses: builder.query<IExpense[], string>({
      query: () => "/expenses",
      providesTags: (result) =>
        result
          ? result.map(({ _id }) => ({ type: "Expense", id: _id }))
          : ["Expense"],
    }),
    getSingleExpense: builder.query<IExpense, string>({
      query: (id) => `/expenses/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Expense", id }],
    }),
    deleteExpense: builder.mutation<void, string>({
      query: (id) => ({
        url: `/expenses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Expense"],
    }),
    createExpense: builder.mutation<IExpense, Partial<IExpense>>({
      query: (newExpense) => ({
        url: "/expenses",
        method: "POST",
        body: newExpense,
      }),
      invalidatesTags: ["Expense"],
    }),
    updateExpense: builder.mutation({
      query: ({ id, newExpense }) => ({
        url: `/expenses/${id}`,
        method: "PUT",
        body: newExpense,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Expense", id }],
    }),
  }),
});

export const {
  useGetExpensesQuery,
  useGetSingleExpenseQuery,
  useDeleteExpenseMutation,
  useCreateExpenseMutation,
  useUpdateExpenseMutation,
} = expenseApi;
