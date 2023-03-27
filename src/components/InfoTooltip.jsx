import React from "react";
import { useRef, useEffect } from "react";

function InfoTooltip(props) {
  return (
    <div
      className={`popup popup-${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={props.onClick}
    >
      <div className={`popup__container popup-${props.name}__container`}>
        <button
          className="popup__close"
          type="button"
          onClick={props.onClose}
        ></button>
        {/* <img src="${props.src}" /> */}
        <img src="../img/popup-no.svg" />
        <h2 className="popup__title">{`${props.title}`}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
