import React from 'react';
import {useTranslation} from "react-i18next";

const Stories = () => {
    const {t} = useTranslation()

    return (
        <div className={"Container"}>
            <h1>{t("title.stories")}</h1>
        </div>
    );
};

export default Stories;
