import React from "react";
import { Search } from "react-feather";
import { useNavigate } from "react-router-dom";
import BlogsTableEntry from "../components/BlogsTableEntry";
import TableHeaderEntry from "../components/TableHeaderEntry";

export default function Blogs({ onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="main__header">
        <div className="main__header__top">
          <div className="main__header__top__heading">Blogs</div>
          <div className="main__header__top__buttons">
            <button
              className="main__header__top__buttons__button"
              onClick={() => {
                navigate("/dashboard/blogs/add");
              }}
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
            <TableHeaderEntry title="Image" />
            <TableHeaderEntry title="Title" />
            <TableHeaderEntry title="Author" />
            <TableHeaderEntry title="Date Created" />
            <TableHeaderEntry title="Catagory" />
          </div>
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
          <BlogsTableEntry
            onEdit={() => {
              navigate("/dashboard/blogs/add");
            }}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  );
}
