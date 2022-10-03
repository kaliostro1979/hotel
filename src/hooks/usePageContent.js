import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBannerData} from "../redux/slices/banner.slice";

export const usePageContent = (pageName) => {
    const page_content = useSelector(state => state.main.banner.bannerContent.content)
    const dispatch = useDispatch()

    useEffect(() => {
        if (pageName){
            dispatch(getBannerData(pageName))
        }
    }, [dispatch, pageName])

    return page_content
}
