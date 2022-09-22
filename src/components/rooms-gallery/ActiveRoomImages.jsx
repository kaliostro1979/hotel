import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getActiveRoomImages, getRoomsName} from "../../redux/slices/rooms.slice";

const ActiveRoomImages = ({rooms_names}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const active_rooms_images = useSelector(state => state.main.rooms_gallery.active_room_images)
    const dispatch = useDispatch()

    useEffect(() => {
        if (rooms_names.length) {
            dispatch(getActiveRoomImages(rooms_names[0].id))
        }
    }, [ rooms_names, dispatch ])

    const handleActiveImage = (index)=>{
        setActiveIndex(index)
    }

    return (
        <div className={"ActiveRoomImagesContainer"}>
            {
                active_rooms_images.images && active_rooms_images.images.map((image, index) => {
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
