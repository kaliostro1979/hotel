import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getCategoriesAction = createAsyncThunk(
    `stories/getCategoriesAction`,
    async (_, {rejectWithValue})=>{
        try {
            const categories = await fetch(`http://localhost:3004/categories`)
                .then(res=>res.json())
                .then(data=>data)
            return categories
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

export const getStoriesByCategoryAction = createAsyncThunk(
    `stories/getStoriesByCategoryAction`,
    async (category, {rejectWithValue, dispatch})=>{
        try {
            const stories = await fetch(`http://localhost:3004/stories/${category}`)
                .then(res=>res.json())
                .then(data=>data)
            return stories

        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)


const storiesSlice = createSlice({
    name: "stories",
    initialState: {
        isLoading: false,
        error: null,
        stories: [],
        categories: []
    },
    reducers: {

    },
    extraReducers: {
        [getCategoriesAction.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.categories = action.payload
        },
        [getCategoriesAction.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getCategoriesAction.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },
        [getStoriesByCategoryAction.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.stories = action.payload
        },
        [getStoriesByCategoryAction.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getStoriesByCategoryAction.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default storiesSlice.reducer
export const {getCategories, getStoriesByCategory} = storiesSlice.actions
