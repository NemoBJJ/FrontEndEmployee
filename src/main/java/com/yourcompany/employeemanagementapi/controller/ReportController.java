package com.yourcompany.employeemanagementapi.controller;

import com.yourcompany.employeemanagementapi.model.DepartmentReport;
import com.yourcompany.employeemanagementapi.model.JobTitleReport;
import com.yourcompany.employeemanagementapi.service.ReportService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:3001") // Permite requisições do frontend
public class ReportController {

    private final ReportService reportService;

    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }

    // Endpoint para listar a quantidade de funcionários por cargo
    @GetMapping("/job-titles")
    public ResponseEntity<List<JobTitleReport>> getJobTitleReports() {
        List<JobTitleReport> reports = reportService.getJobTitleReports();
        return ResponseEntity.ok(reports);
    }

    // Endpoint para listar o total de salários por departamento
    @GetMapping("/department-salaries")
    public ResponseEntity<List<DepartmentReport>> getDepartmentReports() {
        List<DepartmentReport> reports = reportService.getDepartmentReports();
        return ResponseEntity.ok(reports);
    }
}
