import React, { useEffect } from 'react';
import StyledLink from "../UI/StyledLink";
import { useDispatch, useSelector } from "react-redux";
import { getActiveRoomDescription, getActiveRoomOptions, getRoomsName } from "../../redux/slices/rooms.slice";

const RoomDetails = ({rooms_names}) => {
    const room_description = useSelector(state => state.main.rooms_gallery.active_room_description)
    const dispatch = useDispatch()

    useEffect(() => {
        if (rooms_names.length) {
            dispatch(getActiveRoomDescription(rooms_names[0].id))
        }
    }, [ rooms_names, dispatch ])


    return (
        <div className={"RoomDetails"}>
            <div className={"RoomDetailsDescription"}>
                <p>{room_description.description && room_description.description.text}</p>
            </div>
            <StyledLink text={"Booking"} dark={true} url={room_description.description && room_description.description.url}/>
        </div>
    );
};

export default RoomDetails;