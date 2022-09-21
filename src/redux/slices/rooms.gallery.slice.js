import { createSlice } from "@reduxjs/toolkit";
import { ROOMS_GALLERY, ROOMS_IMAGES } from "../../constants/rooms.gallery.constants";


const RoomsGallerySlice = createSlice({
    name: "rooms gallery",
    initialState: {
        rooms_name: [],
        active_room_images: [],
        isLoading: false
    },
    reducers: {
        getRoomsName: (state, action) => {
            state.rooms_name = ROOMS_GALLERY
        },
        getActiveRoomImages: (state,action)=>{
            state.active_room_images = ROOMS_IMAGES[action.payload]
        }
    }
})

export default RoomsGallerySlice.reducer
export const { getRoomsName, getActiveRoomImages } = RoomsGallerySlice.actions
