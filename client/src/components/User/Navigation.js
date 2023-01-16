import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <ul className=" flex justify-end gap-12 items-center px-4 z-2">
      <NavLink exact to="/events">
        Schedule
      </NavLink>
      <NavLink exact to="/tickets">
        My Tickets
      </NavLink>
      <NavLink exact to="/contacts">
        Contact
      </NavLink>
      <NavLink
        exact
        to="/adminLogin"
        className="border border-[#F5167E] py-2 px-4 rounded-full hover:bg-[#F5167E] hover:text-white transition duration-[0.75s] ease-in-out"
      >
        Admin Login
      </NavLink>
      <NavLink
        exact
        to="/signup"
        className="border border-[#F5167E] py-2 px-4 rounded-full hover:bg-[#F5167E] hover:text-white transition duration-[0.75s] ease-in-out"
      >
        Sign In
      </NavLink>
    </ul>
  );
}

export default Navigation;
