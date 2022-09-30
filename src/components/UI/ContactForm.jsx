import React from 'react';
import { useForm } from "react-hook-form";
import Error from "./elements/Error";
import RightArrowIcon from "../../icons/RightArrowIcon";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log("Data", data);

  const isValidEmail = email =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

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
    <div className={"ContactFormContainer"}>
      <form onSubmit={handleSubmit(onSubmit)} className={"ContactForm"}>
        <div className={"ContactFormRow"}>
          <div className={"ContactFormGroup"}>
            <input
              {...register("name", { required: true })}
              className={"ContactFormField"}
              placeholder={"Name*"}
            />
            {errors.email && <Error text={"Name is required"}/>}
          </div>
          <div className={"ContactFormGroup"}>
            <input
              {...register("email", { required: true, validate: handleEmailValidation })}
              className={"ContactFormField"}
              placeholder={"Email Address*"}
            />
            {errors.email && <Error text={"Email is required"}/>}
          </div>
        </div>
        <div className={"ContactFormGroup"}>
          <input
              {...register("email", { required: true })}
              className={"ContactFormField"}
              placeholder={"Message*"}
          />
          {errors.message && <Error text={"Message is required"}/>}
        </div>
        <button type="submit" className={"ContactFormButton"}>
          Send
          <RightArrowIcon/>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
