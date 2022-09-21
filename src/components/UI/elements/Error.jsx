import React from 'react';

const Error = ({text}) => {
  return (
    <div className={"FormError"}>
      <span>{text}</span>
    </div>
  );
};

export default Error;