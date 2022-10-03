import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBannerData} from "../redux/slices/banner.slice";
import {useLocation} from "react-router-dom";

export const usePageContent = () => {
    const page_content = useSelector(state => state.main.banner.bannerContent.content)
    const dispatch = useDispatch()

    const location = useLocation()
    const currentLocation = location.pathname.split("/")[2]


    useEffect(() => {
        if (currentLocation){
            dispatch(getBannerData(currentLocation))
        }
    }, [dispatch, currentLocation])

    return page_content
}
