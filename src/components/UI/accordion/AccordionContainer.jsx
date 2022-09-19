import React from 'react';
import AccordionItem from "./AccordionItem";
import { ACCORDION_ITEMS } from "../../../constants/accordion.constants";

const AccordionContainer = () => {
    return (
        <div>
          {
            ACCORDION_ITEMS.map(item=>{
              return  <AccordionItem text={item.content} title={item.title} key={item.id}/>
            })
          }
        </div>
    );
};

export default AccordionContainer;
