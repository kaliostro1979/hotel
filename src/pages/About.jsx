import React from 'react';
import {useTranslation, withTranslation} from 'react-i18next';


const About = () => {
    const {t}  = useTranslation()

    return (
        <div>
            <h1>{t("title.about")}</h1>
        </div>
    );
};

export default withTranslation()(About);
