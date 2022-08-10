import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import NewJob from "../pages/NewJob";
import Job from "../pages/Job";
import JobEdit from "../pages/JobEdit";

export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/new" element={<NewJob />} />
            <Route path="/jobs/:id" element={<Job />} />
            <Route path="/jobs/:id/edit" element={<JobEdit />} />
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
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
