import React, { useRef, useState } from 'react';
import PlayIcon from "../../icons/PlayIcon";

const MediaGalleryItem = ({data}) => {
    const videoRef = useRef()
    const videoIconRef = useRef()
    const [isPlay, setIsPlay] = useState(false)
    const [showIcon, setShowIcon] = useState(true)

    const handlePlayVideo = ()=>{
        setIsPlay(!isPlay)
        if (isPlay){
            videoRef.current.play()
            setShowIcon(false)
        }else {
            videoRef.current.pause()
            setShowIcon(true)
        }
    }

    return (
        <div className={"MediaGalleryItem"} onClick={handlePlayVideo}>
            {
                data.type === "image" ?
                    <img src={data.src} alt={data.name} className={"MediaItemInner"}/> :
                    <div
                        className={"MediaItemVideoWrapper"}
                    >
                        <video className={"MediaItemInner"} ref={videoRef} muted={true}>
                            <source src={data.src} type="video/mp4" />
                        </video>
                        <div
                            className={"MediaItemVideoIcon"}
                            ref={videoIconRef}
                            style={{opacity: showIcon ? 1 : 0}}
                        >
                            <PlayIcon/>
                        </div>
                    </div>
            }
        </div>
    );
};

export default MediaGalleryItem;