import React from "react";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";
import Toggle from "react-toggle";

export default function LifeInsurancesManageEntries({ heading }) {
  const navigate = useNavigate();
  const listOfEntries = [
    {
      name: "Ref",
      default: false,
    },
    {
      name: "Name",
      default: false,
    },
    {
      name: "is Featured",
      default: false,
    },
    {
      name: "Premium",
      default: true,
    },
    {
      name: "Room limit",
      default: false,
    },
    {
      name: "Accidental death",
      default: true,
    },
    {
      name: "Accidental disability",
      default: true,
    },
    {
      name: "Accidental hospitalization",
      default: false,
    },
    {
      name: "Coverage Amount",
      default: false,
    },
    {
      name: "Date of Birth",
      default: false,
    },
    {
      name: "Plan type",
      default: true,
    },
  ];
  return (
    <div className="main">
      <div className="main__header" style={{ height: "8%" }}>
        <div className="main__header__top">
          <div className="main__header__top__heading">
            <button
              className="main__header__top__heading__button"
              onClick={() => {
                navigate(-1);
              }}
            >
              <ArrowLeft size={20} color="currentColor" />
            </button>
            Manage Entries
          </div>
          <div className="main__header__top__buttons"></div>
        </div>
      </div>
      <div
        className="main__content"
        style={{
          height: "92%",
        }}
      >
        <div className="main__content__form">
          {listOfEntries.map((item, i) => (
            <div key={i} className="main__content__form__col">
              <label className="main__content__form__toggle">
                <span>{item.name}</span>
                <Toggle defaultChecked={item.default} icons={false} />
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
