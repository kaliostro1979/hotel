import React from 'react';

const SubscribeModal = ({data}) => {
    return (
        <div className={"SubscribeModal"}>
            <h1 className={"SubscribeModalTitle"}>Subscribe success</h1>
            <p>{data.email}</p>
        </div>
    );
};

export default SubscribeModal;