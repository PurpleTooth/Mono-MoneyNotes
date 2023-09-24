import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface IBody {
  email: string;
  password: string;
}

export const usersApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://10.0.2.2:3000/" }),
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => ({ url: "/users/", method: "Get" }),
    }),
    addUser: build.mutation({
      query: (body: IBody) => ({
        url: "/users/",
        method: "Post",
        body,
      }),
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = usersApi;
