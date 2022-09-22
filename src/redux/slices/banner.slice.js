import {createSlice} from "@reduxjs/toolkit";
import {BANNERS} from "../../constants/hero.banner.constants";

const BannerSlice = createSlice({
    name: "banner",
    initialState: {
        bannerContent: null
    },
    reducers: {
        getPageBannerContent(state, action){
            state.bannerContent = BANNERS.pages[action.payload]
        }
    }
})

export default BannerSlice.reducer
export const {getPageBannerContent} = BannerSlice.actions