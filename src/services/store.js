import {configureStore} from '@reduxjs/toolkit'
import { articleApi } from './article'


export const store = configureStore({
    // global store or state as whole cake
    // reducer allows us to get specific slice of cake to reduce the entire state to only get what we need
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    // allows us to do something to that state before we need it 

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)

})