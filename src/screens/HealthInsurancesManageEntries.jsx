import React from "react";
import { ArrowLeft } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";
import Toggle from "react-toggle";

export default function HealthInsurancesManageEntries({ heading }) {
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
      name: "Premium",
      default: false,
    },
    {
      name: "Room Limit",
      default: true,
    },
    {
      name: "Hospitalization Limit",
      default: true,
    },
    {
      name: "Accidental Injury treatment",
      default: false,
    },
    {
      name: "Hospitalization Costs?",
      default: false,
    },
    {
      name: "Expenses before hospitalization?",
      default: false,
    },
    {
      name: "Expenses after hospitalization?",
      default: true,
    },
    {
      name: "Day care surgery",
      default: false,
    },
    {
      name: "Radiotherapy",
      default: false,
    },
    {
      name: "Pre-existing conditions",
      default: true,
    },
    {
      name: "Waiting period",
      default: false,
    },
    {
      name: "Maternity",
      default: false,
    },
    {
      name: "Outside Network Reimbursement",
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
