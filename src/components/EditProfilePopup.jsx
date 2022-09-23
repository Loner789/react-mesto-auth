// IMPORTS:
import React, { useEffect, useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

// EDIT-PROFILE-POPUP COMPONENT:
function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  // State-variables
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  // Side-effects
  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  // Functions
  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile-popup"
      title="Редактировать профиль"
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
          id="profile-name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
          value={name || ""}
          onChange={handleNameChange}
        />
        <span className="profile-name-error popup__container-input-error"></span>
      </label>
      <label className="popup__container-field">
        <input
          type="text"
          className="popup__container-input"
          name="about"
          id="profile-job"
          placeholder="Профессия"
          minLength="2"
          maxLength="200"
          required
          value={description || ""}
          onChange={handleDescriptionChange}
        />
        <span className="profile-job-error popup__container-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
