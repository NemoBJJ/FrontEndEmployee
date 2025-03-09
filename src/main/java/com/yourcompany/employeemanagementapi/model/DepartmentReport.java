package com.yourcompany.employeemanagementapi.model;

import java.math.BigDecimal;

public class DepartmentReport {
    private String department;
    private BigDecimal totalSalary;

    public DepartmentReport(String department, BigDecimal totalSalary) {
        this.department = department;
        this.totalSalary = totalSalary;
    }

    // Getters e Setters
    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public BigDecimal getTotalSalary() {
        return totalSalary;
    }

    public void setTotalSalary(BigDecimal totalSalary) {
        this.totalSalary = totalSalary;
    }
}