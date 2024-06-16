import { baseApi } from "@shared/api/base-api";

import {
  CreateWorkspaceDto,
  UpdateWorkspaceDto,
  Workspace,
  WorkspaceWithComponents,
} from "./../model/types";

export const workspaceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllWorkspaces: builder.query<Workspace[], void>({
      query: () => ({
        method: "GET",
        url: "/workspace",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Workspace" as const,
                id,
              })),
              "Workspace",
            ]
          : ["Workspace"],
    }),
    getWorkspaceById: builder.query<WorkspaceWithComponents, string>({
      query: (id) => ({
        method: "GET",
        url: `/workspace/${id}`,
      }),
    }),

    createWorkspace: builder.mutation<Workspace, CreateWorkspaceDto>({
      query: (dto) => ({
        method: "POST",
        url: "/workspace",
        body: dto,
      }),
      invalidatesTags: ["Workspace"],
    }),
    updateWorkspace: builder.mutation<
      Workspace,
      { id: string; dto: UpdateWorkspaceDto }
    >({
      query: ({ id, dto }) => ({
        method: "PATCH",
        url: `/workspace/${id}`,
        body: dto,
      }),
      invalidatesTags: ["Workspace"],
    }),
    deleteWorkspace: builder.mutation<string, string>({
      query: (id) => ({
        method: "DELETE",
        url: `/workspace/${id}`,
      }),
      invalidatesTags: ["Workspace"],
    }),
  }),
});

export const {
  useGetAllWorkspacesQuery,
  useGetWorkspaceByIdQuery,
  useCreateWorkspaceMutation,
  useUpdateWorkspaceMutation,
  useDeleteWorkspaceMutation,
} = workspaceApi;
