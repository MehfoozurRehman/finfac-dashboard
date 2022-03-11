import React from "react";
import { Plus, X } from "react-feather";

function UploadImage() {
  return (
    <div className="popup__form__upload">
      <input type="file" />
      <div className="popup__form__upload__content">
        <Plus size={30} color="currentcolor" />
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="popup__form__upload__content__img"
        />
      </div>
    </div>
  );
}

export default function CategoryPopup({ onClose, onSubmit, isEdit }) {
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
          {isEdit ? "Edit" : "Add"} Category
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Name</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="popup__form__row">
          <UploadImage />
          <UploadImage />
        </div>
        <button onClick={() => onSubmit(false)} className="popup__form__button">
          {isEdit ? "Edit" : "Add"}
        </button>
      </form>
    </div>
  );
}
