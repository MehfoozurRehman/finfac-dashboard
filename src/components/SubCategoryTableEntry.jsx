import React from "react";
import { Edit, Trash } from "react-feather";

export default function SubCategoryTableEntry() {
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
      <div className="main__content__table__list__entry">Bilal John</div>
      <div className="main__content__table__list__entry">Category Name</div>
    </div>
  );
}
