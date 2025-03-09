package com.yourcompany.employeemanagementapi.service;

import com.yourcompany.employeemanagementapi.model.JobTitleReport;
import com.yourcompany.employeemanagementapi.repository.EmployeeRepository;
import com.yourcompany.employeemanagementapi.model.DepartmentReport;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReportExportService {

    private final ReportService reportService;

    public ReportExportService(ReportService reportService) {
        this.reportService = reportService;
    }

    // Exportar Funcionários por Cargo para CSV
    public void exportJobTitlesToCsv(HttpServletResponse response) throws IOException {
        List<JobTitleReport> reports = reportService.getJobTitleReports();
        StringBuilder csvData = new StringBuilder("Cargo,Quantidade de Funcionários\n");
        for (JobTitleReport report : reports) {
            csvData.append(report.getJobTitle()).append(",").append(report.getEmployeeCount()).append("\n");
        }
        response.getWriter().write(csvData.toString());
    }

    // Exportar Funcionários por Cargo para Excel
    public void exportJobTitlesToExcel(HttpServletResponse response) throws IOException {
        List<JobTitleReport> reports = reportService.getJobTitleReports();
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Funcionários por Cargo");
        Row headerRow = sheet.createRow(0);
        headerRow.createCell(0).setCellValue("Cargo");
        headerRow.createCell(1).setCellValue("Quantidade de Funcionários");

        int rowNum = 1;
        for (JobTitleReport report : reports) {
            Row row = sheet.createRow(rowNum++);
            row.createCell(0).setCellValue(report.getJobTitle());
            row.createCell(1).setCellValue(report.getEmployeeCount());
        }

        ServletOutputStream outputStream = response.getOutputStream();
        workbook.write(outputStream);
        workbook.close();
        outputStream.close();
    }

    // Exportar Funcionários por Cargo para PDF
    public void exportJobTitlesToPdf(HttpServletResponse response) throws IOException {
        List<JobTitleReport> reports = reportService.getJobTitleReports();

        StringBuilder pdfData = new StringBuilder("Relatório de Funcionários por Cargo\n\n");
        pdfData.append("Cargo | Quantidade de Funcionários\n");
        pdfData.append("---------------------------------\n");

        for (JobTitleReport report : reports) {
            pdfData.append(report.getJobTitle()).append(" | ").append(report.getEmployeeCount()).append("\n");
        }

        response.getWriter().write(pdfData.toString());
    }
}
