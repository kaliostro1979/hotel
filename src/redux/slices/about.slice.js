import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getAboutPageData = createAsyncThunk(
    `about/getAboutPageData`,
    async (_, {rejectWithValue})=>{
        try {
            const aboutPageData = await fetch(`http://localhost:3004/about`)
                .then(res=>res.json())
                .then(data=>data)
            return aboutPageData
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

const aboutSlice = createSlice({
    name: "about",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [getAboutPageData.fulfilled]: (state, action)=> {
            state.isLoading = false
            state.error = null
            state.data = action.payload
        },
        [getAboutPageData.pending]: (state, action)=> {
            state.isLoading = true
        },
        [getAboutPageData.rejected]: (state, action)=> {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default aboutSlice.reducer
