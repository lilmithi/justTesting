import React from "react";
import { useHistory } from "react-router-dom";

function BigScreenHeader() {
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
    <div className="heading md:flex justify-between  items-center text-sm border-b border-[#474747] hidden">
      <div className="title font-bold uppercase text-lg flex flex-col items-center">
        <span className="tracking-wider">Splendid Events</span>
        <span className="text-gray-300">Admin</span>
      </div>
      <button
        className=" py-2 px-4 rounded bg-red-500 font-bold hover:bg-red-600 transition duration-700 ease-in-out md:inline-block"
        onClick={() => handleLogout()}
      >
        Log out
      </button>
    </div>
  );
}

export default BigScreenHeader;
