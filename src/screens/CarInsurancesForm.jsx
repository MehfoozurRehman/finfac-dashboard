import React from "react";
import { ArrowLeft } from "react-feather";
import UploadImage from "../components/UploadImage";
import Toggle from "react-toggle";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";

export default function CarInsurancesForm({ heading, isEdit }) {
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
              label="Insurance Rate -%"
              placeholder="Insurance Rate -%"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Tracker Option"
              placeholder="Tracker Option"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Accidental Damages"
              options={[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Input error="" label="Fire" placeholder="Fire" type="text" />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Total Loss"
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
              label="Theft/Snatch"
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
              label="Natural Calamities"
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
              label="Riots and Strike"
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
              label="Terrorism"
              options={[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Deductible"
              placeholder="Deductible"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="No Claim Discount"
              placeholder="No Claim Discount"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Death Bodily Injury"
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
              label="Property Damages"
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
              label="Emergency Medical Expenses"
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
              label="Call Centre Support"
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
              label="In-House Surveyors"
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
              label="Replacement at Doorstep"
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
              label="Mobile App"
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
              label="Self-Assessment at approved dealership"
              options={[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Input error="" label="Make" placeholder="Make" type="text" />
          </div>
          <div className="main__content__form__col">
            <Input error="" label="Model" placeholder="Model" type="text" />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Year of Manufacturing"
              placeholder="Year of Manufacturing"
              type="date"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
