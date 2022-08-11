import React, { useState } from "react";

export default function NewJob() {

    const [jobTitle, setJobTitle] = useState();
    const [jobDescription, setJobDescription] = useState();
    const [jobLocation, setJobLocation] = useState();
    const [jobHourlyPay, setJobHourlyPay] = useState();
    const [jobYearlySalary, setJobYearlySalary] = useState();
    const [expiresAt, setExpiresAt] = useState();
    const [startDate, setStartDate] = useState();
    const [companyId, setCompanyId] = useState();

    function submitNewJobValues(e) {
        e.preventDefault();

        const url = `http://localhost:5000/jobs/`;
        const body = {
            title: jobTitle,
            description: jobDescription,
            location: jobLocation,
            expires_at: expiresAt,
            start_date: startDate,
            hourly_pay: jobHourlyPay,
            yearly_salary: jobYearlySalary,
            company_id: companyId,
        };

        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
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
                    onChange={e => setJobTitle(e.target.value)}
                ></input>

                <br />

                <label htmlFor="description">Description: </label>
                <input
                    name="description"
                    type="text"
                    className="job-p"
                    onChange={e => setJobDescription(e.target.value)}
                ></input>

                <br />

                <label htmlFor="location">Location: </label>
                <input
                    name="location"
                    type="text"
                    className="job-p"
                    onChange={e => setJobLocation(e.target.value)}
                ></input>

                <br />

                <label htmlFor="expiresAt">Expiration date: </label>
                <input
                    name="expiresAt"
                    type="date"
                    className="job-p"
                    onChange={e => setExpiresAt(e.target.value)}
                ></input>

                <br />

                <label htmlFor="startDate">Start date: </label>
                <input
                    name="startDate"
                    type="date"
                    className="job-p"
                    onChange={e => setStartDate(e.target.value)}
                ></input>

                <br />

                <label htmlFor="hourlyPay">Hourly pay*: </label>
                <input
                    name="hourlyPay"
                    type="number"
                    className="job-p"
                    min={0}
                    max={999.99}
                    onChange={e => setJobHourlyPay(e.target.value)}
                ></input>

                <br />

                <label htmlFor="yearlySalary">Yearly Salary*: </label>
                <input
                    name="yearlySalary"
                    type="number"
                    className="job-p"
                    min={0}
                    max={999999.99}
                    onChange={e => setJobYearlySalary(e.target.value)}
                ></input>

                <br />

                <label htmlFor="company">Company: </label>
                <input
                    name="company"
                    type="text"
                    className="job-p"
                    onChange={e => setCompanyId(e.target.value)}
                ></input>

                <br />

                <label htmlFor="uploadedFile">Upload image: </label>
                <input type="file" name="uploadedFile" />

                <p>* Leave empty if not applicable</p>

                <button type="submit">Save</button>

            </form>
        </div>
    );
}