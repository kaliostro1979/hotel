import React, {useContext} from 'react';
import { getActiveRoomDescription, getActiveRoomImages, getActiveRoomOptions } from "../../redux/slices/rooms.slice";
import { useDispatch } from "react-redux";
import {MainContext} from "../../context/MainContext";

const RoomsNames = ({data, index}) => {
    const {activeRoomIndex, setActiveRoomIndex} = useContext(MainContext)
    const dispatch = useDispatch()

    const handleSlideClick = (id, index)=>{
        dispatch(getActiveRoomImages(id))
        dispatch(getActiveRoomOptions(id))
        dispatch(getActiveRoomDescription(id))
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
