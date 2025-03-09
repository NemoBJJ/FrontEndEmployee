package com.yourcompany.employeemanagementapi.repository;

import com.yourcompany.employeemanagementapi.entity.Employee;
import com.yourcompany.employeemanagementapi.model.EmployeeSalaryDTO;
import com.yourcompany.employeemanagementapi.model.JobTitleReport;
import com.yourcompany.employeemanagementapi.model.DepartmentReport;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // Consulta com paginação e ordenação
    Page<Employee> findAll(Pageable pageable);

    // Consulta para obter a quantidade de funcionários por cargo
    @Query("SELECT e.jobTitle, COUNT(e) FROM Employee e GROUP BY e.jobTitle")
    List<Object[]> findEmployeesByJobTitle();

    // Consulta para obter a quantidade de funcionários por cargo (usando DTO)
    @Query("SELECT new com.yourcompany.employeemanagementapi.model.JobTitleReport(e.jobTitle, COUNT(e)) " +
           "FROM Employee e GROUP BY e.jobTitle")
    List<JobTitleReport> countEmployeesByJobTitle();

    // Consulta para obter o total de salários por departamento
    @Query("SELECT new com.yourcompany.employeemanagementapi.model.DepartmentReport(e.department, SUM(e.salary)) " +
           "FROM Employee e GROUP BY e.department")
    List<DepartmentReport> sumSalariesByDepartment();

    // Consulta para listar apenas id, nome e salário de funcionários
    @Query("SELECT new com.yourcompany.employeemanagementapi.model.EmployeeSalaryDTO(e.id, e.name, e.salary) " +
           "FROM Employee e")
    Page<EmployeeSalaryDTO> findEmployeesWithSalary(Pageable pageable);
}