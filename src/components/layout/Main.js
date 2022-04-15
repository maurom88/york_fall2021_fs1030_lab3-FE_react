import React from "react";

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Jobs from "../pages/Jobs";

export default function Main() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          {/* <Route path="/jobs/:id" element={<Job />} /> */}
          {/* <Route path="/jobseeker:id" element={<JobSeeker />} /> */}
        </Routes>
      </BrowserRouter>
    </main>
  );
}
