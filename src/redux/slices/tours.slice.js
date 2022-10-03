import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getToursAccordionData = createAsyncThunk(
    `tours/getToursAccordionData`,
    async (_, {rejectWithValue}) => {
        try {
            return await fetch(`http://localhost:3004/tours_accordion`).then(res => res.json()).then(data => data)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const getToursVariants = createAsyncThunk(
    `tours/getToursVariants`,
    async (_, {rejectWithValue}) => {
        try {
            return await fetch(`http://localhost:3004/tours-variants`).then(res => res.json()).then(data => data)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

const toursSlice = createSlice({
    name: "tours",
    initialState: {
        tours: {},
        variants: [],
        isLoading: false,
        error: ""
    },
    reducers: {},
    extraReducers: {
        [getToursAccordionData.fulfilled]: (state, action) => {
            state.isLoading = false
            state.tours = action.payload
        },
        [getToursAccordionData.pending]: (state, action) => {
            state.isLoading = true
        },
        [getToursAccordionData.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        [getToursVariants.fulfilled]: (state, action) => {
            state.isLoading = false
            state.variants = action.payload
        },
        [getToursVariants.pending]: (state, action) => {
            state.isLoading = true
        },
        [getToursVariants.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default toursSlice.reducer
