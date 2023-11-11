import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
    name: "api",
    initialState: {
        url: {},
        genres: {},
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload
        },
        getGenres: (state, action) => {
            state.genres = action.payload
        }

    }
})
export const { getApiConfiguration, getGenres } = apiSlice.actions
export default apiSlice.reducer