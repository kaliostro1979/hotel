import React, {useCallback, useState} from 'react';
import PageListItem from "./PageListItem";
import {useTranslation} from "react-i18next";

const SlideList = ({sectionClass, data}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const {t} = useTranslation()

    const openItem = useCallback((activeId) => {
        setActiveIndex(activeId)
    }, [])

    return (
        <ul className={sectionClass}>
            {
                data.map((item, index)=>{
                    return <PageListItem
                        text={t(`home.${item.name.toLowerCase()}`)}
                        callBack={openItem}
                        activeIndex={activeIndex}
                        image={item.image}
                        key={item.id}
                        content={item.content}
                        index={index}
                        icon={item.icon}
                    />
                })
            }
        </ul>
    );
};

export default SlideList;
