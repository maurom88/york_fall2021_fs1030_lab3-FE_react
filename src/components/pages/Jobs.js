import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Jobs() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState();

  useEffect(() => {
    const url = "http://localhost:5000/jobs";

    fetch(url, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => handleFetchError(err));

    function handleFetchError(err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <h2>Jobs list</h2>
      {loading || !jobs ? (
        <div>Loading...</div>
      ) : (
        jobs.map((job) => (
          <div className="job-div" key={job.id}>
            <p className="job-p"><Link to={`/jobs/${job.id}`}>{job.title}</Link></p>
            <p className="job-p">{job.description}</p>
            <p className="job-p">{job.location}</p>
          </div>
        ))
      )}
    </div>
  );
}
