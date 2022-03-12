import React from "react";
import { Search } from "react-feather";
import KiborsTableEntry from "../components/KiborsTableEntry";
import TableHeaderEntry from "../components/TableHeaderEntry";

export default function Kibors({ onAdd, onEdit, onDelete }) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Kibors</div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              onClick={onAdd}
            >
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
            <TableHeaderEntry title="Ref" />
            <TableHeaderEntry title="Image" />
            <TableHeaderEntry title="Name" />
            <TableHeaderEntry title="Is Featured" />
            <TableHeaderEntry title="Rate" />
          </div>
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
          <KiborsTableEntry onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}
