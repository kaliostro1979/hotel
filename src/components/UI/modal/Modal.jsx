import React, {useContext, useEffect} from 'react';
import ReactDom from "react-dom";
import {MainContext} from "../../../context/MainContext";
import CloseIcon from "../../../icons/CloseIcon";

const Modal = ({Component, width, data}) => {
    const { isShow, setIsShow } = useContext(MainContext)

    const closeModalHandler = ()=>{
        setIsShow(false)
    }

    if (!isShow || !Component) return null
    return ReactDom.createPortal(<>
        <div className={"Overlay"}></div>
        <div className={isShow ? "Modal Show" : "Modal"} style={{width: width}}>
            <div className={"ModalInner"}>
                <Component data={data}/>
                <div className={"ModalCloseButton"} onClick={closeModalHandler}>
                    <CloseIcon/>
                </div>
            </div>
        </div>
    </>, document.getElementById("portal"))
};

export default Modal;
