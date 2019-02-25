import React from "react";
import { NavLink } from 'react-router-dom'

export const LoggedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
          <li><span className="black-text ">{props.user}</span></li>
          <li><NavLink to='/'><span className="black-text ">New Note</span></NavLink></li>
          <li><NavLink to='/'><span className="black-text ">All Notes</span></NavLink></li>
          <li><NavLink to='/notebooks'><span className="black-text ">Notebooks </span></NavLink></li>
          <li>{props.logoutButton}</li>
      </ul>
    </div>
  );
};