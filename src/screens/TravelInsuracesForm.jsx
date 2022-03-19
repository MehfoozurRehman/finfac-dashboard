import React from "react";
import { ArrowLeft } from "react-feather";
import UploadImage from "../components/UploadImage";
import Toggle from "react-toggle";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

export default function TravelInsuracesForm({ heading, isEdit }) {
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
            <Input error="" label="Premium" placeholder="Premium" type="text" />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Medical Cover"
              placeholder="Medical Cover"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Coverage upto"
              placeholder="Coverage upto"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Emergency medical cover"
              placeholder="Emergency medical cover"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Repatriation of mortal remains"
              placeholder="Repatriation of mortal remains"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Emergency medical evacuation"
              placeholder="Emergency medical evacuation"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Emergency Dental care"
              placeholder="Emergency Dental care"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Emergency return home"
              placeholder="Emergency return home"
              type="text"
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
              label="Accidental death / permanent disability"
              placeholder="Accidental death / permanent disability"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Baggage loss"
              placeholder="Baggage loss"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Baggage delay"
              placeholder="Baggage delay"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Flight delay"
              placeholder="Flight delay"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Trip cancellation"
              placeholder="Trip cancellation"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Credit card loss"
              placeholder="Credit card loss"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Passport loss"
              placeholder="Passport loss"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input error="" label="Country" placeholder="Country" type="text" />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Travel time"
              placeholder="Travel time"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Passenger"
              placeholder="Passenger"
              type="text"
            />
          </div>
          <div className="main__content__form__col">
            <Input
              error=""
              label="Date of Birth"
              placeholder="Date of Birth"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
