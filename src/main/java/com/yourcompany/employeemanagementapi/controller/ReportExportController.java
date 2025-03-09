package com.yourcompany.employeemanagementapi.controller;

import com.yourcompany.employeemanagementapi.service.ReportExportService;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:3001")
public class ReportExportController {

    private final ReportExportService reportExportService;

    public ReportExportController(ReportExportService reportExportService) {
        this.reportExportService = reportExportService;
    }

    // Exportar Relatório de Funcionários por Cargo para CSV
    @GetMapping("/export/job-titles/csv")
    public void exportJobTitlesCsv(HttpServletResponse response) throws IOException {
        response.setContentType("text/csv");
        response.setHeader("Content-Disposition", "attachment; filename=job_titles.csv");
        reportExportService.exportJobTitlesToCsv(response);
    }

    // Exportar Relatório de Funcionários por Cargo para Excel
    @GetMapping("/export/job-titles/excel")
    public void exportJobTitlesExcel(HttpServletResponse response) throws IOException {
        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-Disposition", "attachment; filename=job_titles.xlsx");
        reportExportService.exportJobTitlesToExcel(response);
    }

    // Exportar Relatório de Funcionários por Cargo para PDF
    @GetMapping("/export/job-titles/pdf")
    public void exportJobTitlesPdf(HttpServletResponse response) throws IOException {
        response.setContentType("application/pdf");
        response.setHeader("Content-Disposition", "attachment; filename=job_titles.pdf");
        reportExportService.exportJobTitlesToPdf(response);
    }
}
