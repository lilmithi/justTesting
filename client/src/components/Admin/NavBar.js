import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import Header from "./Header";
import _ from "lodash";

function NavBar({ hidden, handleHide }) {
  const [adminInfo, setAdminInfo] = useState({
    admin_name: "",
    admin_image: "",
    email: "",
  });

  const history = useHistory();
  useEffect(() => {
    fetch("/admin/me")
      .then((resp) => resp.json())
      .then((data) => {
        data
          ? setAdminInfo({
              ...adminInfo,
              admin_name: data.admin_name,
              admin_image: data.admin_image,
              email: data.email,
            })
          : setAdminInfo(adminInfo);
      });
  }, []);

  return (
    <>
      {_.isEqual(
        {
          admin_name: "",
          admin_image: "",
          email: "",
        },
        adminInfo
      ) ? (
        ""
      ) : (
        <div className="navbar">
          <div className="md:hidden">
            <Header handleHide={handleHide} />
          </div>
          <div className="profile-slug">
            <img
              src={adminInfo.admin_image}
              alt="profile pic"
              className="w-16 h-16 object-cover rounded-full cursor-pointer hover:opacity-80 transition duration-300 ease-in-out"
              onClick={() => history.push("/admin/profile")}
            />

            <div className="flex flex-col min-h-4 ">
              <span className="text-left font-semibold">
                {adminInfo.admin_name}
              </span>
              <span className="text-center italic">{adminInfo.email}</span>
            </div>
          </div>
          <ul
            className={
              hidden
                ? "p-2 hidden md:block"
                : "p-2 flex flex-col items-center md:block"
            }
          >
            <NavLink
              className="list-item"
              exact
              to="/admin"
              activeStyle={{ background: "#353535" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="navbar-svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                  clipRule="evenodd"
                />
              </svg>

              <span>Dashboard</span>
            </NavLink>
            <NavLink
              className="list-item"
              exact
              to="/admin/users"
              activeStyle={{ background: "#353535" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="navbar-svg"
              >
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>

              <span>Users</span>
            </NavLink>
            <NavLink
              className="list-item"
              exact
              to="/admin/events"
              activeStyle={{ background: "#353535" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="navbar-svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>

              <span>Events</span>
            </NavLink>
            <NavLink
              className="list-item"
              exact
              to="/admin/notifications"
              activeStyle={{ background: "#353535" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="navbar-svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                  clipRule="evenodd"
                />
              </svg>

              <span>Notifications</span>
            </NavLink>
            <NavLink
              className="list-item"
              exact
              to="/admin/profile"
              activeStyle={{ background: "#353535" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="navbar-svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>

              <span>Profile</span>
            </NavLink>
            <NavLink className="list-item md:hidden" exact to="/adminLogin">
              Logout
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
}
export default NavBar;
