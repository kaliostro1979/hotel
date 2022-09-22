import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPageBannerContent} from "../redux/slices/banner.slice";

export const usePageContent = (pageName) => {
    const page_content = useSelector(state => state.main.banner.bannerContent)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPageBannerContent(pageName))
    }, [dispatch, pageName])

    return page_content
}
