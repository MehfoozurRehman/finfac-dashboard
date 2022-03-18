import React from "react";

export default function Input({ label, placeholder, error }) {
  return (
    <div className="popup__form__input">
      <div className="popup__form__input__label">
        {label ? label : placeholder}
      </div>
      <input
        type="text"
        className="popup__form__input__field"
        placeholder={"Enter " + placeholder}
      />
      <div className="popup__form__input__error">{error}</div>
    </div>
  );
}
