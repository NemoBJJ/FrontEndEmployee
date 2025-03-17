import React, { useEffect, useState } from 'react';
import { getEmployees, getEmployeeById } from '../api/api'; // Adicione a nova função
import { Table, Pagination, Form, Button, Alert } from 'react-bootstrap';
import './EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchId, setSearchId] = useState(''); // Estado para o ID de busca
  const [searchedEmployee, setSearchedEmployee] = useState(null); // Estado para o funcionário buscado
  const [error, setError] = useState(null); // Estado para mensagens de erro
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

  // Função para buscar funcionário por ID
  const handleSearch = () => {
    if (!searchId) {
      setError('Por favor, insira um ID válido.');
      return;
    }

    getEmployeeById(searchId)
      .then((employee) => {
        setSearchedEmployee(employee);
        setError(null);
      })
      .catch(() => {
        setError('Funcionário não encontrado.');
        setSearchedEmployee(null);
      });
  };

  return (
    <div className="employee-list">
      <h1>LIST</h1>

      {/* Campo de busca por ID */}
      <Form.Group className="mb-3">
        <Form.Label>find by ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="HERE"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>
          SEARCH
        </Button>
      </Form.Group>

      {/* Exibir mensagem de erro */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Exibir detalhes do funcionário buscado */}
      {searchedEmployee && (
        <div className="employee-details">
          <h2>Detalhes do Funcionário</h2>
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
              <tr>
                <td>{searchedEmployee.id}</td>
                <td>{searchedEmployee.name}</td>
                <td>{searchedEmployee.jobTitle}</td>
                <td>{searchedEmployee.department}</td>
                <td>{searchedEmployee.salary}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}

      {/* Lista de funcionários */}
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

      {/* Paginação */}
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