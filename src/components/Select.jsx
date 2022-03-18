import React from "react";
import ReactSelect from "react-select";

export default function Select({ options, label, error, isMulti }) {
  return (
    <div className="popup__form__input">
      <div className="popup__form__input__label">{label}</div>
      <ReactSelect
        options={options}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#f6f6f6",
            primary: "#ed263d",
            primary50: "f6f6f6",
          },
        })}
        isMulti={isMulti}
        placeholder={"Enter " + label}
      />
      <div className="popup__form__input__error">{error}</div>
    </div>
  );
}
