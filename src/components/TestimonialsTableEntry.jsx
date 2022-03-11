import React from "react";
import { Edit, Trash } from "react-feather";

export default function TestimonialsTableEntry() {
  return (
    <div className="main__content__table__list">
      <div className="main__content__table__list__entry">
        <button className="main__content__table__list__entry__button main__content__table__list__entry__button__primary">
          <Edit size={20} color="currentColor" strokeWidth={1} />
        </button>
        <button className="main__content__table__list__entry__button main__content__table__list__entry__button__secondary">
          <Trash size={20} color="currentColor" strokeWidth={1} />
        </button>
      </div>
      <div className="main__content__table__list__entry">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="main__content__table__list__entry__img"
        />
      </div>
      <div className="main__content__table__list__entry">Bilal John</div>

      <div className="main__content__table__list__entry">Product Manager</div>
      <div className="main__content__table__list__entry">4.0</div>
      <div className="main__content__table__list__entry">
        View Message
        <div className="main__content__table__list__entry__message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
          eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Esse, eligendi! Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Esse, eligendi!
        </div>
      </div>
    </div>
  );
}