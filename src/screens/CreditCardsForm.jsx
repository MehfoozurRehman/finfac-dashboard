import React from "react";
import { ArrowLeft } from "react-feather";
import UploadImage from "../components/UploadImage";
import Toggle from "react-toggle";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";

export default function CreditCardsForm({ heading, isEdit }) {
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
          <div className="main__content__form__col" style={{ width: "100%" }}>
            <UploadImage label="Image" />
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
            <Input
              error=""
              label="Interest Rate - %"
              placeholder="Interest Rate - %"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Annual Fee"
              placeholder="Annual Fee"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Waiver of Annual Fee"
              placeholder="Waiver of Annual Fee"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Chip Maintenance"
              placeholder="Chip Maintenance"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Late Payment Fee"
              placeholder="Late Payment Fee"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Cash Advance Facility"
              placeholder="Cash Advance Facility"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Cash Advance Rate - %"
              placeholder="Cash Advance Rate - %"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Cash Advance Fee"
              placeholder="Cash Advance Fee"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Balance Transfer Rate - %"
              placeholder="Balance Transfer Rate - %"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Balance Transfer Chargers"
              placeholder="Balance Transfer Chargers"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Card Type"
              options={[
                { value: "Platinum", label: "Platinum" },
                { value: "Gold", label: "Gold" },
                { value: "Classic", label: "Classic" },
                { value: "Travel", label: "Travel" },
                { value: "Reward", label: "Reward" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Time period required for waiver"
              placeholder="Time period required for waiver"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Interest Free Period - Days"
              placeholder="Interest Free Period - Days"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Balance Transfer Facility"
              options={[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Foreign Transaction Fee"
              placeholder="Foreign Transaction Fee"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Reward Points"
              placeholder="Reward Points"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Zero Loss Liability"
              options={[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="SMS Charges"
              placeholder="SMS Charges"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
