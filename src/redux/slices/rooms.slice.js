import { createSlice } from "@reduxjs/toolkit";
import { ROOMS_GALLERY, ROOMS_META } from "../../constants/rooms.constants";


const RoomsSlice = createSlice({
    name: "rooms gallery",
    initialState: {
        rooms_name: [],
        active_room_images: [],
        active_room_options: [],
        active_room_description: "",
        isLoading: false
    },
    reducers: {
        getRoomsName: (state, action) => {
            state.rooms_name = ROOMS_GALLERY
        },
        getActiveRoomImages: (state,action)=>{
            state.active_room_images = ROOMS_META[action.payload]
        },
        getActiveRoomOptions: (state,action)=>{
            state.active_room_options = ROOMS_META[action.payload]
        },
        getActiveRoomDescription: (state,action)=>{
            state.active_room_description = ROOMS_META[action.payload]
        }
    }
})

export default RoomsSlice.reducer
export const { getRoomsName, getActiveRoomImages, getActiveRoomOptions, getActiveRoomDescription } = RoomsSlice.actions
