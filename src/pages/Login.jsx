import React, { useEffect, useRef, useState } from "react";
import PageLayout from "./PageLayout";
import { Button } from "primereact/button";

import { v6 as uuidv6 } from "uuid";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

export default function Login() {
  const { auth, setAuth } = useAuth(); // Destructure auth and setAuth from useAuth

  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();

    console.log("Checking credentials...");

    try {
      // Log the values of username and pwd to debug
      console.log("Username:", username);
      console.log("Password:", pwd);

      if (username === "admin" && pwd === "admin") {
        // perform login API call
        const accessToken = uuidv6(); // Generate a UUID token
        const roles = ROLES.Admin;
        const authInfo = { username, pwd, accessToken, roles: [roles] };
        setAuth(authInfo);
        localStorage.setItem("authInfo", JSON.stringify(authInfo));

        // Clear input fields
        setUsername("");
        setPwd("");

        console.log("AccessToken:", accessToken);

        alert("Login Successful"); // Alert should show after this line

        navigate(from, { replace: true });
      } else {
        console.log("checking auth...failed");
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  useEffect(() => {
    setErrMsg("");
  }, [username, pwd]);

  return (
    <PageLayout>
      <div className=" px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-column lg:flex-row justify-content-center align-items-center gap-7">
          <div className="text-center lg:text-right">
            <div className="text-2xl">
              <p
                ref={errRef}
                className={errMsg ? "text-orange-400" : "text-gray-500"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
            </div>
            <div className="mt-6 mb-3 font-bold text-6xl text-900">
              Login - Page 🔐!
            </div>
          </div>
          <div className="login-form">
            <form onSubmit={handelSubmit}>
              <div className="field">
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
              </div>
              <div className="field">
                <label htmlFor="pwd">Password</label>
                <input
                  id="pwd"
                  type="password"
                  onChange={(e) => setPwd(e.target.value)}
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                />
              </div>
              <div className="flex align-items-center justify-content-center">
                <Button label="Login" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
