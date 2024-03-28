import { ITask } from "../../types/type";
import baseApi from "./baseApi";

const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query<ITask[], string>({
      query: () => "/tasks",
      providesTags: (result) =>
        result
          ? result.map(({ _id }) => ({ type: "Expense", id: _id }))
          : ["Task"],
    }),
    getSingleTask: builder.query<ITask, string>({
      query: (id) => `/tasks/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Task", id }],
    }),
    deleteTask: builder.mutation<void, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
    createTask: builder.mutation<ITask, Partial<ITask>>({
      query: (newTask) => ({
        url: "/tasks",
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: ["Task"],
    }),
    updateTask: builder.mutation({
      query: ({ id, newTask }) => ({
        url: `/tasks/${id}`,
        method: "PUT",
        body: newTask,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Task", id }],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetSingleTaskQuery,
  useDeleteTaskMutation,
  useCreateTaskMutation,
  useUpdateTaskMutation,
} = taskApi;
