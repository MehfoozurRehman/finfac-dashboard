import React, { useState } from "react";
import logo from "../assets/logo.png";
import signupSvg from "../assets/signupSvg.svg";
import CheckBox from "../components/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <div className="auth__container">
      <div className="auth__container__left">
        <img src={logo} alt="logo" className="auth__container__left__img" />
        <form
          onSubmit={() => {
            navigate("/dashboard");
          }}
          className="auth__container__left__form"
        >
          <div className="auth__container__left__form__heading">Sign Up</div>
          <InputBox
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.166"
                height="17.562"
                viewBox="0 0 22.166 17.562"
              >
                <g
                  id="Icon_feather-mail"
                  data-name="Icon feather-mail"
                  transform="translate(-1.955 -5.25)"
                >
                  <path
                    id="Path_21801"
                    data-name="Path 21801"
                    d="M5.008,6H21.069a2.014,2.014,0,0,1,2.008,2.008V20.054a2.014,2.014,0,0,1-2.008,2.008H5.008A2.014,2.014,0,0,1,3,20.054V8.008A2.014,2.014,0,0,1,5.008,6Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    id="Path_21802"
                    data-name="Path 21802"
                    d="M23.077,9,13.038,16.027,3,9"
                    transform="translate(0 -0.992)"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            }
            type="email"
            placeholder="Email"
            error=""
          />
          <InputBox
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.213"
                height="21.212"
                viewBox="0 0 21.213 21.212"
              >
                <path
                  id="Icon_ionic-ios-call"
                  data-name="Icon ionic-ios-call"
                  d="M24.183,20.38A17.033,17.033,0,0,0,20.625,18c-1.066-.512-1.457-.5-2.212.042-.628.454-1.035.876-1.758.718a10.487,10.487,0,0,1-3.532-2.613,10.411,10.411,0,0,1-2.613-3.532c-.153-.729.269-1.13.718-1.758.544-.755.56-1.146.042-2.212A16.7,16.7,0,0,0,8.89,5.087c-.776-.776-.95-.607-1.378-.454A7.84,7.84,0,0,0,6.25,5.3,3.806,3.806,0,0,0,4.735,6.9c-.3.649-.649,1.858,1.124,5.015a27.983,27.983,0,0,0,4.92,6.562h0l.005.005.005.005h0a28.093,28.093,0,0,0,6.562,4.92c3.157,1.774,4.366,1.425,5.015,1.124a3.741,3.741,0,0,0,1.6-1.515,7.84,7.84,0,0,0,.67-1.262C24.79,21.33,24.964,21.156,24.183,20.38Z"
                  transform="translate(-4.018 -4.04)"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                />
              </svg>
            }
            type="tel"
            placeholder="Phone"
            error=""
          />
          <InputBox
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.099"
                height="19.976"
                viewBox="0 0 18.099 19.976"
              >
                <g
                  id="Icon_feather-lock"
                  data-name="Icon feather-lock"
                  transform="translate(0.6 0.6)"
                >
                  <path
                    id="Path_6620"
                    data-name="Path 6620"
                    d="M6.378,16.5H19.521A1.878,1.878,0,0,1,21.4,18.378v6.572a1.878,1.878,0,0,1-1.878,1.878H6.378A1.878,1.878,0,0,1,4.5,24.949V18.378A1.878,1.878,0,0,1,6.378,16.5Z"
                    transform="translate(-4.5 -8.051)"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  />
                  <path
                    id="Path_6621"
                    data-name="Path 6621"
                    d="M10.5,11.449V7.694a4.694,4.694,0,1,1,9.388,0v3.755"
                    transform="translate(-6.745 -3)"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  />
                </g>
              </svg>
            }
            type="password"
            placeholder="Password"
            error=""
          />
          <InputBox
            svg={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18.099"
                height="19.976"
                viewBox="0 0 18.099 19.976"
              >
                <g
                  id="Icon_feather-lock"
                  data-name="Icon feather-lock"
                  transform="translate(0.6 0.6)"
                >
                  <path
                    id="Path_6620"
                    data-name="Path 6620"
                    d="M6.378,16.5H19.521A1.878,1.878,0,0,1,21.4,18.378v6.572a1.878,1.878,0,0,1-1.878,1.878H6.378A1.878,1.878,0,0,1,4.5,24.949V18.378A1.878,1.878,0,0,1,6.378,16.5Z"
                    transform="translate(-4.5 -8.051)"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  />
                  <path
                    id="Path_6621"
                    data-name="Path 6621"
                    d="M10.5,11.449V7.694a4.694,4.694,0,1,1,9.388,0v3.755"
                    transform="translate(-6.745 -3)"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  />
                </g>
              </svg>
            }
            type="password"
            placeholder="ConfirmPassword"
            error=""
          />
          <button className="auth__container__left__form__button">
            Sign Up
          </button>
          <div className="auth__container__left__form__row__link">
            Already Have An Account ? <Link to="/">Login</Link>
          </div>
        </form>
      </div>
      <div className="auth__container__right">
        <img
          src={signupSvg}
          alt="signupSvg"
          className="auth__container__right__img"
        />
      </div>
    </div>
  );
}
