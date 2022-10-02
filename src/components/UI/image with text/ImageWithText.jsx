import React from 'react';
import ImageWithTextItem from "./ImageWithTextItem";

const ImageWithText = ({data}) => {

    return (
        <ImageWithTextItem content={data} key={data.id}/>
    );
};

export default ImageWithText;
