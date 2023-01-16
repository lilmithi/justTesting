import React from "react";
import { useHistory } from "react-router-dom";

function Header({ handleHide }) {
  const history = useHistory();
  function handleLogout() {
    fetch("/admin/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    }).then((resp) => {
      if (resp.ok) {
        console.log("Session deleted!");
        history.push("/adminLogin");
      } else {
        console.log("Logout Error!");
      }
    });
  }

  return (
    <div className="heading flex justify-between items-center text-sm border-b border-[#474747] p-4">
      <div className="title font-bold uppercase text-lg flex flex-col items-center">
        <span className="tracking-wider">Splendid Events</span>
        <span className="text-gray-300">Admin</span>
      </div>
      <button
        type="button"
        className=" py-2 px-4 rounded bg-red-500 font-bold hover:bg-red-600 transition duration-700 ease-in-out md:inline-block hidden"
        onClick={() => handleLogout()}
      >
        Log out
      </button>
      <button type="button" onClick={() => handleHide()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 md:hidden cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default Header;
