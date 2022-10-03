import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getGalleryDataByPage = createAsyncThunk(
    `gallery/getGalleryDataByPage`,
    async (page, {rejectWithValue})=>{
        try {
            const galleryData = await fetch(`http://localhost:3004/gallery/${page}`).then(res=>res.json()).then(data=>data)
            return galleryData.data
        }catch (error){
            return rejectWithValue(error.message)
        }
    }
)

const gallerySlice = createSlice({
    name: "gallery",
    initialState: {
        galleryData: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getGalleryDataByPage.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getGalleryDataByPage.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.galleryData = action.payload
        },
        [getGalleryDataByPage.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default gallerySlice.reducer
