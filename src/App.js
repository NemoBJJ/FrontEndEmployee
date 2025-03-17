import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import ExportReports from './components/ExportReports';
import Navigation from './components/Navigation';
import Release from './components/Release'; // Importando Release.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container mt-4">
        <Link to="/release" className="release-button">
          📜 Release
        </Link>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/export-reports" element={<ExportReports />} />
          <Route path="/release" element={<Release />} />
          <Route path="*" element={<h1>Página não encontrada</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
