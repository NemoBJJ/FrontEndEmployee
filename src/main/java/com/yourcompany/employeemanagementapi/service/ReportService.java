package com.yourcompany.employeemanagementapi.service;

import com.yourcompany.employeemanagementapi.model.JobTitleReport;
import com.yourcompany.employeemanagementapi.model.DepartmentReport;
import com.yourcompany.employeemanagementapi.repository.EmployeeRepository;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {

    private final EmployeeRepository employeeRepository;

    public ReportService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Cacheable(value = "jobTitleReports", key = "'jobTitle'")
    public List<JobTitleReport> getJobTitleReports() {
        System.out.println("Méthod getJobTitleReports called and done");
        return employeeRepository.countEmployeesByJobTitle();
    }

    @Cacheable(value = "departmentReports", key = "'department'")
    public List<DepartmentReport> getDepartmentReports() {
        System.out.println("Méthod getDepartmentReports called and done");
        return employeeRepository.sumSalariesByDepartment();
    }
}