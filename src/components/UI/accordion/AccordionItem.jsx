import React from 'react';
import PlusIcon from "../../../icons/PlusIcon";
import MinusIcon from "../../../icons/MinusIcon";

const AccordionItem = ({title, text, index, callBack, active}) => {

    return (
        <div className={!active ? "AccordionItem" : "AccordionItem Open"}>
            <div className={"AccordionItemHeader"} onClick={() => callBack(index)}>
                <h4 className={"AccordionItemHeaderTitle"}>{title}</h4>
                <div className={"AccordionItemHeaderIcon"}>
                    {
                        active ? <MinusIcon/> : <PlusIcon/>
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
