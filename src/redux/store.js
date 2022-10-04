import { combineReducers, configureStore } from "@reduxjs/toolkit";
import BannerSlice from "./slices/banner.slice";
import toursSlice from "./slices/tours.slice";
import storiesSlice from "./slices/stories.slice";
import aboutSlice from "./slices/about.slice";
import hostelSlice from "./slices/hostel.slice";
import gallerySlice from "./slices/gallery.slice";
import infoSlice from "./slices/info.slice";
import partnersSlice from "./slices/partners.slice";
import roomsSliderSlice from "./slices/rooms-slider.slice";
import homeSlice from "./slices/home.slice";
import imageWithHoverSlice from "./slices/image-with-hover.slice";


const rootReducer = combineReducers({
    home: homeSlice,
    banner: BannerSlice,
    tours: toursSlice,
    stories: storiesSlice,
    about: aboutSlice,
    hostel: hostelSlice,
    gallery: gallerySlice,
    info: infoSlice,
    partners: partnersSlice,
    rooms: roomsSliderSlice,
    hoveredImage: imageWithHoverSlice
})

export const store = configureStore({
    reducer: {main: rootReducer}
})
