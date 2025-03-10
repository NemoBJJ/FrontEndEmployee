import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './ExportReports.css';

const ExportReports = () => {
  return (
    <Container className="export-reports">
      <h1>Export Reports</h1>

      {/* Container para alinhar os botões corretamente */}
      <div className="buttons-container">
        <Button
          variant="primary"
          href="https://apiempl.neemindev.com/api/reports/export/job-titles/csv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Exportar CSV
        </Button>

        <Button
          variant="success"
          href="https://apiempl.neemindev.com/api/reports/export/job-titles/excel"
          target="_blank"
          rel="noopener noreferrer"
        >
          Exportar Excel
        </Button>

        <Button
          variant="danger"
          href="https://apiempl.neemindev.com/api/reports/export/job-titles/pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Exportar PDF
        </Button>
      </div>
    </Container>
  );
};

export default ExportReports;