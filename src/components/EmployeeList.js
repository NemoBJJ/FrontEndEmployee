import React, { useEffect, useState } from 'react';
import { getEmployees } from '../api/api';
import { Table, Pagination } from 'react-bootstrap';
import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10; // Tamanho da página

  useEffect(() => {
    fetchEmployees(page);
  }, [page]);

  const fetchEmployees = (page) => {
    getEmployees(page, pageSize).then((response) => {
      setEmployees(response.content);
      setTotalPages(response.totalPages);
    });
  };

  return (
    <div className="employee-list">
      <h1>Lista de Funcionários</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Departamento</th>
            <th>Salário</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.jobTitle}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item key={i} active={i === page} onClick={() => setPage(i)}>
            {i + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default EmployeeList;