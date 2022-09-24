// IMPORTS:
import React from "react";

// INFO-TOOLTIP COMPONENT:
function InfoTooltip({ isOpen, imgPath, title, onClose }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_tooltip">
        <div
          className="popup__container-img"
          style={{ backgroundImage: `url(${imgPath})` }}
        ></div>
        <h2 className="popup__container-title popup__container-title_place_tooltip">
          {title}
        </h2>
        <button
          type="button"
          className="popup__container-discard"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default InfoTooltip;
