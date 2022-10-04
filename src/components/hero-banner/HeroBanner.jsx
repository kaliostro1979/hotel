import React from 'react';
import {useTranslation} from "react-i18next";
import SocialIcons from "../UI/SocialIcons";

const HeroBanner = ({page_content}) => {
    const {t} = useTranslation()
    if (!page_content) return null

    return (
        <div className={"HeroBanner"}>
            <div className={"HeroBannerImage"}>
                <img src={page_content.image} alt="" loading={"lazy"}/>
            </div>
            <div className={page_content.content ? "HeroBannerMeta" : "HeroBannerMeta WithoutText"}>
                <div className={"HeroBannerTitle"}>
                    <h1>{t(`title.${page_content.title.toLowerCase()}`)}</h1>
                </div>
                <div className={"HeroBannerContent"}>
                    {page_content.content}
                </div>
            </div>
            <div className={page_content.content ? "HeroBannerSocialIcons" : "HeroBannerSocialIcons WithoutText"}>
                <SocialIcons light={true}/>
            </div>
        </div>
    );
};

export default HeroBanner;
