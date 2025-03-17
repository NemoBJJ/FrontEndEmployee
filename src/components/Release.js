{\rtf1}import React from 'react';
import { Link } from 'react-router-dom';
import './Release.css';

const Release = () => {
  return (
    <div className="release-container">
      <h2>🎯 Purpose</h2>
      <p>A <strong>Human Resources Management Application</strong> designed for companies or corporate sectors, integrating a structured database rich in employee information.</p>
      <ul>
        <li>✅ <strong>Search Filters</strong> by name and ID</li>
        <li>✅ <strong>Security System</strong> (Login: admin | Password: senha123)</li>
        <li>✅ <strong>Data Insights & Interactive Dashboard</strong></li>
        <li>✅ <strong>Employee/Salary Relationship</strong> with Pagination and Filters</li>
        <li>✅ <strong>Report Export Options:</strong> Salary per Department and Number of Employees per Position (Excel, CSV, PDF)</li>
      </ul>

      <h2>🛠 Integrated Technologies</h2>
      <ul>
        <li>- <strong>Backend:</strong> Java, Spring Boot, Hibernate, Maven</li>
        <li>- <strong>Frontend:</strong> React, Axios, CSS</li>
        <li>- <strong>Database:</strong> Advanced SQL, MySQL WorkBench</li>
        <li>- <strong>Cloud & Infrastructure:</strong> AWS (EC2, LoadBalancer, SSL Certificates)</li>
        <li>- <strong>Netlify:</strong> CI/CD, CDN, DNS Manager</li>
      </ul>

      <h2>🚀 How to Run the Project</h2>
      <pre>
        git clone https://github.com/NemoBJJ/EmployeeManagementAPI.git
        cd EmployeeManagementAPI
        mvn install
        mvn spring-boot:run
      </pre>

      <Link to="/" className="back-button">🔙 Back to Home</Link>
    </div>
  );
};

export default Release;
