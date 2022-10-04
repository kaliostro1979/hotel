import React, { useEffect, useRef, useState } from 'react';
import PlayIcon from "../../icons/PlayIcon";

const MediaGalleryItem = ({data}) => {
    const videoRef = useRef()
    const videoIconRef = useRef()
    const [isPlay, setIsPlay] = useState(false)

    useEffect(()=>{
        if (videoRef.current){
            if (isPlay){
                videoRef.current.play()
            }else {
                videoRef.current.pause()
            }
        }
    }, [isPlay])

    const handlePlayVideo = ()=>{
        setIsPlay(!isPlay)
    }

    return (
        <div className={"MediaGalleryItem"} onClick={handlePlayVideo}>
            {
                data.type === "image" ?
                    <img src={data.src} alt={data.name} className={"MediaItemInner"} loading={"lazy"}/> :
                    <div className={"MediaItemVideoWrapper"}>
                        <video className={"MediaItemInner"} ref={videoRef} muted={true}>
                            <source src={data.src} type="video/mp4" />
                        </video>
                        <div
                            className={"MediaItemVideoIcon"}
                            ref={videoIconRef}
                            style={{opacity: isPlay ? 0 : 1}}
                        >
                            <PlayIcon/>
                        </div>
                    </div>
            }
        </div>
    );
};

export default MediaGalleryItem;