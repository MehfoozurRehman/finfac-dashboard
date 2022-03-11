import React, { useState } from "react";
import { Plus, X } from "react-feather";
import UploadImage from "./UploadImage";
import Select from "react-select";

export default function BlogsPopup({ onClose, onSubmit, isEdit }) {
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
          {isEdit ? "Edit" : "Add"} Blog
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Title</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Title"
            />
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Author</div>
            <input
              type="text"
              className="popup__form__input__field"
              placeholder="Enter Author"
            />
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Date Created</div>
            <input
              type="date"
              className="popup__form__input__field"
              placeholder="Enter Date Created"
            />
          </div>
        </div>
        <div className="popup__form__row">
          <div className="popup__form__input">
            <div className="popup__form__input__label">Category</div>
            <Select
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
              theme={(theme) => ({
                ...theme,

                colors: {
                  ...theme.colors,
                  primary25: "#f6f6f6",
                  primary: "#ed263d",
                  primary50: "f6f6f6",
                },
              })}
              isMulti
            />
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
