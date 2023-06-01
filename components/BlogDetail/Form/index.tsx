"use client";
import Image from "next/image";
import IconContent from "../../../data/Blogcontent/Icon";
import React, { FormEvent, useEffect, useState } from "react";
const Message = require("../../../data/Blogcontent/Content");

const initialFormData = {
  first: "",
  email: "",
  website: "",
};
interface ErrorMessage {
  first: string;
  email: string;
  website: string;

}
const errorMessage: ErrorMessage = {
  first: "",
  email: "",
  website: "",
};
function Form() {
  const [formData, setFormData] = useState(initialFormData);
  const [errorMessages, setErrorMessages] = useState(errorMessage);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (emailData : any) => {
    return emailData.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setErrorMessages(validate(formData));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessages(validate(formData));
  };

  const validate = (formValues: any) => {
    let error: ErrorMessage = {
      first: "",
      email: "",
      website: "",
    };
    if (!formValues.first) {
      error.first = "Firstname is required";
    } else {
      error.first = "";
    }
    
    if (!formValues.website) {
      error.website = "Website is required";
    } else {
      error.website = "";
    }
    
    if (!formValues.email) {
        error.email = "email is required";
    } else if( !validateEmail(formValues.email) ){
        error.email = "Please insert valid email is required";
    }else{
      error.email = "";
    }

    if( ( error.first == "") && ( error.email == "") && ( error.website == "") ){
        setSuccess(true)
    }
    return error;
  };

  return (
    <div className="contact-sec def-sty" >
        <div className="container text-center">
              <h2>{Message.FORM_TITLE}</h2>
              <p>After we have a plan in place, its time to roll up the sleeves and get to work. We will create a unique design/user experince and build it out around a number of platforms depending on the scope of the project. </p>
                  <div className="formSec">
                      { success?(
                          <>
                              <p>{Message.FORM_SUCESS_MESSAGE}</p>
                          </>
                      ) : (
                          <form
                          onSubmit={handleSubmit}
                          className="d-flex flex-wrap row"
                      >
                          <div className="form-Left col-md-6">
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={formData.first || ''}
                                type="text"
                                name="first"
                                id="first"
                                className="form-control"
                                placeholder="Name"
                            />
                            <span className="text-red-500">{errorMessages.first}</span>
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={formData.email || '' }
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Email"
                            />
                            <span className="text-red-500">{errorMessages.email}</span>
                            <input
                                type="text"
                                name="tel"
                                id="tel"
                                className="form-control"
                                placeholder="Phone (Optional)"
                            />
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={formData.website || ''}
                                type="text"
                                name="website"
                                id="website"
                                className="form-control"
                                placeholder="Website (If exists)"
                            />
                            <span className="text-red-500">{errorMessages.website}</span>
                          </div>
                          <div className="form-right col-md-6">
                            <textarea name="message" id="message" placeholder="Message" className="form-control"></textarea>
                            <div className="form-btn text-end">
                              <button className="btn">
                              {Message.FORM_SUBMIT_BTN}
                              </button>
                            </div>
                          </div>
                          </form>
                      ) }
                  </div>
        </div>
    </div>
  );
}

export default Form;