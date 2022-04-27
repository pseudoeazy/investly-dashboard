import React from "react";
import Sidebar from "containers/sidebar";
import SiteLayout from "./site-layout";

const Layout = ({ children }) => {
  return (
    <SiteLayout>
      <div className="flex min-h-screen overflow-hidden">
        <Sidebar />
        <main className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-9 py-6">
          {children}
        </main>
      </div>
    </SiteLayout>
  );
};

export default Layout;
