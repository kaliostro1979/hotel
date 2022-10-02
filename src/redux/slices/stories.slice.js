import {createSlice} from "@reduxjs/toolkit";

const storiesSlice = createSlice({
    name: "stories",
    initialState: {
        isLoading: false,
        error: null,
        stories: [],
        categories: []
    },
    reducers: {
        getCategories(state, action) {
            state.categories = action.payload
        },
        getStoriesByCategory(state, action) {
            state.stories = action.payload
        }
    }
})

export default storiesSlice.reducer
export const {getCategories, getStoriesByCategory} = storiesSlice.actions
