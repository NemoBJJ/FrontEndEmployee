package com.yourcompany.employeemanagementapi.service;

import com.yourcompany.employeemanagementapi.entity.Employee;
import com.yourcompany.employeemanagementapi.model.EmployeeSalaryDTO;
import com.yourcompany.employeemanagementapi.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList; // Importação adicionada
import java.util.HashMap;
import java.util.List; // Importação adicionada
import java.util.Map;
import java.util.Optional;

@Service
public class DashboardService {

    @Autowired
    private EmployeeRepository employeeRepository;

    // Paginação de funcionários
    public Page<Employee> getEmployeesPaginated(Pageable pageable) {
        return employeeRepository.findAll(pageable);
    }

    // Paginação de funcionários com salário
    public Page<EmployeeSalaryDTO> getEmployeesWithSalary(Pageable pageable) {
        return employeeRepository.findEmployeesWithSalary(pageable);
    }

    // Dados agregados para o dashboard
    public Map<String, Object> getDashboardData() {
        Map<String, Object> data = new HashMap<>();

        // Consulta ao banco para obter cargos e contagem de funcionários
        List<Object[]> jobTitlesFromDb = employeeRepository.findEmployeesByJobTitle();
        List<Map<String, Object>> jobTitles = new ArrayList<>();

        for (Object[] result : jobTitlesFromDb) {
            Map<String, Object> jobTitleData = new HashMap<>();
            jobTitleData.put("jobTitle", result[0]); // Nome do cargo
            jobTitleData.put("employeeCount", result[1]); // Quantidade de funcionários
            jobTitles.add(jobTitleData);
        }

        // Adiciona os dados dos cargos ao mapa final
        data.put("jobTitles", jobTitles);

        // Adiciona também a contagem agregada por cargo para outras possíveis utilizações
        Map<String, Long> jobTitleCounts = new HashMap<>();
        for (Object[] result : jobTitlesFromDb) {
            String jobTitle = (String) result[0];
            Long count = (Long) result[1];
            jobTitleCounts.put(jobTitle, count);
        }
        data.put("employeeCountByJobTitle", jobTitleCounts);

        return data;
    }

    // Buscar funcionário por ID
    public Optional<Employee> findEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }
}