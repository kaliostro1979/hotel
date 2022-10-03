import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getPartners = createAsyncThunk(
    `partners/getPartners`,
     async (_, {rejectWithValue})=> {
        try {
            return await fetch(`http://localhost:3004/partners`).then(res=>res.json()).then(data=>data)
        }catch (error) {
            return rejectWithValue(error)
        }
     }
)

const partnersSlice = createSlice({
    name: "partners",
    initialState: {
        isLoading: false,
        error: null,
        partners: []
    },
    reducers: {},
    extraReducers: {
        [getPartners.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getPartners.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.partners = action.payload
        },
        [getPartners.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default partnersSlice.reducer
