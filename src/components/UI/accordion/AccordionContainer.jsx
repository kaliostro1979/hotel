import React from 'react';
import AccordionItem from "./AccordionItem";
import { ACCORDION_ITEMS } from "../../../constants/accordion.constants";

const AccordionContainer = ({title, text}) => {
    return (
        <div className={"AccordionContainer"}>
            <div className={"AccordionContainerMeta"}>
                <h2 className={"AccordionTitle"}>{title}</h2>
                <p>{text}</p>
            </div>
          {
            ACCORDION_ITEMS.map(item=>{
              return  <AccordionItem text={item.content} title={item.title} key={item.id}/>
            })
          }
        </div>
    );
};

export default AccordionContainer;
