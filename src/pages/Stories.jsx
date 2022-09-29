import React from 'react';
import {useTranslation} from "react-i18next";
import HeroBanner from "../components/hero-banner/HeroBanner";
import {usePageContent} from "../hooks/usePageContent";

const Stories = () => {
    const {t} = useTranslation()
    const page_content = usePageContent("stories")

    return (
        <HeroBanner page_content={page_content && page_content} />
    );
};

export default Stories;
