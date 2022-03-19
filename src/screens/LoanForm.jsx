import React from "react";
import { ArrowLeft } from "react-feather";
import UploadImage from "../components/UploadImage";
import Toggle from "react-toggle";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "../components/Select";
import Input from "../components/Input";

export default function LoanForm({ heading }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
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
            {/* <button
              className="main__header__top__buttons__button"
              style={{ background: 'linear-gradiant("#242424","#f6f6f6")' }}
            >
              Bulk Add
            </button> */}
            <button className="main__header__top__buttons__button">
              Add New
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
            <Select
              error=""
              isMulti={false}
              label="hello"
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
          </div>
          <div className="main__content__form__col">
            <Input error="" label="hello" placeholder="hey" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}
