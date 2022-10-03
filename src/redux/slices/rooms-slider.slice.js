import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getRooms = createAsyncThunk(
    `rooms/getRooms`,
    async (_, {rejectWithValue})=>{
        try {
            return await fetch(`http://localhost:3004/rooms`)
                .then(res=>res.json())
                .then(data=>data)
        }catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const getActiveRoomMeta = createAsyncThunk(
    `rooms/getActiveRoomMeta`,
    async (id, {rejectWithValue})=>{
        try {
            return await fetch(`http://localhost:3004/rooms/${id}`)
                .then(res=>res.json())
                .then(data=>data)
        }catch (error) {
            return rejectWithValue(error)
        }
    }
)

const roomsSliderSlice = createSlice({
    name: "rooms",
    initialState: {
        rooms: [],
        activeRoomMeta: {},
        isLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getRooms.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getRooms.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.rooms = action.payload
        },
        [getRooms.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },
        [getActiveRoomMeta.pending]: (state, action)=>{
            state.isLoading = true
        },
        [getActiveRoomMeta.fulfilled]: (state, action)=>{
            state.isLoading = false
            state.activeRoomMeta = action.payload
        },
        [getActiveRoomMeta.rejected]: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default roomsSliderSlice.reducer
