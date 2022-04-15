import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function JobEdit() {
  let params = useParams();

  const [loading, setLoading] = useState(true);
  const [job, setJob] = useState();

  const [publishedAt, setPublishedAt] = useState();
  const [expiresAt, setExpiresAt] = useState();
  const [startDate, setStartDate] = useState();
  const [companyId, setCompanyId] = useState();
  const [jobId, setJobId] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [jobDescription, setJobDescription] = useState();
  const [jobLocation, setJobLocation] = useState();
  const [jobHourlyPay, setJobHourlyPay] = useState();
  const [jobYearlySalary, setJobYearlySalary] = useState();

  function setJobValues(job) {
    setJob(job);
    setPublishedAt(job.published_at);
    setExpiresAt(job.expires_at);
    setStartDate(job.start_date);
    setCompanyId(job.company_id);
    setJobId(job.job_id);
    setJobTitle(job.title);
    setJobDescription(job.description);
    setJobLocation(job.location);
    setJobHourlyPay(job.hourly_pay);
    setJobYearlySalary(job.yearly_salary);
  }

  useEffect(() => {
    const url = `http://localhost:5000/jobs/${params.id}`;

    fetch(url, {
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setJobValues(data[0]))
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => handleFetchError(err));

    function handleFetchError(err) {
      console.log(err);
    }
  }, []);

  function submitNewJobValues(e) {
    e.preventDefault();

    const url = `http://localhost:5000/jobs/${params.id}`;
    const data = {
      expires_at: expiresAt.slice(0, -2), // MySQL returns an error because of the date formatting. Removing the last character appears to fix it
      start_date: startDate.slice(0, -2), // Same as above
      company_id: companyId,
      job_id: jobId,
      title: jobTitle,
      description: jobDescription,
      location: jobLocation,
      hourly_pay: jobHourlyPay,
      yearly_salary: jobYearlySalary,
    };

    fetch(url, {
      method: "put",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleJobDescriptionChange(event) {
    setJobDescription(event.target.value);
  }

  function handleJobLocationChange(event) {
    setJobLocation(event.target.value);
  }

  return (
    <div>
      {loading || !job ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{job?.title}</h2>
          <form className="job-div" onSubmit={(e) => submitNewJobValues(e)}>
            <label htmlFor="job-description">Job description: </label>
            <input
              name="job-description"
              type="text"
              className="job-p"
              defaultValue={job.description}
              onChange={handleJobDescriptionChange}
            />
            <br />
            <label htmlFor="job-location">Job location: </label>
            <input
              name="job-location"
              type="text"
              className="job-p"
              defaultValue={job.location}
              onChange={handleJobLocationChange}
            />
            <br />
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
