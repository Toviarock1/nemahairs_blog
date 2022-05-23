import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Advertise from "../../views/Advertise/Advertise";

const AdvertiseContainer = () => {
  const [validated, setValidated] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyEmail: "",
    phoneNumber: "",
    message: "",
    country: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setDisableBtn(true);
    emailjs
      .sendForm(
        "contact_form",
        "template_j6f6jj9",
        e.target,
        "user_C7Rc87pDIIjtLoqaZy1uo"
      )
      .then(
        (result) => {
          setDisableBtn(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setDisableBtn(false);
        }
      );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisableBtn(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setDisableBtn(false);
    }

    if (validated) {
      event.preventDefault();
      sendEmail(event);
    }

    setValidated(true);
  };
  return (
    <Advertise
      validated={validated}
      handleSubmit={handleSubmit}
      contactForm={contactForm}
      setContactForm={setContactForm}
      disabledBtn={disableBtn}
    />
  );
};

export default AdvertiseContainer;
