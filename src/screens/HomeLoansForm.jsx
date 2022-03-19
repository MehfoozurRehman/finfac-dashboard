import React from "react";
import { ArrowLeft } from "react-feather";
import UploadImage from "../components/UploadImage";
import Toggle from "react-toggle";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";

export default function HomeLoansForm({ heading, isEdit }) {
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
              label="Minimum down payment"
              placeholder="Minimum down payment"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Type"
              options={[
                { value: "Conventional", label: "Conventional" },
                { value: "Islamic", label: "Islamic" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Category"
              options={[
                { value: "Variable", label: "Variable" },
                { value: "Fixed", label: "Fixed" },
                { value: "Hybrid", label: "Hybrid" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="KIBOR -Dropdown"
              placeholder="KIBOR -Dropdown"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Insurance Rate"
              placeholder="Insurance Rate"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Processing Fee"
              placeholder="Processing Fee"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Application Fee"
              placeholder="Application Fee"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Max Limit -%"
              placeholder="Max Limit -%"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Late Payment Charges"
              placeholder="Late Payment Charges"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Baloon Payment"
              options={[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Baloon Payment Charges"
              placeholder="Baloon Payment Charges"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Prepayment"
              options={[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Prepayment Charges"
              placeholder="Prepayment Charges"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Financing Limit"
              placeholder="Financing Limit"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Deferred Instalment"
              placeholder="Deferred Instalment"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Occupation"
              options={[
                { value: "Salaried", label: "Salaried" },
                { value: "Business", label: "Business" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
