import { IProject } from "../../types/type";
import baseApi from "./baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query<IProject[], string>({
      query: () => "/projects",
      providesTags: (result) =>
        result
          ? result.map(({ _id }) => ({ type: "Task", id: _id }))
          : ["Project"],
    }),
    getSingleProject: builder.query<IProject, string>({
      query: (id) => `/projects/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Project", id }],
    }),
    deleteProject: builder.mutation<void, string>({
      query: (id) => ({
        url: `/projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Project"],
    }),
    createProject: builder.mutation<IProject, Partial<IProject>>({
      query: (newProject) => ({
        url: "/projects",
        method: "POST",
        body: newProject,
      }),
      invalidatesTags: ["Project"],
    }),
    updateProject: builder.mutation({
      query: ({ id, newProject }) => ({
        url: `/projects/${id}`,
        method: "PUT",
        body: newProject,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Project", id }],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetSingleProjectQuery,
  useDeleteProjectMutation,
  useCreateProjectMutation,
  useUpdateProjectMutation,
} = projectApi;
