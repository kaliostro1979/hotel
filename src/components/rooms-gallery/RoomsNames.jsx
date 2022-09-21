import React from 'react';
import { getActiveRoomImages } from "../../redux/slices/rooms.gallery.slice";
import { useDispatch } from "react-redux";

const RoomsNames = ({data}) => {

    const dispatch = useDispatch()

    return (
        <div onClick={()=>dispatch(getActiveRoomImages(data.id))}>
            <p>{data.room_name}</p>
        </div>
    );
};

export default RoomsNames;