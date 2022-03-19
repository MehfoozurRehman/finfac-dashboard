import React from "react";
import { ArrowLeft } from "react-feather";
import UploadImage from "../components/UploadImage";
import Toggle from "react-toggle";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";

export default function MutualFundsForm({ heading, isEdit }) {
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
              label="AMC rating"
              placeholder="AMC rating"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="AUM - Billion"
              placeholder="AUM - Billion"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Sahriah compliant option"
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
              label="Web portal and App"
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
              label="Online Account opening"
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
              label="Online Investment"
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
              label="Debit Card"
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
              label="Interbank Fund Transfer"
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
              label="Additional Coverage - Insurance"
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
              label="WhatsApp Service"
              options={[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Fund Name"
              placeholder="Fund Name"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input error="" label="30 Days" placeholder="30 Days" type="text" />
          </div>
          <div className="main__content__form__col">
            <Input error="" label="90 Days" placeholder="90 Days" type="text" />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="365 Days"
              placeholder="365 Days"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Fund Name"
              placeholder="Fund Name"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input error="" label="1 year" placeholder="1 year" type="text" />
          </div>
          <div className="main__content__form__col">
            <Input error="" label="3 year" placeholder="3 year" type="text" />
          </div>
          <div className="main__content__form__col">
            <Input error="" label="5 year" placeholder="5 year" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}
