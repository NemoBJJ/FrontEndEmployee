import React, { useEffect, useState } from 'react';
import { getDashboardData } from '../api/api';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    getDashboardData().then((data) => {
      setDashboardData(data);
    });
  }, []);

  if (!dashboardData) return <div>Loading...</div>;

  const chartData = {
    labels: dashboardData.jobTitles.map((item) => item.jobTitle),
    datasets: [
      {
        label: 'Range',
        data: dashboardData.jobTitles.map((item) => item.employeeCount),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="chart-container">
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;