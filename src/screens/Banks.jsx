import React from "react";
import { Search } from "react-feather";
import BanksTableEntry from "../components/BanksTableEntry";
import TableHeaderEntry from "../components/TableHeaderEntry";

export default function Banks({ onAdd, onEdit, onDelete }) {
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Banks</div>
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
          </div>
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
          <BanksTableEntry onEdit={onEdit} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}
