import React from 'react';
import {useTranslation} from "react-i18next";

const Hostel = () => {

    const {t} = useTranslation()

    return (
        <div>
            <h1>{t("title.hostel")}</h1>
        </div>
    );
};

export default Hostel;
