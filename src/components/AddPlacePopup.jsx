// IMPORTS:
import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import useForm from "../hooks/useForm";
import { omit } from "lodash";

// ADD-PLACE-POPUP COMPONENT:
function AddPlacePopup({ isLoading, isOpen, onClose, onAddPlace }) {
  // Variables
  const { values, errors, handleChange, setValues, setErrors } = useForm({});

  // Side-effects
  useEffect(() => {
    setValues({ name: "", link: "" });
  }, [isOpen]);

  useEffect(() => {
    let newObj = omit(errors, "name", "link");

    setErrors(newObj);
  }, [onClose]);

  // Functions
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(values);
  }

  return (
    <PopupWithForm
      name="add-card-popup"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      isValid={!(errors.name || errors.link) && values.name && values.link}
    >
      <label className="popup__container-field">
        <input
          type="text"
          className="popup__container-input"
          name="name"
          id="card-name"
          placeholder="Название"
          value={values.name || ""}
          onChange={handleChange}
        />
        {errors.name && (
          <span className="card-name-error popup__container-input-error">
            {errors.name}
          </span>
        )}
      </label>
      <label className="popup__container-field">
        <input
          type="url"
          className="popup__container-input"
          name="link"
          id="card-link"
          placeholder="Ссылка на картинку"
          value={values.link || ""}
          onChange={handleChange}
        />
        {errors.link && (
          <span className="card-link-error popup__container-input-error">
            {errors.link}
          </span>
        )}
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
