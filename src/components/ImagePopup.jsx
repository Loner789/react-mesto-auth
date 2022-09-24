//IMPORTS:
import React from "react";

// IMAGE-POPUP COMPONENT:
function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_image-popup ${card ? "popup_opened" : ""}`}
    >
      <div className="popup__figure">
        <img
          src={card?.link}
          alt={card ? `Фото ${card.name}.` : ""}
          className="popup__image"
        />
        <p className="popup__image-caption">{card?.name}</p>
        <button
          type="button"
          className="popup__container-discard"
          id="image-popup-discard-button"
          aria-label="Закрыть окно."
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default ImagePopup;
