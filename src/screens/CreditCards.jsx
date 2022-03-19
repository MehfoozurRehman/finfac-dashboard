import React from "react";
import { Edit, Search, Trash } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import TableHeaderEntry from "../components/TableHeaderEntry";

function CreditCardsTableEntry({ onEdit, onDelete }) {
  return (
    <div className="main__content__table__list">
      <div className="main__content__table__list__entry">
        <button className="main__content__table__list__entry__button main__content__table__list__entry__button__primary">
          <Edit
            size={20}
            color="currentColor"
            strokeWidth={1}
            onClick={onEdit}
          />
        </button>
        <button
          className="main__content__table__list__entry__button main__content__table__list__entry__button__secondary"
          onClick={onDelete}
        >
          <Trash size={20} color="currentColor" strokeWidth={1} />
        </button>
      </div>
      <div className="main__content__table__list__entry">Ref</div>
      <div className="main__content__table__list__entry">Name</div>
      <div className="main__content__table__list__entry">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="main__content__table__list__entry__img"
        />
      </div>
      <div className="main__content__table__list__entry">Is Featured</div>
      <div className="main__content__table__list__entry">Interest Rate - %</div>
      <div className="main__content__table__list__entry">Annual Fee</div>
      <div className="main__content__table__list__entry">
        Waiver of Annual Fee
      </div>
      <div className="main__content__table__list__entry">Chip Maintenance</div>
      <div className="main__content__table__list__entry">Late Payment Fee</div>
      <div className="main__content__table__list__entry">
        Cash Advance Facility
      </div>
      <div className="main__content__table__list__entry">
        Cash Advance Rate - %
      </div>
      <div className="main__content__table__list__entry">Cash Advance Fee</div>
      <div className="main__content__table__list__entry">
        Balance Transfer Rate - %
      </div>
      <div className="main__content__table__list__entry">
        Balance Transfer Chargers
      </div>
      <div className="main__content__table__list__entry">Card Type</div>
      <div className="main__content__table__list__entry">
        Time period required for waiver
      </div>
      <div className="main__content__table__list__entry">
        Interest Free Period - Days
      </div>
      <div className="main__content__table__list__entry">
        Balance Transfer Facility
      </div>
      <div className="main__content__table__list__entry">
        Foreign Transaction Fee
      </div>
      <div className="main__content__table__list__entry">Reward Points</div>
      <div className="main__content__table__list__entry">
        Zero Loss Liability
      </div>
      <div className="main__content__table__list__entry">SMS Charges</div>
    </div>
  );
}

export default function CreditCards({ onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Credit Cards</div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                navigate("/dashboard/credit_cards/add");
              }}
            >
              Add New
            </button>
          </div>
        </div>
        <div className="main__header__bottom">
          <Link
            to="/dashboard/credit_cards/entries"
            className="main__header__bottom__button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 31 31"
            >
              <g
                id="Icon_feather-settings"
                data-name="Icon feather-settings"
                transform="translate(-0.5 -0.5)"
              >
                <path
                  id="Path_21946"
                  data-name="Path 21946"
                  d="M21.409,17.455A3.955,3.955,0,1,1,17.455,13.5,3.955,3.955,0,0,1,21.409,17.455Z"
                  transform="translate(-1.455 -1.455)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  id="Path_21947"
                  data-name="Path 21947"
                  d="M25.755,19.955a2.175,2.175,0,0,0,.435,2.4l.079.079a2.638,2.638,0,1,1-3.73,3.73l-.079-.079a2.193,2.193,0,0,0-3.717,1.555v.224a2.636,2.636,0,0,1-5.273,0v-.119a2.175,2.175,0,0,0-1.424-1.99,2.175,2.175,0,0,0-2.4.435l-.079.079a2.638,2.638,0,1,1-3.73-3.73l.079-.079A2.193,2.193,0,0,0,4.36,18.742H4.136a2.636,2.636,0,1,1,0-5.273h.119a2.175,2.175,0,0,0,1.99-1.424,2.175,2.175,0,0,0-.435-2.4l-.079-.079a2.638,2.638,0,1,1,3.73-3.73l.079.079a2.175,2.175,0,0,0,2.4.435h.105a2.175,2.175,0,0,0,1.318-1.99V4.136a2.636,2.636,0,1,1,5.273,0v.119A2.193,2.193,0,0,0,22.354,5.81l.079-.079a2.638,2.638,0,1,1,3.73,3.73l-.079.079a2.175,2.175,0,0,0-.435,2.4v.105a2.175,2.175,0,0,0,1.99,1.318h.224a2.636,2.636,0,0,1,0,5.273h-.119a2.175,2.175,0,0,0-1.99,1.318Z"
                  transform="translate(0 0)"
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
            Manage Entries
          </Link>
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
            <TableHeaderEntry title="Name" />
            <TableHeaderEntry title="Image" />
            <TableHeaderEntry title="Is Featured" />
            <TableHeaderEntry title="Interest Rate - %" />
            <TableHeaderEntry title="Annual Fee" />
            <TableHeaderEntry title="Waiver of Annual Fee" />
            <TableHeaderEntry title="Chip Maintenance" />
            <TableHeaderEntry title="Late Payment Fee" />
            <TableHeaderEntry title="Cash Advance Facility" />
            <TableHeaderEntry title="Cash Advance Rate - %" />
            <TableHeaderEntry title="Cash Advance Fee" />
            <TableHeaderEntry title="Balance Transfer Rate - %" />
            <TableHeaderEntry title="Balance Transfer Chargers" />
            <TableHeaderEntry title="Card Type" />
            <TableHeaderEntry title="Time period required for waiver" />
            <TableHeaderEntry title="Interest Free Period - Days" />
            <TableHeaderEntry title="Balance Transfer Facility" />
            <TableHeaderEntry title="Foreign Transaction Fee" />
            <TableHeaderEntry title="Reward Points" />
            <TableHeaderEntry title="Zero Loss Liability" />
            <TableHeaderEntry title="SMS Charges" />
          </div>
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
          <CreditCardsTableEntry
            onEdit={() => {
              navigate("/dashboard/credit_cards/edit");
            }}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}
