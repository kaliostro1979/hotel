import React from 'react';

const SubscribeModal = ({data}) => {
    return (
        <div className={"SubscribeModal"}>
            <h1 style={{color: "#ffffff"}}>Subscribe success</h1>
            <p>{data.email}</p>
        </div>
    );
};

export default SubscribeModal;