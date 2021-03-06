import React from "react";
import { ArrowLeft } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";
import Toggle from "react-toggle";

export default function NationalSavingsManageEntries({ heading }) {
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
      name: "Image",
      default: false,
    },
    {
      name: "Is Featured",
      default: true,
    },
    {
      name: "Rate - %",
      default: false,
    },
    {
      name: "Time Period",
      default: true,
    },
    {
      name: "Profit Paid",
      default: true,
    },
    {
      name: "Lock in Period",
      default: false,
    },
    {
      name: "Early encashment",
      default: false,
    },
    {
      name: "Zakat Deduction",
      default: false,
    },
    {
      name: "WHT on Profit - %",
      default: true,
    },
    {
      name: "Risk Level",
      default: false,
    },
    {
      name: "Investment Limit",
      default: false,
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
