//IMPORTS:
import React from "react";
import Popup from "./Popup";

// COMMON PART FOR ALL POPUPS WITH FORM:
function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  buttonText,
  onSubmit,
}) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <form
        action="#"
        className="popup__container"
        name={`${name}-form`}
        onSubmit={onSubmit}
      >
        <h2 className="popup__container-title">{title}</h2>
        {children}
        <button type="submit" className="popup__container-submit">
          {buttonText}
        </button>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
