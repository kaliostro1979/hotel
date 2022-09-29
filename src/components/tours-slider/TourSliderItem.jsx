import React from 'react';
import MapIcon from "../../icons/MapIcon";
import ClockIcon from "../../icons/ClockIcon";
import PeopleIcon from "../../icons/PeopleIcon";
import ChevronRight from "../../icons/ChevronRight";
import Label from "../UI/Label";

const TourSliderItem = ({data}) => {
    const details = data.details

    return (
        <div className={"HotToursSliderItemInner"}>
            {
                <Label text={"sale"}/>
            }
            <div className={"HotToursSliderItemImage"}>
                <img src={data.src} alt={data.name}/>
                <div className={"TourPrice"}>
                    {
                        data.sale_price ? <p><span className={"TourPriceOld"}>{data.price} amd</span> {data.sale_price} amd</p> : <p>{data.price} amd</p>
                    }
                </div>
            </div>
            {
                details ?
                    <div className={"HotToursSliderItemFooter"}>
                        <small className={"HotToursSliderItemDetailsType"}>{details.type}</small>
                        <p className={"HotToursSliderItemDetailsLocation"}>{details.location}</p>
                        <ul className={"HotToursSliderItemDetailsList"}>
                            <li>
                                <div className={"HotToursSliderItemDetailsListItem"}>
                                    <MapIcon/>
                                    <span>{details.distance}</span>
                                </div>
                            </li>
                            <li>
                                <div className={"HotToursSliderItemDetailsListItem"}>
                                    <ClockIcon/>
                                    <span>{details.duration}</span>
                                </div>
                            </li>
                            <li>
                                <div className={"HotToursSliderItemDetailsListItem"}>
                                    <PeopleIcon/>
                                    <span>{details.people}</span>
                                </div>
                            </li>
                        </ul>
                        <div className={"HotToursSliderItemFooterIcon"}>
                            <ChevronRight/>
                        </div>
                    </div>
                    : null
            }
        </div>
    );
};

export default TourSliderItem;
