import React, { useState } from 'react';
import AccordionItem from "./AccordionItem";
import Preloader from "../Preloader";
import {useSelector} from "react-redux";

const AccordionContainer = ({title, text, data}) => {
    const isLoading = useSelector(state => state.main.tours.isLoading)
    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    };

    return (
        <div className={"AccordionContainer"}>
            <div className={"AccordionContainerMeta"}>
                <h2 className={"AccordionTitle"}>{title}</h2>
                <p>{text}</p>
            </div>
          {
              isLoading ? <Preloader/> : data && data.map((item, index)=>{
              return  <AccordionItem
                  text={item.content}
                  title={item.title}
                  key={item.id}
                  index={index} callBack={handleToggle}
                  active={clicked === index}
              />
            })
          }
        </div>
    );
};

export default AccordionContainer;
