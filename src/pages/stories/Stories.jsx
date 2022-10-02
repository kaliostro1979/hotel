import React, { useEffect } from 'react';
import HeroBanner from "../../components/hero-banner/HeroBanner";
import {usePageContent} from "../../hooks/usePageContent";
import { useDispatch, useSelector } from "react-redux";
import {getCategoriesAction, getStoriesByCategoryAction} from "../../redux/actions/storiesActions";
import ImageWithText from "../../components/UI/image with text/ImageWithText";
import CategoriesList from "./CategoriesList";
import {INFO_DATA_LIST} from "../../mock_data/hotel.info.data";
import SlideList from "../../components/page-list/SlideList";

const Stories = () => {
    const page_content = usePageContent("stories")
    const categories = useSelector(state => state.main.stories.categories)
    const stories = useSelector(state => state.main.stories.stories)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCategoriesAction())
    }, [dispatch])

    useEffect(()=>{
        if (categories[0]) {
            dispatch(getStoriesByCategoryAction(categories[0]))
        }
    }, [dispatch, categories])

    return (
        <>
            <HeroBanner page_content={page_content && page_content} />
            <CategoriesList categories={categories}/>
            <div>
                {
                    stories && stories.map((story)=>{
                        return <ImageWithText data={story} key={story.id}/>
                    })
                }
            </div>
            <SlideList sectionClass={"List SectionList"} data={INFO_DATA_LIST}/>
        </>
    );
};

export default Stories;
