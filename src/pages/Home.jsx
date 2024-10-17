import React from "react";
import PageLayout from "./PageLayout";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

export default function Home() {
  const { auth } = useAuth();

  console.log(auth);
  // const auth2 = {
  //   username: "admin",
  //   pwd: "admin",
  //   accessToken: "1ef8b72f-c0ba-6950-9d97-b6e9646cf462",
  //   roles: [5150],
  // };
  // const isAllowed = auth2?.roles?.some((role) => ROLES.);  // Check if any role matches
  // console.log(isAllowed);

  return (
    <PageLayout>
      <article>
        <h1 className="text-2xl mb-4">React Role Base Auth</h1>
        <p>
          This repository is designed to prepare for practical React.js
          interview rounds. It includes hands-on exercises and real-world
          scenarios that test essential React skills required for a senior
          developer role.
        </p>
      </article>
      <article>
        <h1 className="text-2xl mb-4">Install the below dependency.</h1>
      </article>
      <article>
        <h1 className="text-3xl mb-3">Links</h1>

        <div className="text-3xl">Public Route</div>

        <div className="my-3">
          <Link to="/">Login Page</Link>
          <Link to="register">Register Page</Link>
        </div>

        <div className="text-3xl">Private Route</div>
        <div className="mt-3">
          <Link to="/">Home Page</Link>
          <Link to="editor">Editors Page</Link>
          <Link to="admin">Admin Page</Link>
        </div>
      </article>
    </PageLayout>
  );
}
