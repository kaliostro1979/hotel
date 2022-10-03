import React, {useState} from 'react';

const ActiveRoomImages = ({activeRoomMeta}) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleActiveImage = (index)=>{
        setActiveIndex(index)
    }

    return (
        <div className={"ActiveRoomImagesContainer"}>
            {
                activeRoomMeta.meta && activeRoomMeta.meta.images.map((image, index) => {
                    return (
                        <div
                            className={activeIndex === index ? "ActiveRoomImagesItem Active" : "ActiveRoomImagesItem"}
                            onClick={()=>handleActiveImage(index)}
                            key={image.id}
                        >
                            <img src={image.src} alt=""/>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default ActiveRoomImages;
