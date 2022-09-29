import React from 'react';
import {IMAGE_WITH_TEXT} from "../../../mock_data/image_with_text.data";
import ImageWithTextItem from "./ImageWithTextItem";

const ImageWithText = () => {
    return (
        <div className={"ImageWithTextContainer"}>
            {
                IMAGE_WITH_TEXT.map(item=>{
                    return <ImageWithTextItem content={item} key={item.id}/>
                })
            }
        </div>
    );
};

export default ImageWithText;
