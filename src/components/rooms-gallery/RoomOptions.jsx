import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getActiveRoomOptions, getRoomsName } from "../../redux/slices/rooms.slice";

const RoomOptions = ({rooms_names}) => {
    const rooms_options = useSelector(state => state.main.rooms_gallery.active_room_options)
    const dispatch = useDispatch()

    useEffect(() => {
        if (rooms_names.length) {
            dispatch(getActiveRoomOptions(rooms_names[0].id))
        }
    }, [ rooms_names, dispatch ])

    return (
        <div className={"RoomOptions"}>
            {
                rooms_options.options && rooms_options.options.map(option=>{
                    return (
                        <div className={"RoomOptionsItem"} key={option.id}>
                            <div className={"RoomOptionsItemIcon"}>
                                <svg className="RoomOptionIcon" viewBox="0 0 26 25">
                                    <use xlinkHref={`#${option.icon}`} />
                                </svg>
                            </div>
                            <p className={"RoomOptionsItemName"}>{option.name}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default RoomOptions;
