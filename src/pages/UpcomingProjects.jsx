import React from 'react';
import {useTranslation} from "react-i18next";

const UpcomingProjects = () => {

    const {t} = useTranslation()

    return (
        <div className={"Container"}>
            <h1>{t("title.upcoming projects")}</h1>
        </div>
    );
};

export default UpcomingProjects;
