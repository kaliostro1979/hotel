import React from 'react';

const ClockIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
        >
            <path
                fill="#282828"
                fillRule="evenodd"
                d="M8 16A8 8 0 108 0a8 8 0 000 16z"
                clipRule="evenodd"
            ></path>
            <path stroke="#F9F9F9" d="M8 2.908V8l2.91 2.91"></path>
        </svg>
    );
};

export default ClockIcon;
