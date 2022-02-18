import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const newsApiHeaders = {
    'x-bingapis-sdk': process.env.REACT_APP_RAPID_API_SDK,
    'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
}
const baseUrl = process.env.REACT_APP_RAPID_API_URL
const createRequest = (url) => ({url, headers:newsApiHeaders})
export const newsApi = createApi({
    reducerPath:"newsApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getNews:builder.query({
            query:({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})
export const {useGetNewsQuery} = newsApi