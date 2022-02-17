import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const newsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '584966b816msh81d5b95c1ed1131p107bc0jsn02067aa9809f'
}
const baseUrl = "https://bing-news-search1.p.rapidapi.com"
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