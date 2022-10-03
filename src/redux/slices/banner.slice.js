import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getBannerData = createAsyncThunk(
    `banner/getBannerData`,
    async (page, {rejectWithValue}) => {
        try {
            return await fetch(`http://localhost:3004/banner/${page}`).then(res=>res.json()).then(data=>data)
        }catch (error) {
            return rejectWithValue(error)
        }
    }
)

const BannerSlice = createSlice({
    name: "banner",
    initialState: {
        bannerContent: {},
        isLoading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [getBannerData.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getBannerData.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.bannerContent = action.payload
        },
        [getBannerData.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default BannerSlice.reducer
