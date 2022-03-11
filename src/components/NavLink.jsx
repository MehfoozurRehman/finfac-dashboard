import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavLink({ title, to, svg, list }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(
    to === window.location.pathname || window.location.pathname.includes(to)
  );
  const [dropDownselected, setDropDownselected] = useState(0);
  return (
    <div className="nav__link">
      <div
        className="nav__link__entry"
        style={list && selected ? { marginBottom: ".5em" } : null}
      >
        <input
          type="radio"
          defaultChecked={selected}
          className="nav__link__entry__input"
          name="nav__link__entry__input"
          onClick={() => {
            navigate(to);
            selected
              ? setSelected(false)
              : setSelected(to === window.location.pathname);
          }}
        />
        <div className="nav__link__entry__content">
          {svg} {title}
        </div>
      </div>
      {list && selected
        ? list.map((item, i) => (
            <div className="nav__link__dropdown" key={i}>
              <div className="nav__link__dropdown__entry">
                <input
                  type="radio"
                  className="nav__link__dropdown__entry__input"
                  name="nav__link__dropdown__entry__input"
                  defaultChecked={item.to === window.location.pathname}
                  onClick={() => {
                    navigate(item.to);
                    setDropDownselected(i);
                  }}
                />
                <div className="nav__link__dropdown__entry__content">
                  {item.svg}
                  {item.title}
                </div>
              </div>
              {item.child && dropDownselected === i
                ? item.child.map((subItem, i) => (
                    <div className="nav__link__sub__dropdown__entry" key={i}>
                      <input
                        type="radio"
                        className="nav__link__sub__dropdown__entry__input"
                        name="nav__link__sub__dropdown__entry__input"
                        defaultChecked={subItem.to === window.location.pathname}
                        onClick={() => {
                          navigate(subItem.to);
                        }}
                      />
                      <div className="nav__link__sub__dropdown__entry__content">
                        {subItem.svg}
                        {subItem.title}
                      </div>
                    </div>
                  ))
                : null}
            </div>
          ))
        : null}
    </div>
  );
}
