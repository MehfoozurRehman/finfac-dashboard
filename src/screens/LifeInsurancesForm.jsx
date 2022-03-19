import React from "react";
import { ArrowLeft } from "react-feather";
import Toggle from "react-toggle";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";

export default function LifeInsurancesForm({ heading, isEdit }) {
  const navigate = useNavigate();
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
            {heading}
          </div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              style={{ background: "#242424" }}
              onClick={() => {
                navigate(-1);
              }}
            >
              Discard
            </button>
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                navigate(-1);
              }}
            >
              {isEdit ? "Save Chanings" : "Add New"}
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
        <div className="main__content__form">
          <div className="main__content__form__col">
            <label className="main__content__form__toggle">
              <span>Is Featured</span>
              <Toggle defaultChecked={false} icons={false} />
            </label>
          </div>
          <div className="main__content__form__col">
            <Input error="" label="Ref" placeholder="Ref" type="text" />
          </div>
          <div className="main__content__form__col">
            <Input error="" label="Name" placeholder="Name" type="text" />
          </div>
          <div className="main__content__form__col">
            <Input error="" label="Premium" placeholder="Premium" type="text" />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Room limit"
              placeholder="Room limit"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Accidental death"
              options={[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Accidental disability"
              options={[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Accidental hospitalization"
              options={[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Coverage Amount"
              placeholder="Coverage Amount"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Date of Birth"
              placeholder="Date of Birth"
              type="date"
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Plan type"
              options={[
                { value: "Individual Plan", label: "Individual Plan" },
                { value: "Family Plan", label: "Family Plan" },
                { value: "With Parent", label: "With Parent" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
