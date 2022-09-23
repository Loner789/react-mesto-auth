// IMPORTS:
import React, {useEffect, useState} from "react";
import PopupWithForm from "./PopupWithForm";

// ADD-PLACE-POPUP COMPONENT:
function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  // State-variables
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  // Side-effects
  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  // Functions
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  return (
    <PopupWithForm
      name="add-card-popup"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <label className="popup__container-field">
        <input
          type="text"
          className="popup__container-input"
          name="name"
          id="card-name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className="card-name-error popup__container-input-error"></span>
      </label>
      <label className="popup__container-field">
        <input
          type="url"
          className="popup__container-input"
          name="link"
          id="card-link"
          placeholder="Ссылка на картинку"
          required
          value={link}
          onChange={handleLinkChange}
        />
        <span className="card-link-error popup__container-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
