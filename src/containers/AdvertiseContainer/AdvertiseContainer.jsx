import React, { useState } from "react";
import { sendEmail } from "./../../shared/utility";
import Advertise from "../../views/Advertise/Advertise";

const AdvertiseContainer = () => {
  const [validated, setValidated] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

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
      sendEmail(event, setDisableBtn);
    }

    setValidated(true);
  };
  return (
    <Advertise
      validated={validated}
      handleSubmit={handleSubmit}
      disabledBtn={disableBtn}
    />
  );
};

export default AdvertiseContainer;
