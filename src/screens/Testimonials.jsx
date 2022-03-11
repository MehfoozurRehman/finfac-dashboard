import React from "react";
import { Search } from "react-feather";
import { Link } from "react-router-dom";
import TestimonialsTableEntry from "../components/TestimonialsTableEntry";
import TableHeaderEntry from "../components/TableHeaderEntry";

export default function Testimonials() {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Testimonials</div>
          <div className="main__header__top__buttons">
            <button className="main__header__top__buttons__button">
              Add New
            </button>
          </div>
        </div>
        <div className="main__header__bottom">
          <div></div>
          <form className="main__header__bottom__input">
            <input
              type="text"
              className="main__header__bottom__input__field"
              placeholder="Search here"
            />
            <button className="main__header__bottom__input__button">
              <Search size={18} color="currentColor" />
            </button>
          </form>
        </div>
      </div>
      <div className="main__content">
        <div className="main__content__table">
          <div className="main__content__table__header">
            <TableHeaderEntry title="Action" />
            <TableHeaderEntry title="Image" />
            <TableHeaderEntry title="Name" />
            <TableHeaderEntry title="Designation" />
            <TableHeaderEntry title="Rating" />
            <TableHeaderEntry title="Message" />
          </div>
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
          <TestimonialsTableEntry />
        </div>
      </div>
    </div>
  );
}
