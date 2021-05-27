import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigate = () => {
  return (
    <ul>
      <li>
        <NavLink to="todo">ToDo</NavLink>
      </li>
      <li>
        <NavLink to="posts">Post</NavLink>
      </li>
      <li>
        <NavLink to="Albums">Album</NavLink>
      </li>
    </ul>
  );
};

export default PageNavigate;
