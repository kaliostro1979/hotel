import React from 'react';
import Image from "../UI/Image";
import AccordionContainer from "../UI/accordion/AccordionContainer";

const ImageWithAccordion = ({data}) => {

    return (
        <div className={"Container"}>
            <div className={"ImageWithAccordion Section"}>
                <Image
                    image={data.image}
                    alt={"hotel"}
                />
                <AccordionContainer title={data.title} text={data.text} data={data.data}/>
            </div>
        </div>
    );
};

export default ImageWithAccordion;
