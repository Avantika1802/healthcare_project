
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ReportsPage.css";
const UploadReportPage = () => {
    const [file, setFile] = useState(null); // To store the selected file
    const [message, setMessage] = useState(""); // To show success or error messages
    const [reports, setReports] = useState([]); // To store the list of uploaded reports

    // Function to fetch reports from the backend
    const fetchReports = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:5000/api/reports", {
                headers: {
                    Authorization: `Bearer ${token}`, // Add token for authentication
                },
            });
            setReports(response.data);
        } catch (error) {
            console.error("Error fetching reports:", error);
        }
    };

    // Fetch reports on component mount
    useEffect(() => {
        fetchReports();
    }, []);

    // Function to handle file change
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage(""); // Reset the message state

        if (!file) {
            setMessage("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append("report", file); // Key name 'report' should match multer config in backend

        try {
            const token = localStorage.getItem("token");
            const response = await axios.post(
                "http://localhost:5000/api/reports/upload",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`, // Add token for authentication
                    },
                }
            );

            setMessage("File uploaded successfully!");
            setFile(null); // Clear the file input
            fetchReports(); // Refresh the list of reports after upload
        } catch (error) {
            console.error("Error uploading file:", error);
            setMessage("Error uploading file. Please try again.");
        }
    };

    return (
        <div className="upload-report-page">
            <h2 className="heading">Upload Report</h2>
            <form onSubmit={handleSubmit} className="upload-form">
                <div className="form-group">
                    <input type="file" onChange={handleFileChange} className="file-input" />
                </div>
                <button type="submit" className="upload-button">Upload</button>
            </form>
            {message && <p className="message">{message}</p>}

            <h3 className="subheading">Your Uploaded Reports</h3>
            <ul className="reports-list">
                {reports.length > 0 ? (
                    reports.map((report) => (
                        <li key={report._id} className="report-item">
                            <a
                                href={report.reportUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="report-link"
                            >
                                {report.fileName || "View Report"}
                            </a>
                            <p className="report-date">
                                Uploaded on: {new Date(report.uploadDate).toLocaleDateString()}
                            </p>
                        </li>
                    ))
                ) : (
                    <p className="no-reports">No reports uploaded yet.</p>
                )}
            </ul>
        </div>
    );
};

export default UploadReportPage;

