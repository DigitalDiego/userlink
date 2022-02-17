import {configureStore} from "@reduxjs/toolkit"
import {newsApi} from "../Services/NewsApi"
export default configureStore({
    reducer:{
        [newsApi.reducerPath]:newsApi.reducer
    }
})