import React from 'react';
import {Link} from "react-router-dom";
import RightArrowIcon from "../../../icons/RightArrowIcon";

const ImageWithTextItem = ({content}) => {
    return (
        <div className={"ImageWithTextItemWrapper"}>
            <div className={"ImageWithTextElement ImageWithTextMeta"}>
                <h2 className={"ImageWithTextTitle"}>{content.title}</h2>
                <p>{content.text}</p>
                <Link to={content.url} className={"ImageWithTextUrl"}>
                    read more
                    <RightArrowIcon/>
                </Link>
            </div>
            <div className={"ImageWithTextElement ImageWithTextImage"}>
                <img src={content.image} alt={content.title}/>
                <div className={"ImageWithTextElementIcon"}>
                    <svg className="PageListItemIcon">
                        <use xlinkHref={`#${content.icon}`} />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ImageWithTextItem;
