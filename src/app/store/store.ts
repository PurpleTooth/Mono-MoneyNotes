import {configureStore} from "@reduxjs/toolkit"
import { usersApi } from "../../shared/api/usersApi"

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
    }, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
})