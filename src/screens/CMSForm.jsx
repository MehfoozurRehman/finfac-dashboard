import React from "react";
import { ArrowLeft } from "react-feather";
import Select from "react-select";
import UploadImage from "../components/UploadImage";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";

export default function CMSForm({ heading }) {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__header" style={{ height: "8%" }}>
        <div className="main__header__top">
          <div className="main__header__top__heading">
            <button
              className="main__header__top__heading__button"
              onClick={() => {
                navigate("/dashboard/cms");
              }}
            >
              <ArrowLeft size={20} color="currentColor" />
            </button>
            {heading} CMS
          </div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                navigate("/dashboard/cms");
              }}
              style={{ background: "#242424" }}
            >
              Discard
            </button>
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                navigate("/dashboard/cms");
              }}
            >
              {heading === "Add" ? "Add New" : "Save"}
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
            <div className="popup__form__input">
              <div className="popup__form__input__label">Category</div>
              <Select
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },
                ]}
                theme={(theme) => ({
                  ...theme,

                  colors: {
                    ...theme.colors,
                    primary25: "#f6f6f6",
                    primary: "#ed263d",
                    primary50: "f6f6f6",
                  },
                })}
                isMulti
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Heading</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Name"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">Sub Heading</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Name"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col">
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Embedded Video link
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Name"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div
            className="main__content__form__col"
            style={{ flex: "67%" }}
          ></div>
          <div
            className="main__content__form__col"
            style={{ width: "100%", marginBottom: "0em" }}
          >
            <div className="popup__form__input">
              <div
                className="popup__form__input__label"
                style={{
                  fontSize: 20,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                List
                <button
                  className="main__header__top__buttons__button"
                  onClick={() => {
                    navigate("/dashboard/cms");
                  }}
                >
                  Add New
                </button>
              </div>
            </div>
          </div>
          <div className="main__content__form__col" style={{}}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">Heading</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Heading"
              />
              <div className="popup__form__input__error"></div>
            </div>
            <div className="popup__form__input">
              <div className="popup__form__input__label">Message</div>
              <TextArea />
              <div className="popup__form__input__error"></div>
            </div>
            <button
              className="main__header__top__buttons__button"
              style={{
                background: "#242424",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Delete
            </button>
          </div>
          <div className="main__content__form__col" style={{}}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">Heading</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Heading"
              />
              <div className="popup__form__input__error"></div>
            </div>
            <div className="popup__form__input">
              <div className="popup__form__input__label">Message</div>
              <TextArea />
              <div className="popup__form__input__error"></div>
            </div>
            <button
              className="main__header__top__buttons__button"
              style={{
                background: "#242424",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Delete
            </button>
          </div>
          <div className="main__content__form__col" style={{}}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">Heading</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Heading"
              />
              <div className="popup__form__input__error"></div>
            </div>
            <div className="popup__form__input">
              <div className="popup__form__input__label">Message</div>
              <TextArea />
              <div className="popup__form__input__error"></div>
            </div>
            <button
              className="main__header__top__buttons__button"
              style={{
                background: "#242424",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Delete
            </button>
          </div>
          <div className="main__content__form__col" style={{}}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">Heading</div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Heading"
              />
              <div className="popup__form__input__error"></div>
            </div>
            <div className="popup__form__input">
              <div className="popup__form__input__label">Message</div>
              <TextArea />
              <div className="popup__form__input__error"></div>
            </div>
            <button
              className="main__header__top__buttons__button"
              style={{
                background: "#242424",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Delete
            </button>
          </div>
          <div
            className="main__content__form__col"
            style={{ width: "100%", marginBottom: "0em" }}
          >
            <div className="popup__form__input">
              <div
                className="popup__form__input__label"
                style={{
                  fontSize: 20,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Relevant Videos
              </div>
            </div>
          </div>
          <div className="main__content__form__col" style={{}}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Embedded Video link-1:
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Embedded Video link-1"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col" style={{}}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Embedded Video link-2:
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Embedded Video link-2"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
          <div className="main__content__form__col" style={{}}>
            <div className="popup__form__input">
              <div className="popup__form__input__label">
                Embedded Video link-3:
              </div>
              <input
                type="text"
                className="popup__form__input__field"
                placeholder="Enter Embedded Video link-3"
              />
              <div className="popup__form__input__error"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
