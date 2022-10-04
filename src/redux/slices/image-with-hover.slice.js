import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getHoveredImages = createAsyncThunk(
    `hovered_image/getHoveredImages`,
    async (id, { rejectWithValue }) => {
        try {
            return fetch(`http://localhost:3004/image_with_hover`).then(res => res.json()).then(data => data)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const imageWithHoverSlice = createSlice({
    name: "hovered_image",
    initialState: {
        sections: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getHoveredImages.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getHoveredImages.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.sections = action.payload
        },
        [getHoveredImages.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default imageWithHoverSlice.reducer