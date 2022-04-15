import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import Job from "../pages/Job";

export default function Main() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<Job />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          {/* <Route path="/jobseeker:id" element={<JobSeeker />} /> */}
        </Routes>
      </BrowserRouter>
    </main>
  );
}
