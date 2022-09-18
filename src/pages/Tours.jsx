import React from 'react';
import {useTranslation} from "react-i18next";

const Tours = () => {
    const {t} = useTranslation()

    return (
        <div>
            <h1>{t("title.tours")}</h1>
        </div>
    );
};

export default Tours;
