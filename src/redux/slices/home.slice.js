import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const getHomeData = createAsyncThunk(
    `home/getHomeData`,
    async (_, {rejectWithValue})=>{
        try {
            return await fetch(`http://localhost:3004/home`)
                .then(res=>res.json())
                .then(data=>data)
        }catch (error){
            return rejectWithValue(error)
        }
    }
)

const homeSlice = createSlice({
    name: "home",
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getHomeData.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getHomeData.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.data = action.payload
        },
        [getHomeData.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default homeSlice.reducer
