import React from "react";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";
import Toggle from "react-toggle";

export default function CreditCardsManageEntries({ heading }) {
  const navigate = useNavigate();
  const listOfEntries = [
    {
      name: "Ref",
      default: true,
    },
    {
      name: "Name",
      default: true,
    },
    {
      name: "Image",
      default: true,
    },
    {
      name: "Is Featured",
      default: true,
    },
    {
      name: "Interest Rate - %",
      default: true,
    },
    {
      name: "Annual Fee",
      default: true,
    },
    {
      name: "Waiver of Annual Fee",
      default: true,
    },
    {
      name: "Chip Maintenance",
      default: true,
    },
    {
      name: "Late Payment Fee",
      default: true,
    },
    {
      name: "Cash Advance Facility",
      default: true,
    },
    {
      name: "Cash Advance Rate - %",
      default: true,
    },
    {
      name: "Cash Advance Fee",
      default: true,
    },
    {
      name: "Balance Transfer Rate - %",
      default: true,
    },
    {
      name: "Balance Transfer Chargers",
      default: true,
    },
    {
      name: "Card Type",
      default: true,
    },
    {
      name: "Time period required for waiver",
      default: true,
    },
    {
      name: "Interest Free Period - Days",
      default: true,
    },
    {
      name: "Balance Transfer Facility",
      default: true,
    },
    {
      name: "Foreign Transaction Fee",
      default: true,
    },
    {
      name: "Reward Points",
      default: true,
    },
    {
      name: "Zero Loss Liability",
      default: true,
    },
    {
      name: "SMS Charges",
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
                <Toggle defaultChecked={item.default} icons={true} />
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
