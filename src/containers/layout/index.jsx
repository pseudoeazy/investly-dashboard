import React from "react";
import Sidebar from "containers/sidebar";
import SiteLayout from "./site-layout";

const Layout = ({ children }) => {
  return (
    <SiteLayout>
      <div className="flex min-h-screen overflow-hidden">
        <Sidebar />
        <main className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden pt-6 pl-[2.3125rem] pr-9 ">
          {children}
        </main>
      </div>
    </SiteLayout>
  );
};

export default Layout;
