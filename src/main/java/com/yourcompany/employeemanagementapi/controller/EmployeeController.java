package com.yourcompany.employeemanagementapi.controller;

import com.yourcompany.employeemanagementapi.entity.Employee;
import com.yourcompany.employeemanagementapi.model.EmployeeSalaryDTO;
import com.yourcompany.employeemanagementapi.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3001") // Permite requisições do frontend
public class EmployeeController {

    @Autowired
    private DashboardService dashboardService;

    // Lista completa de funcionários (JSON)
    @GetMapping
    public Page<Employee> listAllEmployeesJson(Pageable pageable) {
        return dashboardService.getEmployeesPaginated(pageable);
    }

    // Funcionários com nome e salário (JSON)
    @GetMapping("/salaries-json")
    public Page<EmployeeSalaryDTO> listEmployeesWithSalaryJson(Pageable pageable) {
        return dashboardService.getEmployeesWithSalary(pageable);
    }

    // Buscar funcionário por ID
    @GetMapping("/{id}")
    public ResponseEntity<Employee> findEmployeeById(@PathVariable Long id) {
        return dashboardService.findEmployeeById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}