package com.yourcompany.employeemanagementapi.model;

public class JobTitleReport {
    private String jobTitle;
    private Long employeeCount;

    public JobTitleReport(String jobTitle, Long employeeCount) {
        this.jobTitle = jobTitle;
        this.employeeCount = employeeCount;
    }

    // Getters e Setters
    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public Long getEmployeeCount() {
        return employeeCount;
    }

    public void setEmployeeCount(Long employeeCount) {
        this.employeeCount = employeeCount;
    }
}