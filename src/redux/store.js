import { combineReducers, configureStore } from "@reduxjs/toolkit";
import RoomsGallerySlice from "./slices/rooms.slice";
import BannerSlice from "./slices/banner.slice";

const rootReducer = combineReducers({
    rooms_gallery: RoomsGallerySlice,
    banner: BannerSlice
})

export const store = configureStore({
    reducer: {main: rootReducer}
})
