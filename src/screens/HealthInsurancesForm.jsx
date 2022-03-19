import React from "react";
import { ArrowLeft } from "react-feather";
import UploadImage from "../components/UploadImage";
import Toggle from "react-toggle";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Select from "../components/Select";

export default function HealthInsurancesForm({ heading, isEdit }) {
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
            <Input error="" label="Premium" placeholder="Premium" type="text" />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Room Limit"
              placeholder="Room Limit"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Hospitalization Limit"
              placeholder="Hospitalization Limit"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Select
              error=""
              isMulti={false}
              label="Accidental Injury treatment"
              options={[
                { value: true, label: "Yes" },
                { value: false, label: "No" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Hospitalization Costs?"
              placeholder="Hospitalization Costs?"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Expenses before hospitalization?"
              placeholder="Expenses before hospitalization?"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Expenses after hospitalization?"
              placeholder="Expenses after hospitalization?"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Day care surgery"
              placeholder="Day care surgery"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Radiotherapy"
              placeholder="Radiotherapy"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Pre-existing conditions"
              placeholder="Pre-existing conditions"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Waiting period"
              placeholder="Waiting period"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Maternity"
              placeholder="Maternity"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Outside Network Reimbursement"
              placeholder="Outside Network Reimbursement"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
