import React from "react";
import Header from "../component/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="space-y-5">
      <Header />
      <Outlet />
    </div>
  );
}
