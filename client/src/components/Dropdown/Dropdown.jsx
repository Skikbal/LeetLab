import React, { Children } from "react";

const Dropdown = ({ list, icon, name }) => {
  return (
    <div className="dropdown dropdown-hover dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 ">
        {icon}
        {name}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-sm z-10 "
      >
        {list.map((item, index) => {
          return (
            <li key={index} >
              <a onClick={item.onClick}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
