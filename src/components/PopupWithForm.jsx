//IMPORTS:
import React from "react";

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
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
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
        <button
          type="button"
          className="popup__container-discard"
          // id="profile-form-reset-button"
          aria-label="Закрыть окно."
          onClick={onClose}
        ></button>
      </form>
    </div>
  );
}

export default PopupWithForm;
