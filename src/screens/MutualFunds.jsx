import React from "react";
import { Search } from "react-feather";
import { Link, useNavigate } from "react-router-dom";
import TableHeaderEntry from "../components/TableHeaderEntry";
import { Edit, Trash } from "react-feather";

function MutualFundsTableEntry({ onEdit, onDelete }) {
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
      <div className="main__content__table__list__entry">is Featured</div>
      <div className="main__content__table__list__entry">AMC rating</div>
      <div className="main__content__table__list__entry">AUM - Billion</div>
      <div className="main__content__table__list__entry">
        Sahriah compliant option
      </div>
      <div className="main__content__table__list__entry">
        Web portal and App
      </div>
      <div className="main__content__table__list__entry">
        Online Account opening
      </div>
      <div className="main__content__table__list__entry">Online Investment</div>
      <div className="main__content__table__list__entry">Debit Card</div>
      <div className="main__content__table__list__entry">
        Interbank Fund Transfer
      </div>
      <div className="main__content__table__list__entry">
        Additional Coverage - Insurance
      </div>
      <div className="main__content__table__list__entry">WhatsApp Service</div>
      <div className="main__content__table__list__entry">Fund Name</div>
      <div className="main__content__table__list__entry">30 Days</div>
      <div className="main__content__table__list__entry">90 Days</div>
      <div className="main__content__table__list__entry">365 Days</div>
      <div className="main__content__table__list__entry">Fund Name</div>
      <div className="main__content__table__list__entry">1 year</div>
      <div className="main__content__table__list__entry">3 year</div>
      <div className="main__content__table__list__entry">5 year</div>
    </div>
  );
}

export default function MutualFunds({ onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Mutual Funds</div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                navigate("/dashboard/mutual_funds/add");
              }}
            >
              Add New
            </button>
          </div>
        </div>
        <div className="main__header__bottom">
          <Link
            to="/dashboard/mutual_funds/entries"
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
            <TableHeaderEntry title="is Featured" />
            <TableHeaderEntry title="AMC rating" />
            <TableHeaderEntry title="AUM - Billion" />
            <TableHeaderEntry title="Sahriah compliant option" />
            <TableHeaderEntry title="Web portal and App" />
            <TableHeaderEntry title="Online Account opening" />
            <TableHeaderEntry title="Online Investment" />
            <TableHeaderEntry title="Debit Card" />
            <TableHeaderEntry title="Interbank Fund Transfer" />
            <TableHeaderEntry title="Additional Coverage - Insurance" />
            <TableHeaderEntry title="WhatsApp Service" />
            <TableHeaderEntry title="Fund Name" />
            <TableHeaderEntry title="30 Days" />
            <TableHeaderEntry title="90 Days" />
            <TableHeaderEntry title="365 Days" />
            <TableHeaderEntry title="Fund Name" />
            <TableHeaderEntry title="1 year" />
            <TableHeaderEntry title="3 year" />
            <TableHeaderEntry title="5 year" />
          </div>
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
          <MutualFundsTableEntry
            onEdit={() => {
              navigate("/dashboard/mutual_funds/edit");
            }}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}
