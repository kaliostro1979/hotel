import React from 'react';
import StyledLink from "../UI/StyledLink";


const PageListItem = ({text, callBack, activeIndex, image, content, left, index, icon}) => {

    const styles = {
        backgroundImage: `linear-gradient(265deg, rgba(40,40,40,0.37298669467787116) 0%, rgba(255,255,255,0) 0%, rgba(40,40,40,0.7399334733893557) 83%), url(${image})`,
        transform: `translateX(-${left}px)`
    }

    return (
        <li className={
            activeIndex === index ? "ListItem Active" : "ListItem"}
            onClick={()=>callBack(index)}
            style={styles}
        >
            <div className={"ListItemTitleWrapper"}>
                <div className={"ListItemTitle"}>{text}</div>
            </div>
            <div className={"ListItemContentWrapper"}>
                <p className={"ListItemContent"}>{content}</p>
                <StyledLink text={"Booking"} url={"#"}/>
            </div>
            <div className="PageListItemIconWrapper">
                <svg className="PageListItemIcon" viewBox="0 0 26 25">
                    <use xlinkHref={`#${icon}`} />
                </svg>
            </div>
        </li>
    );
};

export default PageListItem;
