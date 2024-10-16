import React from "react";

export default function PageLayout({ children }) {
  return (
    <section className="bg-yellow-500">
      <div className="container">{children}</div>
    </section>
  );
}
