import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/jobs">Jobs</Link>
      </nav>
    </header>
  );
}
