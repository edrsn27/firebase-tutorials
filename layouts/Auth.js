import React from "react";
import Nav from "../components/Navbar/Nav";
export default function Auth({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
}
