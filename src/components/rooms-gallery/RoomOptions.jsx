import React from 'react';

const RoomOptions = ({activeRoomMeta}) => {

    return (
        <div className={"RoomOptions"}>
            {
                activeRoomMeta.meta && activeRoomMeta.meta.options && activeRoomMeta.meta.options.map(option=>{
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
