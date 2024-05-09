import { configureStore } from "@reduxjs/toolkit"
import { productAPI } from "../services/productAPI"
export const store = configureStore({
    reducer: {
        [productAPI.reducerPath]: productAPI.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(productAPI.middleware)
})