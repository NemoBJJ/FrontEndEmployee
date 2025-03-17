import React from 'react';
import { Link } from 'react-router-dom';
import './Release.css';

const Release = () => {
  return (
    <div className="release-container">
      <h2>Purpose</h2>
      <p>A <strong>Human Resources Management Application</strong> designed for companies or corporate sectors, integrating a structured database rich in employee information.</p>
      <ul>
        <li>- Search Filters by name and ID</li>
        <li>- Security System (Login: admin | Password: senha123)</li>
        <li>- Data Insights & Interactive Dashboard</li>
        <li>- Employee/Salary Relationship with Pagination and Filters</li>
        <li>- Report Export Options: Salary per Department and Number of Employees per Position (Excel, CSV, PDF)</li>
      </ul>

      <h2>Integrated Technologies</h2>
      <ul>
        <li>- Backend: Java, Spring Boot, Hibernate, Maven</li>
        <li>- Frontend: React, Axios, CSS</li>
        <li>- Database: Advanced SQL, MySQL WorkBench</li>
        <li>- Cloud & Infrastructure: AWS (EC2, LoadBalancer, SSL Certificates)</li>
        <li>- Netlify: CI/CD, CDN, DNS Manager</li>
      </ul>

      <h2>How to Run the Project</h2>
      <pre>
        git clone https://github.com/NemoBJJ/EmployeeManagementAPI.git
        cd EmployeeManagementAPI
        mvn install
        mvn spring-boot:run
      </pre>

      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

export default Release;
