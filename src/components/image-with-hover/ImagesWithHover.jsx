import React, { useState } from 'react';

const ImagesWithHover = ({section}) => {
    const [activeIndex, setActiveIndex] = useState(1)

    const handleMouseEnter = (index)=>{
        setActiveIndex(index)
    }

    return (
        <div className={"ImagesWithHover Section"}>
            <div className={"ImagesWithHoverTitle"}>
                <h3>{section.data.title}</h3>
            </div>
            <div className={"ImagesWithHoverTitleImagesContainer"}>
                {
                    section.data.images.map((image, index)=>{
                        return (
                            <div
                                key={image.name}
                                onMouseEnter={()=>handleMouseEnter(index)}
                                className={index === activeIndex ? "ImagesWithHoverTitleImage Active" : "ImagesWithHoverTitleImage"}
                            >
                                <img src={image.src} alt={image.name}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className={"ImagesWithHoverText"}>
                <p>{section.data.text}</p>
            </div>
        </div>
    );
};

export default ImagesWithHover;