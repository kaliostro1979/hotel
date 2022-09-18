import React from 'react';
import {useTranslation} from "react-i18next";

const Booking = () => {
    const {t} = useTranslation()

    return (
        <div>
            <h1>{t("title.booking")}</h1>
        </div>
    );
};

export default Booking;
