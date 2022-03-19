import React from "react";
import { ArrowLeft } from "react-feather";
import { useLocation, useNavigate } from "react-router-dom";
import Toggle from "react-toggle";

export default function HomeLoansManageEntries({ heading }) {
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
      name: "Minimum down payment",
      default: true,
    },
    {
      name: "Type",
      default: true,
    },
    {
      name: "Category",
      default: true,
    },
    {
      name: "KIBOR -Dropdown",
      default: true,
    },
    {
      name: "Spread",
      default: true,
    },
    {
      name: "Insurance Rate",
      default: true,
    },
    {
      name: "Processing Fee",
      default: true,
    },
    {
      name: "Application Fee",
      default: true,
    },
    {
      name: "Max Limit -%",
      default: true,
    },
    {
      name: "Late Payment Charges",
      default: true,
    },
    {
      name: "Baloon Payment",
      default: true,
    },
    {
      name: "Prepayment",
      default: true,
    },
    {
      name: "Prepayment Charges",
      default: true,
    },
    {
      name: "Financing Limit",
      default: true,
    },
    {
      name: "Deferred Instalment",
      default: true,
    },
    {
      name: "Occupation",
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
