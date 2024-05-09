import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productAPI = createApi({
    reducerPath: "productAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (params) => ({
                url: "/products",
                params
            })
        }),
        postProduct: builder.mutation({
            query: (body) => ({
                url: "/products",
                body,
                method: "POST"
            })
        })
    })
})
export const { useGetProductsQuery, usePostProductMutation } = productAPI