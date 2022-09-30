import React, { useContext, useState } from 'react';
import SubscribeBackground from "../../assets/images/subscribe-bgr.png"
import { useForm } from "react-hook-form";
import RightArrowIcon from "../../icons/RightArrowIcon";
import Modal from "../UI/modal/Modal";
import { MainContext } from "../../context/MainContext";
import SubscribeModal from "./SubscribeModal";

const Subscribe = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {setIsShow} = useContext(MainContext)
    const [data, setData] = useState("")
    const isValidEmail = email =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
        );
    const onSubmit = data => {
        if (data){
            setIsShow(true)
            setData(data)
            console.log("Data", data)
        }
    };

    const handleEmailValidation = email => {
        const isValid = isValidEmail(email);


        const validityChanged =
            (errors.email && isValid) || (!errors.email && !isValid);
        if (validityChanged) {
            console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
        }

        return isValid;
    };

    return (
        <>
            <Modal Component={SubscribeModal} width={"600px"} data={data}/>
            <div className={"Subscribe Section"} style={{backgroundImage: `url(${SubscribeBackground})`}}>
                <div className={"SubscribeFormWrapper"}>
                    <h3 className={"SubscribeFormTitle"}>Subscribe to our newsletter to stay in touch with the latest.</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("email", { required: true, validate: handleEmailValidation })}
                            className={"SubscribeFormField"}
                            placeholder={"Email address..."}
                        />
                        <button type="submit" className={"SubscribeFormButton"}>
                            <RightArrowIcon/>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Subscribe;