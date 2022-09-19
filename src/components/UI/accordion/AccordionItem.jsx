import React, {useState} from 'react';
import PlusIcon from "../../../icons/PlusIcon";
import MinusIcon from "../../../icons/MinusIcon";

const AccordionItem = ({title, text}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={!isOpen ? "AccordionItem" : "AccordionItem Open"}>
            <div className={"AccordionItemHeader"} onClick={() => setIsOpen(!isOpen)}>
                <h4 className={"AccordionItemHeaderTitle"}>{title}</h4>
                <div className={"AccordionItemHeaderIcon"}>
                    {
                        isOpen ? <MinusIcon/> : <PlusIcon/>
                    }
                </div>
            </div>
            <div className={"AccordionItemBody"}>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default AccordionItem;
