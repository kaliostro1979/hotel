import React from 'react';
import StyledLink from "../UI/StyledLink";

const RoomDetails = ({activeRoomMeta}) => {

    return (
        <div className={"RoomDetails"}>
            <div className={"RoomDetailsDescription"}>
                <p>{activeRoomMeta.meta && activeRoomMeta.meta.description && activeRoomMeta.meta.description.text}</p>
            </div>
            <StyledLink text={"Booking"} dark={true} url={activeRoomMeta.meta && activeRoomMeta.meta.description && activeRoomMeta.meta.description.url}/>
        </div>
    );
};

export default RoomDetails;
