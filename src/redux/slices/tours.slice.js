import { createSlice } from "@reduxjs/toolkit";

const toursSlice = createSlice({
    name: "tours",
    initialState: {
        tours: {},
        isLoading: false,
        error: ""
    },
    reducers: {
        getTours(state, action) {
            state.tours = action.payload
        }
    }
})

export default toursSlice.reducer
export const { getTours } = toursSlice.actions