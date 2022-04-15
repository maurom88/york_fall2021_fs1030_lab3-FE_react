import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Job() {
  let params = useParams();

  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState();

  useEffect(() => {
    const url = `http://localhost:5000/jobs/${params.id}`;

    fetch(url, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setJob(data[0]))
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
      {loading || !job ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{job?.title}</h2>
          <div className="job-div">
            <p className="job-p">{job.description}</p>
            <p className="job-p">{job.location}</p>
          </div>
        </div>
      )}
    </div>
  );
}
