import React from "react";
import { X } from "react-feather";
import UploadImage from "./UploadImage";
import Toggle from "react-toggle";

export default function KiborsPopup({ onClose, onSubmit, isEdit }) {
  return (
    <div className="popup">
      <form className="popup__form">
        <button
          className="popup__form__close"
          type="button"
          onClick={() => onClose(false)}
        >
          <X size={20} color="currentColor" strokeWidth={4} />
        </button>
        <div className="popup__form__heading">
          {isEdit ? "Edit" : "Add"} Kibor
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Ref</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Ref"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Name</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Name"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Is Featured</div>
            <label className="main__content__form__toggle">
              <Toggle defaultChecked={false} icons={false} />
            </label>
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Rate</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Rate"
            />
            <div className="popup__form__input__error"></div>
          </div>
        </div>
        <div className="popup__form__row">
          <UploadImage label="Image" />
        </div>
        <button onClick={() => onSubmit(false)} className="popup__form__button">
          {isEdit ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}
