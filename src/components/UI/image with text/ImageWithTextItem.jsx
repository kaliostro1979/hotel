import React from 'react';
import {Link} from "react-router-dom";

const ImageWithTextItem = ({content}) => {
    return (
        <div className={"ImageWithTextItemWrapper"}>
            <div className={"ImageWithTextElement ImageWithTextMeta"}>
                <h2 className={"ImageWithTextTitle"}>{content.title}</h2>
                <p>{content.text}</p>
                <Link to={content.url} className={"ImageWithTextUrl"}>read more</Link>
            </div>
            <div className={"ImageWithTextElement ImageWithTextImage"}>
                <img src={content.image} alt={content.title}/>
            </div>
        </div>
    );
};

export default ImageWithTextItem;