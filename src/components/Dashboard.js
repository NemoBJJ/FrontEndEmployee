import React, { useEffect, useState } from 'react';
import { getDashboardData } from '../api/api';
import { Pie } from 'react-chartjs-2'; // Alterado para gráfico de pizza
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

  // Dados para o gráfico de pizza
  const chartData = {
    labels: dashboardData.jobTitles.map((item) => item.jobTitle),
    datasets: [
      {
        label: 'Funcionários por Cargo',
        data: dashboardData.jobTitles.map((item) => item.employeeCount),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF'
        ], // Cores para cada fatia
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  // Opções para o gráfico de pizza
  const options = {
    responsive: true, // Torna o gráfico responsivo
    maintainAspectRatio: false, // Permite ajustar a proporção
    plugins: {
      legend: {
        position: 'bottom', // Posiciona a legenda na parte inferior
        labels: {
          font: {
            size: 14, // Tamanho da fonte da legenda
          },
        },
      },
      tooltip: {
        enabled: true, // Ativa tooltips ao passar o mouse
      },
    },
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="chart-container">
        <Pie data={chartData} options={options} /> {/* Gráfico de pizza */}
      </div>
    </div>
  );
};

export default Dashboard;