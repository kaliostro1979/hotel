import { combineReducers, configureStore } from "@reduxjs/toolkit";
import RoomsGallerySlice from "./slices/rooms.gallery.slice";

const rootReducer = combineReducers({
    rooms_gallery: RoomsGallerySlice
})

export const store = configureStore({
    reducer: {main: rootReducer}
})