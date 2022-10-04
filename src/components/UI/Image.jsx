import React from 'react';

const Image = ({image, alt}) => {
    return (
        <div className={"Image"}>
            <img src={image} alt={alt} loading={"lazy"}/>
        </div>
    );
};

export default Image;