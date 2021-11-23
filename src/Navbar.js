import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const NavbarStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0",
  };

  const LinkStyle = {
    textDecoration: "none",
    color: "black",
    margin: "0 20px",
    fontSize: 24,
  };

  return (
    <div style={NavbarStyle}>
      <h2>
        <Link style={LinkStyle} to="/">
          Birthday Hub 🎈
        </Link>
      </h2>

      <h6>
        <Link style={LinkStyle} to="/manage">
          Manage ⚙️
        </Link>
      </h6>
    </div>
  );
}
