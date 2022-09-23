// IMPORTS:
import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

// EDIT-AVATAR-POPUP COMPONENT:
function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  // Ref-variables
  const avatarRef = useRef(null);

  // Side-effects
  useEffect(() => {
    avatarRef.current.value = null;
  }, [isOpen]);

  // Functions
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="edit-avatar-popup"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
    >
      <label className="popup__container-field">
        <input
          type="url"
          className="popup__container-input"
          name="avatar"
          id="avatar-link"
          placeholder="Ссылка на картинку профиля"
          required
          ref={avatarRef}
        />
        <span className="avatar-link-error popup__container-input-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
