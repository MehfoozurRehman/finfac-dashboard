import React from "react";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";
import Toggle from "react-toggle";

export default function CarInsurancesManageEntries({}) {
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
      name: "Insurance Rate -%",
      default: false,
    },
    {
      name: "Tracker Option",
      default: true,
    },
    {
      name: "Accidental Damages",
      default: true,
    },
    {
      name: "Fire",
      default: false,
    },
    {
      name: "Total Loss",
      default: false,
    },
    {
      name: "Theft/Snatch",
      default: false,
    },
    {
      name: "Natural Calamities",
      default: true,
    },
    {
      name: "Riots and Strike",
      default: false,
    },
    {
      name: "Terrorism",
      default: false,
    },
    {
      name: "Deductible",
      default: true,
    },
    {
      name: "No Claim Discount",
      default: false,
    },
    {
      name: "Death Bodily Injury",
      default: false,
    },
    {
      name: "Property Damages",
      default: false,
    },
    {
      name: "Emergency Medical Expenses",
      default: true,
    },
    {
      name: "Call Centre Support",
      default: true,
    },
    {
      name: "In-House Surveyors",
      default: false,
    },
    {
      name: "Replacement at Doorstep",
      default: false,
    },
    {
      name: "Mobile App",
      default: false,
    },
    {
      name: "Self-Assessment at approved dealership",
      default: true,
    },
    {
      name: "Make",
      default: false,
    },
    {
      name: "Model",
      default: false,
    },
    {
      name: "Year of Manufacturing",
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
