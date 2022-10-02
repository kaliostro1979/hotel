import { combineReducers, configureStore } from "@reduxjs/toolkit";
import RoomsGallerySlice from "./slices/rooms.slice";
import BannerSlice from "./slices/banner.slice";
import toursSlice from "./slices/tours.slice";
import storiesSlice from "./slices/stories.slice";

const rootReducer = combineReducers({
    rooms_gallery: RoomsGallerySlice,
    banner: BannerSlice,
    tours: toursSlice,
    stories: storiesSlice
})

export const store = configureStore({
    reducer: {main: rootReducer}
})
