import React from "react";
import "./Layout.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="layout">{children}</main>;
};

export default Layout;
