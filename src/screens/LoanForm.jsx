import React from "react";

export default function LoanForm({ heading }) {
  return (
    <div className="main">
      <div className="main__header" style={{ height: "8%" }}>
        <div className="main__header__top">
          <div className="main__header__top__heading">{heading}</div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              style={{ background: 'linear-gradiant("#242424","#f6f6f6")' }}
            >
              Bulk Add
            </button>
            <button className="main__header__top__buttons__button">
              Add New
            </button>
          </div>
        </div>
      </div>
      <div
        className="main__content"
        style={{
          height: "92%",
        }}
      >
        <div className="main__content__form"></div>
      </div>
    </div>
  );
}
