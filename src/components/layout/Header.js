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
        <Link to="/jobs">Jobs</Link> |{" "}
        <Link to="/jobs/new">New Job</Link> |{" "}
        <Link to="/job_seeker/image-upload">Job seeker image upload</Link> |{" "}
        {/* <Link to="/jobs/image-upload">Job image upload</Link> */}
      </nav>
    </header>
  );
}
