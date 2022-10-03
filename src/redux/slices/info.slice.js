import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getInfoData = createAsyncThunk(
    `info/getInfoData`,
    async (_, {rejectWithValue})=> {
        try {
            return await fetch(`http://localhost:3004/info_data`)
                .then(res=>res.json())
                .then(data=>data)
        }catch (error) {
            return rejectWithValue(error)
        }
    }
)

const infoSlice = createSlice({
    name: "info",
    initialState: {
        isLoading: false,
        error: null,
        data: []
    },
    reducers: {},
    extraReducers: {
        [getInfoData.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getInfoData.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload
        },
        [getInfoData.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default infoSlice.reducer
