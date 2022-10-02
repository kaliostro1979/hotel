import React from 'react';
import StyledLink from "../UI/StyledLink";
import {CAREERS} from "../../mock_data/careers.data";
import Background from "../../assets/images/careers-bgr.png"

const Careers = () => {
    const data = CAREERS
    return (
        <>
            <div className={"CareersContainer Section"} style={{backgroundImage: `url("${Background}")`}}>
                <div className={"CareersContent"}>
                    <h2 className={"CareersContentTitle"}>{data.title}</h2>
                    <p className={"CareersContentText"}>{data.text}</p>
                    <br/>
                    <StyledLink url={data.url} text={data.button} dark={true}/>
                </div>
            </div>
            <br/>
        </>
    );
};

export default Careers;
