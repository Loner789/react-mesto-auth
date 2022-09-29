// IMPORTS:
import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import useForm from "../hooks/useForm";
import { omit } from "lodash";

// EDIT-AVATAR-POPUP COMPONENT:
function EditAvatarPopup({ isLoading, isOpen, onClose, onUpdateAvatar }) {
  // Variables
  // const avatarRef = useRef(null);
  const { values, errors, handleChange, setValues, setErrors } = useForm({});

  // Side-effects
  useEffect(() => {
    // avatarRef.current.value = null;
    setValues({ avatar: "" });
  }, [isOpen]);

  useEffect(() => {
    let newObj = omit(errors, "avatar");

    setErrors(newObj);
  }, [onClose]);

  // Functions
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      // avatar: avatarRef.current.value,
      avatar: values.avatar,
    });
  }

  return (
    <PopupWithForm
      name="edit-avatar-popup"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText={isLoading ? "Сохранение..." : "Сохранить"}
      isValid={!errors.avatar && values.avatar}
    >
      <label className="popup__container-field">
        <input
          type="url"
          className="popup__container-input"
          name="avatar"
          id="avatar-link"
          placeholder="Ссылка на картинку профиля"
          onChange={handleChange}
          value={values.avatar || ""}
          // ref={avatarRef}
        />
        {errors.avatar && (
          <span className="avatar-link-error popup__container-input-error">
            {errors.avatar}
          </span>
        )}
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
