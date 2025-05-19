// import { apiSlice } from './apiSlice';

// const USERS_URL = '/invest/api/v1';

// export const usersApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/login`,
//         method: 'POST',
//         body: data,
//       }),
//     }),
//     register: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/signup`,
//         method: 'POST',
//         body: data,
//       }),
//     }),
//     logout: builder.mutation({
//       query: () => ({
//         url: `${USERS_URL}/logout`,
//         method: 'POST',
//       }),
//     }),
//     getAllUsers: builder.query({
//       query: () => ({
//         url: `${USERS_URL}`,
//         method: 'GET',
//       }),
//       providesTags: ['User'],
//     }),
//     updateUserProfile: builder.mutation({
//       query: ({ userId, ...data }) => ({
//         url: `${USERS_URL}/${userId}`,
//         method: 'PATCH',
//         body: data,
//       }),
//       invalidatesTags: ['User'],
//     }),
//     deleteUser: builder.mutation({
//       query: (userId) => ({
//         url: `${USERS_URL}/${userId}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['User'],
//     }),
//   }),
// });

// export const {
//   useLoginMutation,
//   useRegisterMutation,
//   useLogoutMutation,
//   useGetAllUsersQuery,
//   useUpdateUserProfileMutation,
//   useDeleteUserMutation,
// } = usersApiSlice;

import { apiSlice } from './apiSlice';
const USERS_URL = '/invest/api/v1'; // Adjust based on your API base URL

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/signup`,
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: `${USERS_URL}/`,
        method: 'GET',
      }),
    }),
    updateUserProfile: builder.mutation({
      query: ({ userId, ...data }) => ({
        url: `${USERS_URL}/users/${userId}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `${USERS_URL}/users/${userId}`,
        method: 'DELETE',
      }),
    }),
    creditReferrer: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/credit-referrer`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetAllUsersQuery,
  useUpdateUserProfileMutation,
  useDeleteUserMutation,
  useCreditReferrerMutation,
} = userApiSlice;