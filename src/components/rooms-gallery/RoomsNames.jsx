import React, {useContext} from 'react';
import { useDispatch } from "react-redux";
import {MainContext} from "../../context/MainContext";
import {getActiveRoomMeta} from "../../redux/slices/rooms-slider.slice";

const RoomsNames = ({data, index}) => {
    const {activeRoomIndex, setActiveRoomIndex} = useContext(MainContext)
    const dispatch = useDispatch()

    const handleSlideClick = (id, index)=>{
        dispatch(getActiveRoomMeta(id))
        setActiveRoomIndex((index))
    }

    return (
        <>
            <div
                onClick={()=>handleSlideClick(data.id, index)}
                className={index === activeRoomIndex ? "RoomsNamesItem ActiveRoom" : "RoomsNamesItem"}
            >
                <p>{data.room_name}</p>
            </div>
        </>
    );
};

export default RoomsNames;
