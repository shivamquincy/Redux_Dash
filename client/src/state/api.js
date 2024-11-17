import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// createApi creates an APi slice
// api slice manages all api centerally
//Redux Toolkit automatically generates hooks for each of your endpoints.
export const api = createApi( {
    baseQuery: fetchBaseQuery({ baseUrl: "https://redux-dash.onrender.com/" }),
    reducerPath: "adminApi",
    tagTypes : ["User", "Products", "Customers", "Transactions", "Geography", "Sales", "Admin", "Performance", "DashBoard"],
    // data types that the api will work with
 // 
    endpoints: (build) => ({ // callback function
        getUser : build.query ({
          query: (id) => `general/user/${id}`,
            provideTags: ["User"]
        }),
        getProducts: build.query({ // building the end poiny
            query: () => "client/products",
          provideTags: ["Products"]
        }),
        getCustomers : build.query({
          query: () => "client/customers",
          provideTags: ["Customers"]
        }),
        getTransactions : build.query({
          // a different format as you see
          query : ({page,pageSize,sort,search}) => ({
           url: "client/transactions",
           method: "GET",
           params: {page,pageSize,sort,search},
          }),
          providesTags: ["Transactions"]
        }),
        getGeography : build.query({
          query : () => "client/geography",
          providesTags: ["Geography"],
  }),
  getSales : 
build.query({
  query: () => "sales/sales",
  providesTags: ["Sales"]
}),
getAdmins: 
build.query({
  query: () => "managment/admins",
  providesTags: ["Admin"]
}),
getPerformance: build.query({
  query : (id)=> `managment/performance/${id}`,
  providesTags: ["Performance"]

}),
getDashBoard : build.query({
  query : () => "general/dashboard",
  providesTags: ["DashBoard"]
})
    })

})
// naming the auto hook generated by redux toolkit query
export const {
    useGetUserQuery ,
    useGetProductsQuery,
    useGetCustomersQuery,
    useGetTransactionsQuery,
    useGetGeographyQuery,
    useGetSalesQuery,
    useGetAdminsQuery,
    useGetPerformanceQuery,
    useGetDashBoardQuery
} = api;