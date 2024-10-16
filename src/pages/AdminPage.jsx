import React from "react";
import PageLayout from "./PageLayout";
export default function AdminPage() {
  return (
    <PageLayout>
      <div className=" px-4 py-8 md:px-6 lg:px-8">
        <div className="flex flex-column lg:flex-row justify-content-center align-items-center gap-7">
          <div className="text-center lg:text-right">
            <div className="mt-6 mb-3 font-bold text-6xl text-900">
              Admin Page 🧑🏻‍💼!
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
