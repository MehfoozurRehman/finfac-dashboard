import React from "react";
import { ArrowLeft } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";
import Toggle from "react-toggle";

export default function MutualFundsManageEntries({ heading }) {
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
      name: "is Featured",
      default: true,
    },
    {
      name: "AMC rating",
      default: false,
    },
    {
      name: "AUM - Billion",
      default: true,
    },
    {
      name: "Sahriah compliant option",
      default: true,
    },
    {
      name: "Web portal and App",
      default: false,
    },
    {
      name: "Online Account opening",
      default: false,
    },
    {
      name: "Online Investment",
      default: false,
    },
    {
      name: "Debit Card",
      default: true,
    },
    {
      name: "Interbank Fund Transfer",
      default: false,
    },
    {
      name: "Additional Coverage - Insurance",
      default: false,
    },
    {
      name: "WhatsApp Service",
      default: true,
    },
    {
      name: "Fund Name",
      default: false,
    },
    {
      name: "30 Days",
      default: false,
    },
    {
      name: "90 Days",
      default: false,
    },
    {
      name: "365 Days",
      default: true,
    },
    {
      name: "Fund Name",
      default: true,
    },
    {
      name: "1 year",
      default: false,
    },
    {
      name: "3 year",
      default: false,
    },
    {
      name: "5 year",
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
