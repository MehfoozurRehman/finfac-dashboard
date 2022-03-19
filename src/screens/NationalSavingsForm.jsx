import React from "react";
import { ArrowLeft } from "react-feather";
import UploadImage from "../components/UploadImage";
import Toggle from "react-toggle";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";

export default function NationalSavingsForm({ heading, isEdit }) {
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
              label="Rate - %"
              placeholder="Rate - %"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Time Period"
              placeholder="Time Period"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Profit Paid"
              placeholder="Profit Paid"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Lock in Period"
              placeholder="Lock in Period"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Early encashment"
              placeholder="Early encashment"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Zakat Deduction"
              options={[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="WHT on Profit - %"
              placeholder="WHT on Profit - %"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Risk Level"
              options={[
                { value: "High", label: "High" },
                { value: "Low", label: "Low" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Investment Limit"
              placeholder="Investment Limit"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
