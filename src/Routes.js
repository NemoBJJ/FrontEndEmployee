import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import EmployeeList from './components/EmployeeList/EmployeeList';
import EmployeeSalaryList from './components/EmployeeSalaryList/EmployeeSalaryList';
import ExportReports from './components/ExportReports/ExportReports';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/employees-salaries" element={<EmployeeSalaryList />} />
      <Route path="/export-reports" element={<ExportReports />} />
    </Routes>
  );
};

export default AppRoutes;