import React from "react";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";
import Toggle from "react-toggle";

export default function TravelInsuracesManageEntries({ heading }) {
  const navigate = useNavigate();
  const listOfEntries = [
    {
      name: "Premium",
      default: false,
    },
    {
      name: "Medical Cover",
      default: false,
    },
    {
      name: "Coverage upto",
      default: false,
    },
    {
      name: "Emergency medical cover",
      default: true,
    },
    {
      name: "Repatriation of mortal remains",
      default: false,
    },
    {
      name: "Emergency medical evacuation",
      default: true,
    },
    {
      name: "Emergency Dental care",
      default: true,
    },
    {
      name: "Emergency return home",
      default: false,
    },
    {
      name: "Deductible",
      default: false,
    },
    {
      name: "Accidental death / permanent disability",
      default: false,
    },
    {
      name: "Baggage loss",
      default: true,
    },
    {
      name: "Baggage delay",
      default: false,
    },
    {
      name: "Flight delay",
      default: false,
    },
    {
      name: "Trip cancellation",
      default: true,
    },
    {
      name: "Credit card loss",
      default: false,
    },
    {
      name: "Passport loss",
      default: false,
    },
    {
      name: "Country",
      default: false,
    },
    {
      name: "Travel time",
      default: true,
    },
    {
      name: "Passenger",
      default: true,
    },
    {
      name: "Date of Birth",
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
