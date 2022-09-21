import React from 'react';
import Image from "../UI/Image";
import AccordionContainer from "../UI/accordion/AccordionContainer";

const ImageWithAccordion = () => {
    return (
        <div className={"Container"}>
            <div className={"ImageWithAccordion Section"}>
                <Image
                    image={"https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
                    alt={"hotel"}
                />
                <AccordionContainer title={"FAQ"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"}/>
            </div>
        </div>
    );
};

export default ImageWithAccordion;