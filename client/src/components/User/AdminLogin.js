import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function AdminLogin() {
  const [myType, setMyType] = useState("password");
  const [formData, setFormData] = useState({
    admin_name: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const history = useHistory();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((resp) => {
      if (resp.ok) {
        history.push("/admin");
      } else {
        resp.json().then((e) => setErrors(e.errors[0]));
      }
    });
    e.target.reset();
  }

  function handleClick(e) {
    e.target.classList.toggle("fa-eye-slash");
    myType === "password" ? setMyType("text") : setMyType("password");
  }
  return (
    <div className="h-[100dvh] flex flex-col items-center justify-center">
      <div className="loginCard w-2/3 border h-3/4 max-w-[1090px] rounded-lg flex overflow-hidden text-white">
        <div className="login-img w-1/2 hidden mdPro:block">
          <img
            src="assets/loginImg.jpg"
            alt="login pic"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="login-content w-full mdPro:w-1/2 bg-[#200589] p-4 flex flex-col">
          <h3 className="text-center mdPro:text-2xl text-lg tracking-wider font-bold ">
            Login
          </h3>
          <form
            className="mdPro:w-full flex flex-col items-center my-4 gap-6"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex flex-col gap-4 mdPro:w-4/5 w-1/2">
              {errors ? (
                <div className="text-red-500 p-2 text-sm">{errors}</div>
              ) : (
                ""
              )}
              <label htmlFor="admin_name">Admin name</label>
              <input
                type="text"
                id="admin_name"
                className="rounded-full tracking-wider text-md relative mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                onChange={(e) => handleChange(e)}
                placeholder="john doe"
              />
            </div>
            <div className="flex flex-col gap-4 mdPro:w-4/5 w-1/2 relative">
              <label htmlFor="adminName">Password</label>
              <input
                type={myType}
                id="password"
                placeholder="password"
                autoComplete="off"
                className="rounded-full tracking-widest mt-1 block w-full px-3 py-2 bg-transparent border border-slate-300 text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                onChange={(e) => handleChange(e)}
              />
              <i
                className="fa-solid fa-eye fa-eye-slash absolute top-[65%] right-4 text-gray-300 cursor-pointer"
                id="eye"
                title="change visibility"
                onClick={(e) => handleClick(e)}
              ></i>
            </div>
            <button
              type="submit"
              className="admin-submit-btn py-1 px-4 border border-[#7a0bc0] shadow-md rounded-md font-semibold tracking-wide w-28 mt-4 hover:scale-[1.03] transition duration-[1.5s] ease-in-out"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
