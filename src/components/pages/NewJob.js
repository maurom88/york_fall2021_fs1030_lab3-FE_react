import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function NewJob() {
    let params = useParams();

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
            method: "post",
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

    function handleJobTitleChange(event) {
        setJobTitle(event.target.value);
    }

    function handleJobDescriptionChange(event) {
        setJobDescription(event.target.value);
    }

    function handleJobLocationChange(event) {
        setJobLocation(event.target.value);
    }

    function handleExpiryDateChange(event) {
        setExpiresAt(event.target.value);
    }

    function handleJobDescriptionChange(event) {
        setJobDescription(event.target.value);
    }

    function handleStartDateChange(event) {
        setStartDate(event.target.value);
    }

    function handleJobHourlyPayChange(event) {
        setJobHourlyPay(event.target.value);
    }

    function handleJobYearlySalaryChange(event) {
        setJobYearlySalary(event.target.value);
    }

    function handleJobDescriptionChange(event) {
        setJobDescription(event.target.value);
    }

    return (
        <div>
            <h2>New Job</h2>

            <form className="job-div" onSubmit={(e) => submitNewJobValues(e)}>
                <label htmlFor="title">Title: </label>
                <input
                    name="title"
                    type="text"
                    className="job-p"
                    onChange={handleJobTitleChange}
                ></input>

                <br />

                <label htmlFor="description">Description: </label>
                <input
                    name="description"
                    type="text"
                    className="job-p"
                    onChange={handleJobDescriptionChange}
                ></input>

                <br />

                <label htmlFor="location">Location: </label>
                <input
                    name="location"
                    type="text"
                    className="job-p"
                    onChange={handleJobLocationChange}
                ></input>

                <br />

                <label htmlFor="expiresAt">Expiration date: </label>
                <input
                    name="expiresAt"
                    type="date"
                    className="job-p"
                    onChange={handleExpiryDateChange}
                ></input>

                <br />

                <label htmlFor="startDate">Start date: </label>
                <input
                    name="startDate"
                    type="date"
                    className="job-p"
                    onChange={handleStartDateChange}
                ></input>

                <br />

                <label htmlFor="hourlyPay">Hourly pay*: </label>
                <input
                    name="hourlyPay"
                    type="number"
                    className="job-p"
                    min={0}
                    max={999.99}
                    onChange={handleJobHourlyPayChange}
                ></input>

                <br />

                <label htmlFor="yearlySalary">Yearly Salary*: </label>
                <input
                    name="yearlySalary"
                    type="number"
                    className="job-p"
                    min={0}
                    max={999999.99}
                    onChange={handleJobYearlySalaryChange}
                ></input>

                <br />

                <label htmlFor="company">Company: </label>
                <input
                    name="company"
                    type="text"
                    className="job-p"
                    onChange={null}
                ></input>

                <p>* Leave empty if not applicable</p>

                <button type="submit">Save</button>

            </form>
        </div>
    );
}