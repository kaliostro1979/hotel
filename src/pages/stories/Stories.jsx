import React, {useEffect, useState} from 'react';
import HeroBanner from "../../components/hero-banner/HeroBanner";
import {usePageContent} from "../../hooks/usePageContent";
import { useDispatch, useSelector } from "react-redux";
import ImageWithText from "../../components/UI/image with text/ImageWithText";
import CategoriesList from "./CategoriesList";
import SlideList from "../../components/page-list/SlideList";
import {getCategoriesAction, getStoriesByCategoryAction} from "../../redux/slices/stories.slice";
import Preloader from "../../components/UI/Preloader";
import {useLocation} from "react-router-dom";
import {getInfoData} from "../../redux/slices/info.slice";

const Stories = () => {
    const location = useLocation()
    const currentLocation = location.pathname.split("/")[2]
    const page_content = usePageContent(currentLocation)

    const categories = useSelector(state => state.main.stories.categories)
    const stories = useSelector(state => state.main.stories.stories)
    const isLoading = useSelector(state => state.main.stories.isLoading)
    const error = useSelector(state => state.main.stories.error)
    const infoData = useSelector(state => state.main.info.data)

    const dispatch = useDispatch()

    const [activeCategory, setActiveCategory] = useState(categories && categories[0])

    useEffect(()=>{
        dispatch(getCategoriesAction())
        dispatch(getInfoData())
    }, [dispatch])

    useEffect(()=>{

        if (categories.length && categories[0]) {
            const initCategory = categories[0]
            setActiveCategory(initCategory)
            dispatch(getStoriesByCategoryAction(initCategory))
        }
    }, [dispatch, categories])

    return (
        <>
            <HeroBanner page_content={page_content && page_content} />
            <CategoriesList categories={categories} isLoading={isLoading} error={error} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
            <div>
                {
                    isLoading ? <Preloader/> : stories.data && stories.data.map((story)=>{
                        return <ImageWithText data={story} key={story.id}/>
                    })
                }
            </div>
            <SlideList sectionClass={"List SectionList"} data={infoData}/>
        </>
    );
};

export default Stories;
