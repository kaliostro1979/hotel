import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getHostelAccordionData = createAsyncThunk(
    `tours/getToursAccordionData`,
    async (_, {rejectWithValue}) => {
        try {
            return await fetch(`http://localhost:3004/hostel`).then(res => res.json()).then(data => data)
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


const hostelSlice = createSlice({
    name: "hostel",
    initialState: {
        accordionData: {},
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getHostelAccordionData.pending]: (state, action) => {
            state.isLoading = true
        },
        [getHostelAccordionData.fulfilled]: (state, action) => {
            state.isLoading = false
            state.accordionData = action.payload
        },
        [getHostelAccordionData.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default hostelSlice.reducer
